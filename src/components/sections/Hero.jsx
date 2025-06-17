import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="h-screen w-full max-w-full bg-[url(/images/bali-beach.webp)] bg-center bg-cover bg-no-repeat">
      <div className="w-full max-w-full h-screen bg-gray-500/30 flex justify-center items-center">
        <div className="flex flex-col gap-6 text-center w-full max-w-full px-5 ">
          <h1
            className="text-white text-shadow-2xs"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Move Beyond Hydration
          </h1>
          <h4
            className="text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Power up. Recover strong. Stay Hydrated with Tenplus.
          </h4>
          <Button>Buy Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
