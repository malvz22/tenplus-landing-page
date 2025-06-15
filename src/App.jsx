import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full max-w-full">
        <section className="h-screen w-full max-w-full bg-[url(/images/bali-beach.jpg)] bg-center bg-cover bg-no-repeat">
          <div className="w-full max-w-full h-screen bg-gray-500/30 flex justify-center items-center">
            <div className="flex flex-col gap-6 text-center w-full max-w-full px-5 ">
              <h1 className="text-white text-shadow-2xs">
                Move Beyond Hydration
              </h1>
              <h4 className="text-white">
                Power up. Recover strong. Stay Hydrated with Tenplus.
              </h4>
              <div>
                <button className="px-6 py-2 bg-[#E1E43D] rounded-full w-auto font-medium text-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="about-section" className="container-custom">
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
                More than just hydration, Tenplus replenishes electrolytes,
                enhances recovery, and helps you perform at your best—all
                without added sugar.
              </p>
              <div>
                <button className="px-6 py-2 bg-[#E1E43D] rounded-full w-auto font-medium text-lg">
                  Power Up Now
                </button>
              </div>
            </div>
            <img
              src="/images/product-mockup/Box+3Sachets_Variety-Pack.png"
              className="w-full max-w-full md:max-w-1/2 object-fill"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full max-w-full items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3.5 text-center md:text-start w-full max-w-full md:max-w-1/2">
              <h2 className="text-lg text-black font-bold">HYDRATION</h2>
              <p className="text-2xl text-black font-semibold">
                Sodium 480mg + Potassium 175mg + Magnesium 40mg
              </p>
              <p className="text-lg text-black">
                Maintaining electrolyte balance is critical. Insufficient levels
                can lead to reduced endurance, muscle spasms, cognitive issues,
                vertigo, and other symptoms of dehydration.
              </p>
              <p className="text-lg text-black">
                Leading experts and organisation’s 1,2,3 recommend 500 to 1000
                mg of sodium per litre of fluid during exercise, especially in
                hot climates.
              </p>
              <p className="text-lg text-black">
                Tenplus gives you 480 mg of sodium per 600 ml serving, which
                equals 800 mg per litre – right in the ideal range.
              </p>
              <p className="text-lg text-black">
                Mix one sachet of Tenplus with 600 ml of water for optimal
                hydration and performance.
              </p>
              <p className="text-xs text-black">
                1. American College of Sports Medicine (ACSM) 2. National
                Athletic Trainers’ Association (NATA) 3. International Society
                of Sports Nutrition (ISSN)
              </p>
            </div>
            <img
              src="/images/hydration.jpg"
              className="w-full max-w-full md:max-w-1/2 h-auto object-cover aspect-square"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse w-full max-w-full items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3.5 text-center md:text-start w-full max-w-full md:max-w-1/2">
              <h2 className="text-lg text-black font-bold">PERFORMANCE</h2>
              <p className="text-2xl text-black font-semibold">
                Energy + Endurance + Strength
              </p>
              <p className="text-lg text-black">
                The phytonutrients found in Tenplus are carefully selected for
                their potential to positively impact athletic performance
                through improved endurance, energy metabolism, and reduced
                oxidative stress.
              </p>
            </div>
            <img
              src="/images/performance.jpg"
              className="w-full max-w-full md:max-w-1/2 h-auto object-cover aspect-square"
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
                recuperation, reduce exercise-induced muscle damage and
                alleviate inflammation.
              </p>
            </div>
            <img
              src="/images/recovery.jpg"
              className="w-full max-w-full md:max-w-1/2 h-auto object-cover aspect-square"
            />
          </div>
        </section>
        <section
          id="product-section"
          className="bg-[#262626] w-full max-w-full py-6 text-white"
        >
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
                />
                <p className="text-2xl">Pineapple</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Mango.png"
                  className="w-[150px]"
                />
                <p className="text-2xl">Mango</p>
              </div>

              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Sea-Salt-Lemonade.png"
                  className="w-[150px]"
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
                />
                <p className="text-2xl">Orange</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="images/product-mockup/Vertical_Mixed-Berry.png"
                  className="w-[150px]"
                />
                <p className="text-2xl">
                  Mixed
                  <br />
                  Berry
                </p>
              </div>
            </div>
            <hr className="w-[70%] border-solid border-white/40 border-2 mx-auto" />
            <h2>Powerful Botanicals. Zero Sugar. Zero Stimulants.</h2>
            <div>
              <button className="px-6 py-2 bg-[#E1E43D] rounded-full w-auto font-medium text-lg text-black">
                Buy Now
              </button>
            </div>
          </div>
        </section>
        <section className="container-custom text-start">
          <h3>Clean, Pure, and Powered by Nature</h3>
          <div className="flex flex-col gap-3 w-[65%]">
            <p>
              A potent blend of 10+ phytonutrients, electrolytes, and vitamins.
              No added sugar, non-GMO, vegan-friendly, and gluten-free.
            </p>
            <p>More Than Just Electrolytes. Revive, Replenish, Repeat.</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-start justify-between gap-4">
              <h3 className="underline underline-offset-4 decoration-[#b24a60]">
                Phytonutrients
              </h3>
              <div className="w-[70%] flex flex-col gap-2">
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
            <div className="flex flex-row items-start justify-between gap-4">
              <h3 className="underline underline-offset-4 decoration-[#E1E43D]">
                Electrolytes+
              </h3>
              <div className="w-[70%] flex flex-col gap-2">
                <p>
                  Electrolytes are crucial for hydration, especially during
                  sustained exercise, as they maintain fluid balance and support
                  nerve function. In hot tropical climates, the need for
                  electrolytes is even more critical. They replenish what’s lost
                  through sweat, preventing cramps and fatigue.
                </p>
                <p>
                  This makes them indispensable for muscle function, energy
                  synthesis, and peak athletic performance, while also
                  bolstering brain health and mental clarity. In high
                  temperatures, where sweat loss is significant, electrolytes
                  ensure optimal hydration and performance, helping you stay
                  energized and focused despite the heat.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-start justify-between gap-4">
              <h3 className="underline underline-offset-4 decoration-[#d4721a]">
                Vitamins
              </h3>
              <div className="w-[70%] flex flex-col gap-2">
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
              <img src="images/gluten-free.svg" />
              <p className="text-xs text-[#737373] font-bold">GLUTEN FREE</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src="images/vegan.svg" />
              <p className="text-xs text-[#737373] font-bold">VEGAN</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src="images/sugar-free.svg" />
              <p className="text-xs text-[#737373] font-bold">
                NO ADDED
                <br />
                SUGAR
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src="images/soy-free.svg" />
              <p className="text-xs text-[#737373] font-bold">SOY FREE</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src="images/paleo-friendly.svg" />
              <p className="text-xs text-[#737373] font-bold">PALEO FRIENDLY</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src="images/keto-friendly.svg" />
              <p className="text-xs text-[#737373] font-bold">KETO FRIENDLY</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
