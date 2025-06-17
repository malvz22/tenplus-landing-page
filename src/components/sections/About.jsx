import Button from "../ui/Button";

/* eslint-disable no-irregular-whitespace */
const About = () => {
  return (
    <section id="about-section" className="container-custom scroll-mt-12">
      <h2 className="text-black text-center md:text-start mb-3">
        Power Up Your Day with Tenplus
      </h2>
      <div className="flex flex-col-reverse md:flex-row w-full max-w-full items-center md:justify-between">
        <div className="flex flex-col gap-6 text-center md:text-start w-full max-w-full md:max-w-1/2">
          <p className="text-lg text-black">
            Keep hydrated and keep moving forward with our potent blend of
            essential electrolytes, supercharged by powerful botanical
            ingredients and vital vitamins.
          </p>
          <p className="text-lg text-black">
            More than just hydration, Tenplus replenishes electrolytes, enhances
            recovery, and helps you perform at your best—all without added
            sugar.
          </p>
          <Button>Power Up Now</Button>
        </div>
        <img
          src="/images/product-mockup/Box+3Sachets_Variety-Pack.png"
          className="w-full max-w-full md:max-w-1/2 object-fill"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full max-w-full items-center md:justify-between gap-6">
        <div className="flex flex-col gap-3.5 text-center md:text-start w-full max-w-full md:max-w-1/2">
          <h2 className="text-lg text-black font-bold">HYDRATION</h2>
          <p className="text-2xl text-black font-semibold">
            Sodium 480mg + Potassium 175mg + Magnesium 40mg
          </p>
          <p className="text-lg text-black">
            Maintaining electrolyte balance is critical. Insufficient levels can
            lead to reduced endurance, muscle spasms, cognitive issues, vertigo,
            and other symptoms of dehydration.
          </p>
          <p className="text-lg text-black">
            Leading experts and organisation’s 1,2,3 recommend 500 to 1000 mg of
            sodium per litre of fluid during exercise, especially in hot
            climates.
          </p>
          <p className="text-lg text-black">
            Tenplus gives you 480 mg of sodium per 600 ml serving, which equals
            800 mg per litre – right in the ideal range.
          </p>
        </div>
        <img
          src="/images/hydration.webp"
          className="w-full max-w-full md:max-w-1/2 h-auto object-cover aspect-square"
          loading="lazy"
          alt="Hydration Image"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse w-full max-w-full items-center md:justify-between gap-6">
        <div className="flex flex-col gap-3.5 text-center md:text-start w-full max-w-full md:max-w-1/2">
          <h2 className="text-lg text-black font-bold">PERFORMANCE</h2>
          <p className="text-2xl text-black font-semibold">
            Energy + Endurance + Strength
          </p>
          <p className="text-lg text-black">
            The phytonutrients found in Tenplus are carefully selected for their
            potential to positively impact athletic performance through improved
            endurance, energy metabolism, and reduced oxidative stress.
          </p>
        </div>
        <img
          src="/images/performance.webp"
          className="w-full max-w-full md:max-w-1/2 h-auto object-cover aspect-square"
          alt="Performance Image"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full max-w-full items-center md:justify-between gap-6">
        <div className="flex flex-col gap-3.5 text-center md:text-start w-full max-w-full md:max-w-1/2">
          <h2 className="text-lg text-black font-bold">RECOVERY</h2>
          <p className="text-2xl text-black font-semibold">
            Healing + Soreness + Inflammation
          </p>
          <p className="text-lg text-black">
            Our formulation of phytonutrients can help accelerate muscle
            recuperation, reduce exercise-induced muscle damage and alleviate
            inflammation.
          </p>
        </div>
        <img
          src="/images/recovery.webp"
          className="w-full max-w-full md:max-w-1/2 h-auto object-cover aspect-square"
          loading="lazy"
          alt="Recovery Image"
        />
      </div>
    </section>
  );
};

export default About;
