import Card from '../components/Card';

const features = [
  {
    title: 'Flexible Schedule',
    description: 'Set your own hours and teach when it works best for you.',
    icon: '/icons/calendar.svg'
  },
  {
    title: 'Global Reach',
    description: 'Connect with students from around the world.',
    icon: '/icons/globe.svg'
  },
  {
    title: 'Easy Payments',
    description: 'Get paid securely and on time, every time.',
    icon: '/icons/payment.svg'
  }
];

const testimonials = [
  {
    title: 'Amazing Platform',
    description: '"I love teaching on this platform. It\'s so easy to use and my students love it!"',
    image: '/testimonials/teacher1.jpg'
  },
  {
    title: 'Great Community',
    description: '"The support from both the platform and other teachers is incredible."',
    image: '/testimonials/teacher2.jpg'
  }
];

const ContentCards = () => {
  return (
    <>
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Teachers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentCards; 