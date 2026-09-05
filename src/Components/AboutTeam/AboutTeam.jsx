import React from "react";

import Team1 from "../../assets/Team1.jpg";
import Team2 from "../../assets/Team2.jpg";
import Team3 from "../../assets/Team3.jpg";
import Team4 from "../../assets/Team4.jpg";

import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const team = [
  {
    image: Team1,
    name: "Ali Ahmed",
    role: "Founder & CEO",
  },
  {
    image: Team2,
    name: "Sarah Khan",
    role: "Interior Designer",
  },
  {
    image: Team3,
    name: "John Smith",
    role: "Creative Director",
  },
  {
    image: Team4,
    name: "Emma Wilson",
    role: "Marketing Manager",
  },
];

const AboutTeam = () => {
  return (
    <section className="w-full bg-white py-20">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#B88E2F] font-semibold">
            Meet Our Team
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3A3A] mt-3">
            Passionate People
            <br />
            Behind Furniro
          </h2>

          <p className="text-[#666666] mt-5 max-w-3xl mx-auto leading-8">
            Our experienced team is dedicated to designing beautiful,
            functional furniture that transforms everyday living into
            extraordinary experiences.
          </p>

        </div>

        {/* Team Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, index) => (

            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl duration-500"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[340px] object-cover group-hover:scale-110 duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-[#3A3A3A]">
                  {member.name}
                </h3>

                <p className="text-[#B88E2F] mt-2 font-medium">
                  {member.role}
                </p>

                {/* Social Icons */}

                <div className="flex justify-center gap-5 mt-6 text-xl">

                  <FiFacebook className="cursor-pointer hover:text-[#B88E2F] duration-300" />

                  <FiInstagram className="cursor-pointer hover:text-[#B88E2F] duration-300" />

                  <FiTwitter className="cursor-pointer hover:text-[#B88E2F] duration-300" />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutTeam;