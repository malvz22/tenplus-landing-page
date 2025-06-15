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
        <section
          id="about-section"
          className="flex flex-col w-full max-w-full px-5 text-start mx-auto"
        >
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
        </section>
      </main>
    </>
  );
}

export default App;
