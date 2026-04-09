import { HeroSection } from "@/components/sections/HeroSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { aboutContent, aboutTeamMembers } from "@/content/about";

export default function AboutPage() {
  return (
    <>
      <HeroSection {...aboutContent.hero} />
      <ImageTextSection
        heading={aboutContent.intro.heading}
        body={aboutContent.intro.body}
        image={aboutContent.intro.image}
        imageAlt={aboutContent.intro.imageAlt}
      />
      <IndustriesGrid heading={aboutContent.industriesHeading} items={aboutContent.industries} />
      <ImageTextSection
        heading={aboutContent.geography.heading}
        body={aboutContent.geography.body}
        image={aboutContent.geography.image}
        imageAlt={aboutContent.geography.imageAlt}
      />
      <SectionIntro heading={aboutContent.teamHeading} body="" />
      <TeamGrid members={aboutTeamMembers} />
      <SectionIntro heading={aboutContent.trust.heading} body={aboutContent.trust.body} />
    </>
  );
}
