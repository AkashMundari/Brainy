/* eslint-disable react/no-unknown-property */
import "../App.css";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { TbBrandZoom } from "react-icons/tb";
const Introduction = () => {
  return (
    <>
      <div className="p-5 md:pl-10 md:pr-10 pt-5 ">
        <div id="introduction" className=" md:pl-10 md:pr-10">
          <div className="grid gap-6 md:flex ">
            <div className="introduction-img mt-5 md:mt-0"></div>
            <div className="p-2">
              <p className="mt-2 poppins-light">
                Is your child focused enough? Are you concerned about their
                academic performance, math skills, or amount of screen time?
                You're not by yourself. Every parent wants their child grown up
                with the self-assurance, intelligence, and skills necessary to
                take on the difficulties of life.
              </p>
              <p className="mt-4 poppins-light">
                At Brainy Abacus, we are aware that the key to long-term success
                is having a more intelligent and keen mind. Through brain
                training, we unlock your child’s potential. Our Brainy Abacus
                program enhances mental arithmetic, sharpens cognitive skills,
                strengthens focus, conquers math anxiety, and introduces memory
                techniques alongside Vedic math to give them an academic edge.
              </p>
              <p className="mt-4 poppins-light">
                Join our free webinar to learn how early brain training can set
                your child on the path to a brighter future
              </p>
            </div>
          </div>

          <div className="webinar-details bg-[#024978] grid justify-center text-center items-center mt-8 pt-10 pb-10 poppins-medium gap-8 md:flex md:gap-10 md:justify-around">
            <div className="flex flex-col justify-center items-center">
              <p className="text-white">
                <SlCalender size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">November 12th</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
              <p>
                <FaRegClock size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">10 am EST</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
              <p>
                <FaMicrophone size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">Duration 1 Hour</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
              <p>
                <TbBrandZoom size={50} color="white" />
              </p>
              <p className="text-white mt-3 text-xl">Platform : Zoom</p>
            </div>
            <div className="mt-5 md:mt-0">
              <button className="text-white poppins-semibold p-5 text-xl bg-[#8a9919] hover:bg-[#b7ce21] rounded-sm">
                CLAIM YOUR SPOT NOW
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <iframe
              width="80%"
              height="300"
              className="md:h-[550px]"
              src="https://www.youtube.com/embed/T_mbKEbLbXQ?si=IYSF6n-m6cHVvk5D"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
