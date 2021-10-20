import img1 from "./../images/mobile/image-gallery-milkbottles.jpg";
import img2 from "./../images/mobile/image-gallery-orange.jpg";
import img3 from "./../images/mobile/image-gallery-cone.jpg";
import img4 from "./../images/mobile/image-gallery-sugar-cubes.jpg";
import img1Desk from "./../images/desktop/image-gallery-milkbottles.jpg";
import img2Desk from "./../images/desktop/image-gallery-orange.jpg";
import img3Desk from "./../images/desktop/image-gallery-cone.jpg";
import img4Desk from "./../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = ({ isDesktop }) => {
  return (
    <section className="gallery">
      <img src={isDesktop ? img1Desk : img1} alt="" />
      <img src={isDesktop ? img2Desk : img2} alt="" />
      <img src={isDesktop ? img3Desk : img3} alt="" />
      <img src={isDesktop ? img4Desk : img4} alt="" />
    </section>
  );
};

export default Gallery;
