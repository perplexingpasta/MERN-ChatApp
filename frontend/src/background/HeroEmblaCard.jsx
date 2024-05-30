const HeroEmblaCard = ({ src }) => {
  return (
    <>
      <div className="embla__slide">
        <img src={src} alt="carousel images" className="object-cover" />
      </div>
    </>
  );
};

export default HeroEmblaCard;