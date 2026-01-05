import HeroBanner from "../../assets/herobanner.webp";

export const Banner = () => {
      return (
            <div className="relative">
                  <img
                        src={HeroBanner}
                        alt="Chauffeur & Airport Transfers in Bangalore"
                        className="w-full h-[50vh] md:h-[70vh] object-cover"
                             loading="lazy"
                  />
            </div>
      );
};
