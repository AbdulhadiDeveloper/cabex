import React from 'react'
import InnerHero from "@/components/shared/ui/SamllHero";
import DefinitionSection from '@/components/widgets/termsAndConditions/DefinitionSection';
import TermsListSection from '@/components/widgets/termsAndConditions/TermsListSection';
import ReadyToBookSection from '@/components/shared/ui/ReadyToBookSection';
import NewsletterSection from '@/components/shared/ui/NewsletterSection';


function TermsPage() {
  return (
    <>
    {/* Passing content via Children */}
          <InnerHero>
            <h1 className="text-5xl lg:text-[4.5rem] font-bold tracking-tight capitalize">
                <span className="text-white">Terms & </span>
                <span className="text-[#9C0E0F]">Condtions</span>
            </h1>
          </InnerHero>

          <DefinitionSection/>
          <TermsListSection/>

          <div className="py-28">
          <ReadyToBookSection />
          </div>

          <NewsletterSection/>
    </>
  )
}

export default TermsPage