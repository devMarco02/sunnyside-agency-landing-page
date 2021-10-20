import emilyImg from "./../images/image-emily.jpg";
import thomasImg from "./../images/image-thomas.jpg";
import jennieImg from "./../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="testimonials__title">Client testimonials</h3>

      <div className="testimonials__container">
        <article className="testimonials__testimonial">
          <img className="testimonials__img" src={emilyImg} alt="Emily" />
          <p className="testimonials__body">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="testimonials__name">Emily R.</p>
          <p className="testimonials__job">Marketing Director</p>
        </article>

        <article className="testimonials__testimonial">
          <img className="testimonials__img" src={thomasImg} alt="Thomas" />
          <p className="testimonials__body">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p className="testimonials__name">Thomas S.</p>
          <p className="testimonials__job">Chief Operating Officer</p>
        </article>

        <article className="testimonials__testimonial">
          <img className="testimonials__img" src={jennieImg} alt="Jennie" />
          <p className="testimonials__body">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="testimonials__name">Jennie F.</p>
          <p className="testimonials__job">Business Owner</p>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
