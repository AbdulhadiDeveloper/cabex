import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(req) {
  try {
    const body = await req.json();
    const { pickup, via, dropoff } = body;

    // 1. Initialize Auth
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // 2. Load the document
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // 3. Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // 4. Add headers if they don't exist (Optional, but good for first run)
    await sheet.setHeaderRow(['Date', 'Pick Up', 'Via', 'Drop Off']);

    // 5. Append the row
    await sheet.addRow({
      Date: new Date().toLocaleString(),
      'Pick Up': pickup,
      Via: via || 'N/A',
      'Drop Off': dropoff,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Sheet Error:', error);
    return NextResponse.json({ message: 'Error saving data' }, { status: 500 });
  }
}