import { useState } from "react";
import {
  Target,
  Brain,
  BookOpen,
  Lightbulb,
  Smile,
  Trophy,
} from "lucide-react";
import "../App.css";

const KeyBenefits = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const benefits = [
    {
      id: 1,
      title: "BUILD CONFIDENCE IN PROBLEM-SOLVING",
      description:
        "Brainy Abacus goes beyond improving math skills. It nurtures problem-solving abilities, fostering resilience in overcoming academic challenges",
      icon: <Target className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "EQUIP YOUR CHILD FOR THE FUTURE",
      description:
        "Our curriculum isn't just about math. Brainy Abacus develops life skills such as analytical thinking, time management, and multitasking, giving your child a lifelong competitive edge.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "CREATE POSITIVE LEARNING HABITS",
      description:
        "Screen time can be turned into a powerful tool for learning. Our blend of digital and physical activities ensures your child builds discipline and focus, crucial skills for success in both academics and life.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "DEVELOP CRITICAL THINKING",
      description:
        "Our unique Diziphyzi technique isn't just about mental arithmetic—it sharpens your child's critical thinking, memory recall, and concentration, skills essential for excelling in any subject.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "TRANSFORM MATH ANXIETY INTO ENTHUSIASM",
      description:
        "Many children struggle with math anxiety. Brainy Abacus transforms the way they approach numbers, making math fun and engaging, and helping them gain mastery over the subject.",
      icon: <Smile className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "INTERNATIONAL RECOGNITION AND COMPETITIVE EDGE",
      description:
        "Your child will not only excel academically but also have the chance to compete at state, national, and international levels, earning globally recognized certifications.",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 poppins-light"
      id="benefits"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
          Key Benefits
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Benefits Of This Course
        </p>
      </div>

      {/* Benefits Container */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* List Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedItem(
                    expandedItem === benefit.id ? null : benefit.id
                  )
                }
                className="w-full flex items-center gap-3 p-3 sm:gap-4 sm:p-4 text-left"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#444b58] text-white">
                  {benefit.id}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {benefit.title}
                </h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    expandedItem === benefit.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="px-4 pb-4 pt-2 text-gray-600">
                  {benefit.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hexagon Diagram */}
        <div className="benefits-img text-center w-full md:w-4/6"></div>
      </div>
    </div>
  );
};

export default KeyBenefits;
