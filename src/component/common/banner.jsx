import HeroBanner from "../../assets/herobanner.png";

export const Banner = () => {
      return (
            <div className="relative">
                  <img
                        src={HeroBanner}
                        alt="banner"
                        className="w-full h-[50vh] md:h-[70vh] object-cover"
                             loading="lazy"
                  />
            </div>
      );
};
