import ourStoryImg1 from "../assets/imgs/ourStoryImg1.jpg";
import ourStoryImg2 from "../assets/imgs/ourStoryImg2.jpg";

const OurStoryCard = () => {
  return (
    <div className="flex flex-col xl:flex-row items md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className="flex flex-col">
        <div className="w-full flex items-center">
          <h5 className="font-playfair text-main-yellow">WHY US</h5>
          <hr className="ml-2 w-12" />
        </div>
        <h1 className="font-playfair font-bold lg:text-5xl text-4xl mt-2">
          The Journey of{" "}
          <span className="text-main-yellow font-poppins">&#123;FinSweet</span>{" "}
          Coffee
        </h1>
        <div className="hidden xl:block">
          <div className="w-full lg:w-[90%] flex flex-row my-5 lg:justify-around">
            <div className="w-1/2 mr-4 lg:w-2/5 aspect-[12/25] flex justify-center">
              <img
                src={ourStoryImg1}
                className="object-cover self-start rounded-xl shadow-lg xl:h-full xl:mb-24"
              />
            </div>
            <div className="w-1/2 ml-4 lg:w-2/5 aspect-[12/25] flex justify-center">
              <img
                src={ourStoryImg2}
                className="object-cover rounded-xl shadow-lg h-[80%] self-end xl:h-full xl:ml-5 xl:mt-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 leading-7 lg:leading-9">
        <p>
          Our coffee journey has been a thrilling adventure filled with
          exploration and experimentation. While we've made tremendous progress,
          the path hasn't always been clear, and there have been moments when we
          were uncertain about the next step. Yet, our commitment to innovation
          and a deep connection with our{" "}
          <span className="text-main-yellow">community</span> spurred us to
          embark on a creative venture.
          <br />
          <br />
          We introduced our very own coffee innovation, known as the{" "}
          <span className="text-main-yellow">Harmony Blend</span>. This unique
          blend encapsulates the essence of our journey. It's a blend that
          captures the harmony of flavors and the diversity of our community.
          The Harmony Blend offers a{" "}
          <span className="text-main-yellow">melodic balance</span>, from the{" "}
          <span className="text-main-yellow">earthy and traditional</span> to
          the <span className="text-main-yellow">vibrant and modern</span>. The
          idea to create this exceptional blend was born from our desire to
          share the beautiful story of coffee, one that resonates with each sip.
        </p>
      </div>

      <div className="xl:hidden">
        <div className="w-full lg:w-[80%] flex flex-row my-2 justify-end">
          <div className="w-1/2 mr-4 lg:w-2/5  aspect-[12/25] flex justify-center">
            <img
              src={ourStoryImg1}
              className="object-cover self-start rounded-xl shadow-lg h-[80%] xl:h-full xl:mr-5 xl:mb-24"
            />
          </div>
          <div className="w-1/2 ml-4 lg:w-2/5 aspect-[12/25] flex justify-center">
            <img
              src={ourStoryImg2}
              className="object-cover rounded-xl shadow-lg h-[80%] self-end xl:h-full xl:ml-5 xl:mt-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryCard;
