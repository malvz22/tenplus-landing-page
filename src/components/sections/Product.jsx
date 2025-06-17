import Button from "../ui/Button";

const Product = () => {
  return (
    <section id="product-section" className="flex flex-col scroll-mt-12">
      <div className="bg-[url('/images/palm-leaf.webp')] bg-center bg-cover bg-no-repeat w-full max-w-full text-white">
        <div className="w-full max-w-full h-auto bg-black/80">
          <div className="container-custom flex flex-col text-center">
            <div className="flex flex-col gap-3">
              <h3>Phyto-hydration Drink Mix</h3>
              <h4 className="">Available in 6 flavors</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center lg:flex lg:flex-row lg:justify-between gap-8">
              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Tropical-Citrus.png"
                  className="w-[150px]"
                  loading="lazy"
                  alt="Tropical Citrus"
                />
                <p className="text-2xl">
                  Tropical
                  <br />
                  Citrus
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Pineapple.png"
                  className="w-[150px]"
                  loading="lazy"
                  alt="Pineapple"
                />
                <p className="text-2xl">Pineapple</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Mango.png"
                  className="w-[150px]"
                  loading="lazy"
                  alt="Mango"
                />
                <p className="text-2xl">Mango</p>
              </div>

              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Sea-Salt-Lemonade.png"
                  className="w-[150px]"
                  loading="lazy"
                  alt="Sea Salt Lemonade"
                />
                <p className="text-2xl">
                  Sea Salt
                  <br />
                  Lemonade
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Orange.png"
                  className="w-[150px]"
                  loading="lazy"
                  alt="Orange"
                />
                <p className="text-2xl">Orange</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Mixed-Berry.png"
                  className="w-[150px]"
                  loading="lazy"
                  alt="Mixed Berry"
                />
                <p className="text-2xl">
                  Mixed
                  <br />
                  Berry
                </p>
              </div>
            </div>
            <hr className="w-[70%] border-solid border-white/40 border-2 mx-auto rounded-full" />
            <h2>Powerful Botanicals. Zero Sugar. Zero Stimulants.</h2>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <h3>Clean, Pure, and Powered by Nature</h3>
        <div className="flex flex-col gap-3 w-[65%]">
          <p>
            A potent blend of 10+ phytonutrients, electrolytes, and vitamins. No
            added sugar, non-GMO, vegan-friendly, and gluten-free.
          </p>
          <p>More Than Just Electrolytes. Revive, Replenish, Repeat.</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-[320px] border-b-2 border-[#b24a60]">
              <h3 className="mb-0.5">Phytonutrients</h3>
            </div>
            <div className="w-full md:w-[70%] flex flex-col gap-2">
              <p>
                Potent active compounds and antioxidants that enhance athletic
                performance and recovery. They offer anti-inflammatory and
                neuroprotective properties, improve muscle strength and
                recovery, reduce exercise-induced muscle damage, and support
                cognitive function.
              </p>
              <p>
                They can further help in managing fatigue and pain, while
                promoting energy metabolism and overall wellness, making them
                beneficial for athletes and physically active individuals.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-[320px] border-b-2 border-[#E1E43D]">
              <h3 className="mb-0.5">Electrolytes+</h3>
            </div>

            <div className="w-full md:w-[70%] flex flex-col gap-2">
              <p>
                Electrolytes are crucial for hydration, especially during
                sustained exercise, as they maintain fluid balance and support
                nerve function. In hot tropical climates, the need for
                electrolytes is even more critical. They replenish what’s lost
                through sweat, preventing cramps and fatigue.
              </p>
              <p>
                This makes them indispensable for muscle function, energy
                synthesis, and peak athletic performance, while also bolstering
                brain health and mental clarity. In high temperatures, where
                sweat loss is significant, electrolytes ensure optimal hydration
                and performance, helping you stay energized and focused despite
                the heat.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-[320px] border-b-2 border-[#d4721a]">
              <h3 className="mb-0.5">Vitamins</h3>
            </div>
            <div className="w-full md:w-[70%] flex flex-col gap-2">
              <p>
                Vitamin B complex supports metabolism, red blood cell
                production, and nerve health, vital for anyone with an active
                lifestyle. These benefits work in tandem with Vitamin C, known
                for its powerful antioxidant properties, essential for
                strengthening the immune system and repairing tissues.
              </p>
              <p>
                Together, Vitamin B Complex and Vitamin C play a complementary
                role in ensuring a resilient system for peak performance and
                recovery.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 w-full max-w-full items-start text-center">
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src="images/gluten-free.svg" alt="Gluten Free" />
            <p className="text-xs text-[#737373] font-bold">GLUTEN FREE</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src="images/vegan.svg" alt="Vegan" />
            <p className="text-xs text-[#737373] font-bold">VEGAN</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src="images/sugar-free.svg" alt="Sugar Free" />
            <p className="text-xs text-[#737373] font-bold">
              NO ADDED
              <br />
              SUGAR
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src="images/soy-free.svg" alt="Soy Free" />
            <p className="text-xs text-[#737373] font-bold">SOY FREE</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src="images/paleo-friendly.svg" alt="Paleo Friendly" />
            <p className="text-xs text-[#737373] font-bold">PALEO FRIENDLY</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <img src="images/keto-friendly.svg" alt="Keto Friendly" />
            <p className="text-xs text-[#737373] font-bold">KETO FRIENDLY</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full bg-[url('/images/bali-farm.webp')] bg-center bg-cover bg-no-repeat text-white text-center items-center justify-center">
        <div className="w-full max-w-full h-full bg-black/70 flex">
          <div className="px-3 w-full max-w-[740px] flex flex-col gap-3 mx-auto py-20">
            <h4>Sustainably Sourced from 200+ Indonesian Farmers</h4>
            <p className="text-xl">
              Our ingredients are meticulously chosen for their optimal growing
              locations, superior soil quality, and sustainable farming
              practices. By partnering with over 200 local farmers, we ensure
              that every sachet of Tenplus is rooted in environmental
              responsibility and community support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
