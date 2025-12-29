import CustomPlanInquiry from "@/components/pricing/CustomPlanInquiry";
import PricingCards from "@/components/pricing/PricingCards";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingHero from "@/components/pricing/PricingHero";

export default function page() {
  return (
    <div className="pt-20">
      <PricingHero/>
      <PricingCards/>
      <PricingComparisonTable/>
      <PricingFAQ/>
      {/* <CustomPlanInquiry/> */}
    </div>
  )
}
