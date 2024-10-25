import "../App.css";

const AboutAuthor = () => {
  return (
    <>
      <>
        <div className="max-w-6xl mx-auto px-4 py-12 poppins-light">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
              About The Host
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Expert who will be conducting this webinar
            </p>
          </div>

          {/* Host Info Container */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 ">
            {/* Image Container */}
            <div className="author w-full md:w-1/3"></div>

            {/* Content Container */}
            <div className="w-full md:w-2/3">
              {/* Name and Title */}

              <div className="mt-5 md:mt-16">
                <ul className="list-disc list-outside pl-5 sm:pl-6 text-gray-800 text-lg space-y-3">
                  <li>
                    20+ years of experience in brain development and mental
                    arithmetic
                  </li>
                  <li>
                    Expert educators specializing in abacus training and
                    cognitive skills
                  </li>
                  <li>
                    Proven track record in enhancing children's learning and
                    academic performance
                  </li>
                  <li>
                    Focused on innovative, fun, and engaging teaching methods
                  </li>
                  <li>
                    Hosts vary by center but all bring extensive knowledge and
                    dedication
                  </li>
                  <li>
                    Committed to helping children unlock their full potential
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutAuthor;
