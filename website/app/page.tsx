import { HeroSection } from "@/components/sections/HeroSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { MapSection } from "@/components/sections/MapSection";
import { PinnedFinanceSection } from "@/components/sections/PinnedFinanceSection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { SplitFeatureSection } from "@/components/sections/SplitFeatureSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { homeContent, globalTeamMembers } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <HeroSection {...homeContent.hero} />
      <SectionIntro
        heading={homeContent.intro.heading}
        body={homeContent.intro.body}
        variant="split"
        rightCards={homeContent.stats}
        compact
      />
      <PinnedFinanceSection
        eyebrow={homeContent.financeSection.eyebrow}
        heading={homeContent.financeSection.heading}
        summary={homeContent.financeSection.summary}
        items={homeContent.financeSection.items}
      />
      <SplitFeatureSection
        heading={homeContent.whyChoose.heading}
        body={homeContent.whyChoose.body}
        ctaLabel={homeContent.whyChoose.ctaLabel}
        ctaHref={homeContent.whyChoose.ctaHref}
        items={homeContent.featureCards}
      />
      <ImageTextSection
        heading={homeContent.dashboard.heading}
        body={homeContent.dashboard.body}
        listItems={homeContent.dashboard.steps}
        image={homeContent.dashboard.image}
        imageAlt={homeContent.dashboard.imageAlt}
        ctaLabel={homeContent.dashboard.ctaLabel}
        ctaHref={homeContent.dashboard.ctaHref}
      />
      <TestimonialQuote
        heading={homeContent.testimonial.heading}
        quote={homeContent.testimonial.quote}
        author={homeContent.testimonial.author}
      />
      <TeamGrid members={globalTeamMembers} />
      <MapSection
        heading={homeContent.contactMap.heading}
        body={homeContent.contactMap.body}
        embedUrl={homeContent.contactMap.embedUrl}
      />
    </>
  );
}
