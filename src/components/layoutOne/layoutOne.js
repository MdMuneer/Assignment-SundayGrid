import imageOne from "./img2.jpg";
import imageTwo from "./img1.jpg";

const LayoutOne = () => {
  return (
    <div className="LayoutOne">
      <div className="LayoutOne__container">
        <div className="LayoutOne__header flex">
          <h3>Requirements gathering and analysis for references.</h3>
          <p>
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
            auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
            tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
            malesuada a, duis volutpat.
          </p>
        </div>
        <img className="LayoutOne__img-1" src={imageOne} alt=""></img>
        <img className="LayoutOne__img-2" src={imageTwo} alt=""></img>
      </div>
    </div>
  );
};

export default LayoutOne;
