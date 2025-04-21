import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import user from '@/assets/user.png'
import user2 from '@/assets/user2.png'
import user3 from '@/assets/user3.png'
import user4 from '@/assets/user4.png'
import user5 from '@/assets/user5.png'  


const reviews = [
  {
    id: 1,
    rating: 5,
    text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games.",
    author: "Sandeep",
    image: user
  },
  {
    id: 2,
    rating: 5,
    text: "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles.",
    author: "Avinash",
    image: user2
  },
  {
    id: 3,
    rating: 5,
    text: "The user interface is incredibly intuitive and well-designed. Navigation is seamless, and finding specific games or information is a breeze. The website's performance is consistently smooth, ensuring an uninterrupted browsing experience.",
    author: "Jane",
    image: user3
  },
  {
    id: 4,
    rating: 5,
    text: "I appreciate the regular updates and new content additions. The website stays current with the latest gaming trends and releases, providing fresh perspectives and insights. The commitment to quality content is evident.",
    author: "Rahul",
    image: user4
  },
  {
    id: 5,
    rating: 5,
    text: "The mobile responsiveness of this platform is exceptional. I can access all features and content seamlessly from my smartphone, making it convenient to stay connected with the gaming community on the go.",
    author: "Deepak",
    image: user5
  }
]

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide + 1) % (windowWidth >= 768 ? Math.ceil(reviews.length / 2) : reviews.length)
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [windowWidth])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-[#a27146] rounded-2xl p-8 h-[420px] sm:h-[350px] flex flex-col justify-between">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex-grow overflow-y-auto mb-4 custom-scrollbar">
        <p className="text-gray-300 leading-relaxed line-clamp-[8]">{review.text}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
          <span className="font-medium">{review.author}</span>
        </div>
        <div className="flex items-center gap-2 text-orange-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm3.36-8.64a.75.75 0 00-1.06 1.06L9.5 11.3 7.7 9.5a.75.75 0 00-1.06 1.06l2.3 2.3a.75.75 0 001.06 0l3.36-3.36z" />
          </svg>
          <span className="text-sm">Verified</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-orange-900/40 via-black to-orange-900/40 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          CUSTOMER REVIEWS
        </h2>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {windowWidth >= 768 ? (
              Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviews.slice(index * 2, index * 2 + 2).map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <ReviewCard review={review} />
                </div>
              ))
            )}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: windowWidth >= 768 ? Math.ceil(reviews.length / 2) : reviews.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-orange-500" : "bg-orange-500/20"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}