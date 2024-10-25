import "../App.css";
import HeroNav from "./HeroNav";

const Hero = () => {
  return (
    <>
      <div className="hero-section relative p-6 md:pt-14 md:pl-14" id="home">
        {/* Overlay div for background blur/opacity */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        {/* Content wrapper - make sure it's above the overlay */}
        <div className="relative z-10">
          <HeroNav />
          <div className="hero-section-low text-white text-center mt-9">
            <div className="poppins-semibold text-3xl md:text-6xl p-4">
              Invest in Brilliance: Gift your child an intelligent mind – Free
              Webinar
            </div>
            <div className="poppins-medium mt-7 text-xl p-5">
              Explore how brain training enhances cognitive skills, elevates
              academic success, and gives your child a winning advantage.
            </div>
            <div className="mt-8">
              <p className="poppins-semibold">
                <button className="bg-[#024978] p-4 text-lg rounded-sm hover:bg-[#0470b5] transition-colors duration-300">
                  Register Now!!
                </button>
              </p>
              <p className="poppins-medium mt-3">
                * Limited registration only. Register before we're filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
