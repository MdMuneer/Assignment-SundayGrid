import IconOne from "./IconOne.svg";
import IconTwo from "./IconTwo.svg";

const LayoutTwo = () => {
  return (
    <section className="layoutTwo">
      <div className="layoutTwo__header flex ">
        <h4>Design Concept</h4>
        <h2>The best design for your studio website</h2>
        <p>
          Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
          auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
          tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
          a, duis volutpat.
        </p>
      </div>
      <div className="layoutTwo__features flex">
        {/* single feaure class container div */}
        {/* feature 1 */}
        <div className="layoutTwo__features_feature">
          <div className="layoutTwo__features_feature-logo">
            <img className="icon-1" src={IconOne} alt="icon-1"></img>
          </div>
          <div className="layoutTwo__features_feature-detail">
            <div className="layoutTwo__features_feature-detail--title">
              Design Concept
            </div>
            <div className="layoutTwo__features_feature-detail--content">
              Vitae nulla nunc euismod vel nunc euismod velpretium tellus
              accumsan nulla nunc euismod ve semper.
            </div>
          </div>
        </div>
        {/* feature 2 */}
        <div className="layoutTwo__features_feature">
          <div className="layoutTwo__features_feature-logo">
            <img className="icon-2" src={IconTwo} alt="icon-1"></img>
          </div>
          <div className="layoutTwo__features_feature-detail">
            <div className="layoutTwo__features_feature-detail--title">
              Developing Websites
            </div>
            <div className="layoutTwo__features_feature-detail--content">
              Vitae nulla nunc euismod vel nunc euismod velpretium tellus
              accumsan nulla nunc euismod ve semper.
            </div>
          </div>
        </div>
        {/* feature 3 */}

        <div className="layoutTwo__features_feature">
          <div className="layoutTwo__features_feature-logo">
            <img className="icon-2" src={IconTwo} alt="icon-2"></img>
          </div>
          <div className="layoutTwo__features_feature-detail">
            <div className="layoutTwo__features_feature-detail--title">
              Developing Websites
            </div>
            <div className="layoutTwo__features_feature-detail--content">
              Vitae nulla nunc euismod vel nunc euismod velpretium tellus
              accumsan nulla nunc euismod ve semper.
            </div>
          </div>
        </div>
        {/* feature 4 */}
        <div className="layoutTwo__features_feature">
          <div className="layoutTwo__features_feature-logo">
            <img className="icon-1" src={IconOne} alt="icon-2"></img>
          </div>
          <div className="layoutTwo__features_feature-detail">
            <div className="layoutTwo__features_feature-detail--title">
              Design Concept
            </div>
            <div className="layoutTwo__features_feature-detail--content">
              Vitae nulla nunc euismod vel nunc euismod velpretium tellus
              accumsan nulla nunc euismod ve semper.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutTwo;
