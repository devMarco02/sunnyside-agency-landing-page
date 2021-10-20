import img1 from "./../images/mobile/image-transform.jpg";
import img2 from "./../images/mobile/image-stand-out.jpg";
import img3 from "./../images/mobile/image-graphic-design.jpg";
import img1Desk from "./../images/desktop/image-transform.jpg";
import img2Desk from "./../images/desktop/image-stand-out.jpg";
import img3Desk from "./../images/desktop/image-graphic-design.jpg";

const Services = ({ isDesktop }) => {
  return (
    <section className="services">
      <img
        className="services__img services--right"
        src={isDesktop ? img1Desk : img1}
        alt=""
      />
      <div className="services__text services--left">
        <h2 className="services__service-title">Transform your brand</h2>
        <p className="services__service-body">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button className="services__service-btn services__service-btn--yellow">
          Learn more
        </button>
      </div>

      <img className="services__img" src={isDesktop ? img2Desk : img2} alt="" />
      <div className="services__text">
        <h2 className="services__service-title">
          Stand out to the right audience
        </h2>
        <p className="services__service-body">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <button className="services__service-btn services__service-btn--pink">
          Learn more
        </button>
      </div>

      <section className="services__service services__service--graphics">
        {/* image for auto sizing */}
        <img
          src={isDesktop ? img3Desk : img3}
          alt=""
          style={{ visibility: "hidden" }}
        />
        <div className="services__text services__text--cyan">
          <h2 className="services__service-title services__service-title--smaller">
            Graphic Design
          </h2>
          <p className="services__service-body services__service-body--smaller">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </section>

      <section className="services__service services__service--photography">
        {/* image for auto sizing */}
        <img
          src={isDesktop ? img3Desk : img3}
          alt=""
          style={{ visibility: "hidden" }}
        />
        <div className="services__text services__text--blue">
          <h2 className="services__service-title services__service-title--smaller">
            Photography
          </h2>
          <p className="services__service-body services__service-body--smaller">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Services;
