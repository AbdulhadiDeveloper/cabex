import NewsletterSection from '@/components/shared/ui/NewsletterSection'
import InnerHero from '@/components/shared/ui/SamllHero'
import FAQAccordionSection from '@/components/widgets/FAQs/FAQAccordionSection'
import FaqIntroSection from '@/components/widgets/FAQs/FaqIntroSection'
import React from 'react'

function page() {
  return (
    <>
    <InnerHero>
                    <h1 className="text-5xl lg:text-[4.5rem] font-bold tracking-tight capitalize">
                        <span className="text-white">FAQ&#39;s</span>
                        
                    </h1>
    </InnerHero>
    <FaqIntroSection/>
    <FAQAccordionSection/>
    <NewsletterSection/>
    </>
  )
}

export default page