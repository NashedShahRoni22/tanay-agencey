import AboutHero from "@/components/about/AboutHero";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import CoreValues from "@/components/about/CoreValues";
import StoryMission from "@/components/about/StoryMission";
import CallToAction from "@/components/home/CallToAction";

export default function page() {
  return (
    <div className="pt-20">
      <AboutHero />
      <StoryMission/>
      <CoreValues />
      <CompanyTimeline />
      <CallToAction/>
    </div>
  )
}
