import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img1 from "../../src/assets/backgroundImages/img1.jpg";
import img2 from "../../src/assets/backgroundImages/img2.jpg";
import img3 from "../../src/assets/backgroundImages/img3.jpg";
import img7 from "../../src/assets/backgroundImages/img7.jpg";
import img9 from "../../src/assets/backgroundImages/img9.jpg";
import img10 from "../../src/assets/backgroundImages/img10.png";
import img11 from "../../src/assets/backgroundImages/img11.jpg";
import img14 from "../../src/assets/backgroundImages/img14.jpg";
import img15 from "../../src/assets/backgroundImages/img15.jpg";
// import img2 from "../../public/img2.jpg";
// import img3 from "../../public/img3.jpg";

import HeroEmblaCard from "./HeroEmblaCard";

export function EmblaCarousel() {
  const autoplayOptions = {
    delay: 60000, //delay timer in milliseconds, actually does work
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <>
      <div className="embla absolute" ref={emblaRef}>
        <div className="embla__container h-[100vh]">
          <HeroEmblaCard src={img1} />
          <HeroEmblaCard src={img7} />
          <HeroEmblaCard src={img2} />
          <HeroEmblaCard src={img3} />
          <HeroEmblaCard src={img9} />
          <HeroEmblaCard src={img10} />
          <HeroEmblaCard src={img11} />
          <HeroEmblaCard src={img14} />
          <HeroEmblaCard src={img15} />
        </div>
      </div>
    </>
  );
}
