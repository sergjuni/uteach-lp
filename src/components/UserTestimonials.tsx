import { useState } from 'react'
import backButton from '../assets/icons/back_button.png'
import forwardButton from '../assets/icons/foward_button.png'
import userThumb1 from '../assets/images/user_1_thumb.png'
import userThumb2 from '../assets/images/user_2_thumb.png'
import userThumb3 from '../assets/images/user_3_thumb.png'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
}

const VISIBLE_TESTIMONIALS = 3

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Hellen Jummy',
    role: 'Financial Counselor',
    content: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
    image: userThumb1
  },
  {
    id: 2,
    name: 'Ralph Edwards',
    role: 'Math Teacher',
    content: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.',
    image: userThumb2
  },
  {
    id: 3,
    name: 'Hellena John',
    role: 'Psychology Student',
    content: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.',
    image: userThumb3
  }
]

const UserTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + VISIBLE_TESTIMONIALS)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < testimonials.length - VISIBLE_TESTIMONIALS) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">What everyone says</h2>
        <div className="hidden md:flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="p-2 hover:opacity-80 disabled:opacity-50"
          >
            <img src={backButton} alt="Previous" className="w-12 h-12" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - VISIBLE_TESTIMONIALS}
            className="p-2 hover:opacity-80 disabled:opacity-50"
          >
            <img src={forwardButton} alt="Next" className="w-12 h-12" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <p className="text-gray-600 mb-6">{testimonial.content}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UserTestimonials 