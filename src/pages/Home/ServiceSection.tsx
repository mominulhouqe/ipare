import ServiceBettaryComponent from "@/components/ServicesTiels/ServiceBettaryComponent";
import Container from "@/components/ui/Container";

const ServiceSection = () => {
  return (
    <Container className="">
      <div className="flex flex-col justify-center items-center my-20">
        <h1>Our Services</h1>
        <p className="max-w-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          cumque.{" "}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-[20px]">
        <ServiceBettaryComponent />
        <div className="col-span-6 md:col-span-5 bg-red-400 h-44 rounded-2xl"></div>
        <div className="col-span-6 md:col-span-7 bg-red-400 h-44 rounded-2xl"></div>
        <div className="col-span-12 bg-red-400 h-44 rounded-2xl"></div>
        <div className="md:col-span-4 col-span-6 bg-red-400 h-44 rounded-2xl"></div>
        <div className="md:col-span-4 col-span-6 bg-red-400 h-44 rounded-2xl"></div>
        <div className="md:col-span-4 col-span-12 bg-red-400 h-44 rounded-2xl"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
