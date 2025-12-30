import StatusCounter from "@/components/home/StatusCounter";
import WorkProcess from "@/components/home/WorkProcess";
import ServiceHero from "@/components/services/ServiceHero";
import Services from "@/components/services/Services";

export default function page() {
  return (
    <div className="pt-20">
      <ServiceHero />
      <Services />
      <StatusCounter />
      <WorkProcess />
    </div>
  );
}
