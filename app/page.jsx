import CompanySection from "@/components/about/CompanySection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import Hero from "@/components/home/Hero";
import Faqs from "@/components/home/Faqs";
import StatusCounter from "@/components/home/StatusCounter";
import Testimonial from "@/components/home/Testimonial";
import WorkProcess from "@/components/home/WorkProcess";
import Services from "@/components/services/Services";

export default function page() {
  return (
    <section>
      <Hero/>
      <StatusCounter/>
      <Services/>
      <CompanySection/>
      <WorkProcess/>
      <WhyChooseUs/>
      {/* <Testimonial/> */}
      <Faqs/>
      <CallToAction/>
    </section>
  );
}
