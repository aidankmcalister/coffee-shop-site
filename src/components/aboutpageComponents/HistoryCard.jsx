import HistoryCardHeader from "./HistoryCardHeader";
import HistoryStats from "./HistoryStats";

const HistoryCard = () => {
  return (
    <div className="lg:max-w-[80%] mx-auto my-5 bg-[#1b191d] pb-5">
      <div className="relative mb-10">
        <HistoryCardHeader />
      </div>
      <div className="lg:p-10">
        <h1 className="font-playfair font-bold text-4xl m-2 lg:m-3">
          Our History
        </h1>
        <hr className=" m-3 border border-main-yellow" />
        <div className=" flex items-center justify-center mt-5">
          <HistoryStats />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
