import coffeeShopWideshotImg from "../../assets/imgs/coffeeShopWideshot.jpg";

const HistoryCardHeader = () => {
  return (
    <div className="relative">
      <div className="flex flex-col relative justify-center object-cover overflow-hidden">
        <div
          style={{
            background: `
                linear-gradient(to left, transparent 10%, #1b191d 100%),
                linear-gradient(360deg, #1b191d 0%, transparent 100%)
                `,
          }}
          className="p-4 lg:p-10 flex flex-col justify-center absolute z-10 h-full w-full  md:pr-24"
        >
          <h1 className="text-3xl  text-white font-bold font-playfair">
            One of the best
            <br /> Cafes in <span className="text-main-yellow">New York</span>
          </h1>
          <p className="text-gray-400 mt-3 md:w-3/5">
            Immerse yourself in the true essence of excellence. Our café,
            unrivaled in New York, offers an extraordinary experience that will
            leave you enchanted. With a range of meticulously crafted offerings,
            our commitment to quality knows no bounds.
          </p>
        </div>
        <div className="bg-gray-900 opacity-80 blur-[1px] h-full object-cover">
          <img
            src={coffeeShopWideshotImg}
            className="relative w-full h-full bg-cover max-h-[31rem] object-cover"
            alt="CoffeeShopImg"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryCardHeader;
