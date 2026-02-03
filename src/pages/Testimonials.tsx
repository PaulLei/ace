import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Advik Tatavarthi",
      school: "Troy High School",
      score: "AP Score: 5",
    
      text: "Ace Academy completely transformed my understanding of AP Chemistry. Abhinav was incredibly helpful in making the concepts clear and fun to learn by tying them into real-world applications. With his help I was able to do well on all assessments and the AP exam!"
    },
    {
      name: "Paul Lei",
      school: "Troy High School",
      score: "AP Score: 5",
     
      text: "Abhinav is an great tutor who cares about his students. He takes the time to go over the nuances of chemistry, as well as explain difficult topics in a simple way. I would 100% recommend taking his course."
    },
    {
      name: "Jayden Paik",
      school: "Troy High School",
      score: "AP Score: 5",
      
      text: "ACE transformed the way I saw chemistry. Not only did I ACE the AP Chemistry exam, but ACE taught me that chemistry isn't just a subject - its a skill that I can master. If you want extensive knowledge outside of your conventional Chemistry textbook, ACE is the place to be."
    },
    {
      name: "Jian Song",
      school: "Troy High School",
      score: "AP Score: 5",

      text: "Abhinav is an amazing tutor who really cares about his students. His teaching style is very intuitive and he makes sure to explain concepts in a way that is easy to understand. Thanks to his guidance, I was able to achieve a 5 on the AP Chemistry exam!"
    },
    

  ];


  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Student Success Stories</h1>
          <p className="text-xl leading-relaxed">
            Hear from our amazing students who've achieved their AP Chemistry goals and beyond.
          </p>
        </div>
      </section>


      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from real students who've transformed their chemistry understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.school}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-3 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {testimonial.score}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-300" />
                  <p className="text-gray-700 leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to achieve your AP Chemistry goals and make a difference? Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
              href="https://forms.gle/FLrNAkH9nTLvofNt5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Enroll Now
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
