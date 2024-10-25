import { Mail, Phone } from "lucide-react";
import "../App.css";
import { useState } from "react";
import ModalEmail from "./ModalEmail";

const WhyRegister = () => {
  const [showModalEmail, setShowModalEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add further logic here to handle the form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 poppins-light">
      <div className="w-full max-w-3xl bg-white  rounded-lg">
        <div className="p-6">
          <div className="text-center space-y-6">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Register Now?
            </h1>

            {/* Main pitch */}
            <p className="text-gray-600 text-lg">
              Give Your Child a Competitive Edge
            </p>
            <div className="flex justify-center">
              <ul className="list-disc inline-block text-left text-gray-800 text-lg space-y-2 max-w-2xl">
                <li>
                  Limited spots for the free webinar—register before they fill up
                </li>
                <li>
                  Exclusive insights into brain training for enhanced learning
                </li>
                <li>
                  Live demonstration of mental math and brain skills in action
                </li>
                <li>
                  Simple techniques to boost academic and personal success
                </li>
                
              </ul>
            </div>

            {/* Call to action */}
            <div className="py-4 mt-8 ">
              <p className="text-2xl text-[#024978] font-semibold mb-1">
                Act Now—unlock your child's future potential and get them ahead
                of the curve.
              </p>
              <button className="bg-[#024978] p-4 text-lg text-white rounded-sm mb-1 hover:bg-[#0470b5]">
                REGISTER NOW
              </button>
              <p className="text-rose-600 ">Free seats are limited!</p>
            </div>

            {/* Urgency message */}

            {/* Final CTA */}
            <p className="text-gray-700 text-xl mt-8">
              Don't Miss Out – Help Your Child Thrive! Register for Our Free
              Webinar Now!
            </p>

            {/* Social buttons */}
            <div className="flex justify-center gap-4 pt-4 mt-4">
              <button
                className="bg-red-600 text-white p-4 text-base rounded-sm mb-2 flex gap-2 "
                onClick={() => setShowModalEmail(true)}
              >
                <Mail className="h-6 w-8" />
                EMAIL US
              </button>
              {showModalEmail && (
                <ModalEmail onClose={() => setShowModalEmail(false)} />
              )}
              <button className="bg-green-500 text-white p-4 text-base rounded-sm mb-2 flex gap-2">
                <Phone className="h-6 w-8" />
                CALL US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRegister;
