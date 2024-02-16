import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 mx-auto">
      <div>
        <h1 className="lg:text-7xl text-4xl  font-bold mb-6">
          <span className="text-gray">Don't worry ,</span>
          <br />
          <span>We will fix it.</span>
        </h1>
        <p className="text-dark-gray mb-4">
          Lorem ipsum <span>dolor</span> sit amet consectetur, adipisicing elit.
          Impedit voluptate accusamus quas <span>eaque</span> cumque! Eum.
        </p>
        <Button>Book a Service</Button>
      </div>
      <div className="w-3/4 md:max-w-sm mx-auto">
        <img
          className="-rotate-[30deg] w-full "
          src="https://i.ibb.co/7YVWVhq/fotor-ai-20230920171736.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
