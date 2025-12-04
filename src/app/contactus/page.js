import NewsletterSection from '@/components/shared/ui/NewsletterSection'
import InnerHero from '@/components/shared/ui/SamllHero'
import ContactFormSection from '@/components/widgets/contactus/ContactFormSection'
import GetInTouchSection from '@/components/widgets/contactus/GetInTouchSection'
import React from 'react'


function ContactUsPage() {
  return (
    <>
    <InnerHero>
                <h1 className="text-5xl lg:text-[4.5rem] font-bold tracking-tight capitalize">
                    <span className="text-white">Contact </span>
                    <span className="text-[#9C0E0F]">us</span>
                </h1>
    </InnerHero>
    <GetInTouchSection/>
    <ContactFormSection/>
    <NewsletterSection/>
    </>
  )
}

export default ContactUsPage