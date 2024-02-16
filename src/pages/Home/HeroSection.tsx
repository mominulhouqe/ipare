import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-2">
      <div>
        <h1 className="text-8xl font-bold">
          <span>Don't worry</span>
          <br />
          <span>We will fix it.</span>
        </h1>
        <p>
          Lorem ipsum <span>dolor</span> sit amet consectetur, adipisicing elit.
          Impedit voluptate accusamus quas <span>eaque</span> cumque! Eum.
        </p>
        <Button>Book a Service</Button>
      </div>
      <div>
        <img src="https://i.ibb.co/7YVWVhq/fotor-ai-20230920171736.jpg" alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
