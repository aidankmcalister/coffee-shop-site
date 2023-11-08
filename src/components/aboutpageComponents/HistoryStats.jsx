import { timelineData } from "../constants/constants";

const HistoryStats = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {timelineData.map((milestone, index) => (
          <div
            key={`milestone-${index}`}
            className="mx-3 bg-main-gray p-3 lg:p-8"
          >
            <h1 className="text-main-yellow font-bold text-2xl">
              {milestone.year}
            </h1>
            <h1 className="font-playfair font-bold text-xl">
              {milestone.title}
            </h1>
            <p className=" text-gray-500">{milestone.description}</p>
            <hr className="my-2 border border-main-yellow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryStats;
