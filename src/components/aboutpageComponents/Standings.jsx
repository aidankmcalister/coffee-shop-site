import coffeeHeartImg from "../../assets/imgs/coffeeHeart.jpg";
const Standings = () => {
  return (
    <div className="lg:mx-auto flex lg:justify-between lg:flex-row flex-col m-4 lg:max-w-[80%] md:max-w-[80%] my-20">
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-playfair font-bold">
          Our Coffee Shop's
          <br />
          <span className="lg:text-5xl text-main-yellow">Core Principles</span>
        </h1>
        <img
          src={coffeeHeartImg}
          alt="CoffeeHeartImage"
          className="hidden lg:block rounded-xl w-5/6 mt-5"
        />
      </div>
      <p className="text-gray-500 my-5 lg:w-1/2 lg:text-lg lg:my-auto lg:leading-8">
        Founded in 2014,{" "}
        <span className="text-main-yellow">&#123;FinSweet</span> coffee is
        driven by a set of unwavering principles. We believe that crafting the
        perfect coffee experience is an art that transcends the mere act of
        brewing a cup. It's about curating a space that becomes a sanctuary for
        our cherished <span className="text-main-yellow">community</span>, a
        place where coffee lovers and friends alike come together to celebrate
        life's simple joys.
        <br />
        <br />
        Our unwavering commitment to{" "}
        <span className="text-main-yellow">quality</span>,{" "}
        <span className="text-main-yellow">sustainability</span>, and delivering{" "}
        <span className="text-main-yellow">exceptional service</span> is the
        bedrock upon which we've built our legacy. We take immense pride in
        meticulously sourcing the finest coffee beans, each bean infused with
        the dedication and expertise of our experienced team. We're not just a
        coffee shop; we're a partner to our local farmers, nurturing{" "}
        <span className="text-main-yellow">meaningful</span> relationships, and
        ensuring that our coffee beans are ethically and sustainably grown. And
        when we serve you, it's not just with a cup of coffee; it's with a warm
        and welcoming <span className="text-main-yellow">smile</span>, a genuine
        connection that makes your day brighter.
      </p>

      <img
        src={coffeeHeartImg}
        alt="CoffeeHeartImage"
        className="lg:hidden rounded-xl"
      />
    </div>
  );
};

export default Standings;
