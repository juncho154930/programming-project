import Image from "next/image";
import ipsumlorem from "@/assets/ipsumloremlogo.webp";

const LandingPartners = () => {
  return (
    <section className="container pb-24" id="partners">
      <div className="flex flex-wrap mx-24">
        <div className="w-full flex flex-wrap justify-between space-x-4">
          <Image src={ipsumlorem} alt="ipsum lorem" className="h-24 w-auto" />
          <Image src={ipsumlorem} alt="ipsum lorem" className="h-24 w-auto" />
          <Image src={ipsumlorem} alt="ipsum lorem" className="h-24 w-auto" />
          <Image src={ipsumlorem} alt="ipsum lorem" className="h-24 w-auto" />
          <Image src={ipsumlorem} alt="ipsum lorem" className="h-24 w-auto" />
        </div>
      </div>
    </section>
  );
};

export default LandingPartners;
