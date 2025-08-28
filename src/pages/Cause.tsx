import React from 'react';
import { Star, Quote } from 'lucide-react';

const Cause: React.FC = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Cause</h1>
          <p className="text-xl leading-relaxed">
            In addition to our commitment to academic excellence, ACE Academy is deeply dedicated to making a positive impact in our community. We believe in supporting people globally which is why 100% of profits will go to charity.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* changed: use 1 col on mobile, 2 equal columns on md+ and center each logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center p-4">
              <img
                src="/key2finesse.png"
                alt="Key2Finesse"
                className="max-w-full h-40 md:h-56 object-contain rounded-lg shadow-md"
              />
            </div>

            <div className="flex items-center justify-center p-4">
              <img
                src="/kidsonthego.png"
                alt="Kids on the Go"
                className="max-w-full h-40 md:h-56 object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What These Organizations Do</h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Founded in 2015, Key2Finesse is a student-run, registered 501(c)(3) nonprofit organization that recognizes the issues around us that inhibit our personal growth. We strive to build necessary skills in ourselves and others, such as public speaking, time management, and confidence building. In 2025, Key2finesse is proudly supporting Kids On The Go! This incredible organization local to Michigan works to provide physical, occupational, speech, and recreational therapies for children with special needs ages 3-17 years, both over the summer and during the school year. Creating a larger impact, Kids on the Go hosts a wide scope of different programs focusing on providing a strong future for these children. This year, Key2Finesse hopes to be further involved within the specific programs of Teens Who Work, a one-of-a-kind program focusing on offering communication, time-management, safety, and organizational skills for children with special needs. With the mission statement for over 27 years of ‘Making Fun Therapeutic’, Kids On The Go recognizes and facilitates the goals of children with special needs and to further develop their current skills, proudly awarding over 500 scholarships each year!
            </p>
          </div>
          </div>
          </section>
    </div>
  );
};

export default Cause;