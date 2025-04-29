'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FaAndroid } from "react-icons/fa";
import { Button } from '../ui/button'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is Aviator is a safe and secure app?",
      answer: "Yes, Aviator is a safe and secure app. We use state-of-the-art encryption and security protocols to protect user data and transactions."
    },
    {
      question: "Can I earn real cash from this app?",
      answer: "Yes, you can earn real cash rewards through various gaming activities and competitions on our platform."
    },
    {
      question: "Who can play real-money games like Aviator?",
      answer: "Any adult user above 18 years of age can play real-money games on our platform, subject to local regulations."
    },
    {
      question: "Can I withdraw real cash to my bank account?",
      answer: "Yes, you can withdraw your winnings directly to your linked bank account through our secure payment system."
    },
    {
      question: "Why should u play Aviator?",
      answer: "Aviator offers a unique blend of entertainment and earning opportunities with a secure platform and active community."
    },
    {
      question: "Who are the Aviator founders?",
      answer: "Our founding team consists of gaming industry veterans with decades of combined experience."
    }
  ]

  // const ratings = [
  //   { stars: 5, percentage: 75 },
  //   { stars: 4, percentage: 15 },
  //   { stars: 3, percentage: 5 },
  //   { stars: 2, percentage: 3 },
  //   { stars: 1, percentage: 2 }
  // ]

  const handleDownload = () => {
    // Directly set the file URL
    const apkUrl = "/Aviator.apk";
  
    // Create a temporary <a> element to trigger download
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Aviator.apk"); // Sets the download filename
    document.body.appendChild(link);
    link.click();
  
    // Clean up the temporary link element
    document.body.removeChild(link);
  };

  return (
    <section id = "faq" className="min-h-screen bg-gradient-to-br from-orange-900/40 via-black to-orange-900/40 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked
            <br />
            Questions
          </h1>
          <p className="text-gray-400">Wanna Ask Something?</p>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#332311] rounded-2xl p-6 mb-16">
          <div className="flex justify-between items-center mb-6 flex-col gap-4 md:gap-0 md:flex-row">
            <h2 className="text-xl font-semibold">FAQ Accordion V3</h2>
            <button className="bg-white text-orange-900 px-4 py-2 rounded-full text-sm font-medium">
              Preview results
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#5b3e1c] rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span className="text-left font-medium">{faq.question}</span>
                  {openQuestion === index ? (
                    <Minus className="w-5 h-5 flex-shrink-0 transition-transform duration-300 rotate-180" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0 transition-transform duration-300" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openQuestion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-4 text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="text-6xl font-bold mb-2">10M +</div>
            <div className="text-2xl">DOWNLOADS</div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">Rate Aviator</h3>
            <p className="text-gray-400 mb-4">
              Rating and reviews are verified and are from people who use the service
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-bold">4.5</div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-gray-400">2,256,895</div>
            </div>

            <div className="space-y-2">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-3">{rating.stars}</span>
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div> */}
        
      </div>
      <div 
          className="mt-20 bg-gradient-to-r from-[#c0ad3e] via-[#d38200] to-[#c0ad3e] rounded-2xl p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Get ready to earn
            <br />
            new rewards
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
              {/* <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-400 to-purple-600 text-white font-bold py-6 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90">
                <FaApple className="mr-2 h-5 w-5" />
                DOWNLOAD
              </Button> */}
              <Button onClick={handleDownload} variant="outline" className="bg-gray-800 text-orange-600 font-bold py-6 px-8 rounded-full border-orange-600 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-orange-400 hover:text-white hover:border-orange-400">
                <FaAndroid className="mr-2 h-5 w-5" />
                DOWNLOAD
              </Button>
            </div>
        </div>
      
    </section>
  )
}