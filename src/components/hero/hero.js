import heroImage from "./hero.png";

const Hero = () => {
  return (
    <div className="hero hero__container flex  ">
      <div className="hero__title">
        <div className="hero__title-1">Design Inpiration</div>
        <div className="hero__title-2">
          Convallis tupris erat tempus, viverra aliquet
        </div>
        <button className="button hero__button hide-for-mobile">
          Get In Touch
        </button>
      </div>

      <div className="hero__image">
        <img className="hero__image-img" src={heroImage} alt="hero"></img>
      </div>
    </div>
  );
};

export default Hero;
