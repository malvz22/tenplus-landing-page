import TestimonialSlider from "../ui/TestimonialSlider";

const Testimony = () => {
  return (
    <section
      id="testimonial-section"
      className="flex flex-col w-full max-w-full scroll-mt-12"
    >
      <div className="container-custom">
        <h3>Fuelled by Tenplus</h3>
        <p className="">Hear from our happily hydrated community</p>
        <TestimonialSlider />
        <div className="flex flex-col md:flex-row text-start items-start md:justify-between md:items-center gap-6">
          <div className="flex flex-col">
            <p className="text-[30px]">Wherever you sweat,</p>
            <h2 className="font-bold">recover10+</h2>
          </div>
          {/* <div className="flex flex-row w-full md:w-0 justify-between md:justify-end items-center md:gap-14">
              <h4>
                Today
                <br />
                in Bali
              </h4>
              <div className="flex flex-col">
                <p className="font-semibold text-[#737373]">Feels like</p>
                <h3>37C</h3>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-[#737373]">Humidity</p>
                <h3>75%</h3>
              </div>
            </div> */}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row p-2">
            <img
              src="images/volcanic-farm.webp"
              className="w-full max-w-full md:max-w-[50%] h-auto aspect-[4/3] object-cover"
              loading="lazy"
              alt="Volcanic Farm"
            />
            <div className="flex flex-col py-4 md:px-10 md:py-6 justify-center">
              <h4 className=" mb-3">Naturally Explosive.</h4>
              <p className="">
                Our plant based (Phyto) ingredients are sourced from volcanic
                regions in Indonesia, where rich, fertile soil acts as natural
                fertilizers. This soil is packed with macronutrients and
                minerals essential for growing high-quality plant-based
                ingredients.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col md:flex-row p-2 items-center">
              <img
                src="images/jungle.webp"
                className="w-full max-w-full md:max-w-[50%] h-auto lg:h-[100%] aspect-[4/3] lg:aspect[3/4] object-cover"
                loading="lazy"
                alt="Jungle"
              />
              <div className="flex flex-col py-4 md:px-10 md:py-6 lg:px-5 lg:py-6 justify-center">
                <h4 className="mb-3">It’s a Jungle Out There.</h4>
                <p className="">
                  Indonesia boasts the second highest level of biodiversity in
                  the world. As one of 17 megadiverse countries and home to two
                  of the world’s 25 biodiversity hotspots, its equatorial
                  climate creates the perfect environment for nutrient-rich
                  plant life.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row p-2 items-center">
              <img
                src="images/ancient.webp"
                className="w-full max-w-full md:max-w-[50%] h-auto lg:h-[100%] aspect-[4/3] lg:aspect[3/4] object-cover"
                loading="lazy"
                alt="Ancient"
              />
              <div className="flex flex-col py-4 md:px-10 md:py-6 lg:px-5 lg:py-6 justify-center">
                <h4 className="mb-3">Tested by Time.</h4>
                <p className="">
                  The botanical ingredients in Tenplus draw inspiration from
                  Jamu, a 1,300-year-old traditional Indonesian herbal remedy.
                  Each ingredient is deeply rooted in tradition and has stood
                  the test of time, offering benefits proven through centuries
                  of use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom flex flex-col py-10">
        <h2>Quality is our DNA</h2>
        <hr className="border-solid border-gray-400 w-full max-w-full" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 py-6">
          <div className="flex flex-col">
            <h6 className="mb-2">Locally Sourced Ingredients</h6>
            <p>
              Our botanical ingredients are locally sourced from over 200
              farmers across Indonesia. This allows us to ensure that only the
              highest quality ingredients make it into every sachet of TenPlus.
              We enhance the potency of our phytonutrients by exclusively using
              ingredients that are nutrient-rich and easily absorbable.
            </p>
          </div>
          <div className="flex flex-col">
            <h6 className="mb-2">BPOM GMP Certified Facility</h6>
            <p>
              Our products are crafted in a Badan Pengawas Obat dan Makanan
              (BPOM) GMP certified facility, the Indonesian equivalent of the
              FDA. This certification guarantees adherence to the highest
              manufacturing standards.
            </p>
          </div>
          <div className="flex flex-col">
            <h6 className="mb-2">Rooted in Traditional Medicine</h6>
            <p>
              With over 10 years of experience in the traditional medicine
              industry, our parent company has been dedicated to producing Jamu
              products of the highest global standards. This rich heritage and
              expertise are infused into every Tenplus product, ensuring you
              receive the best of nature’s time-tested ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
