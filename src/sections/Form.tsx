import Button from '../components/Button'

const Form = () => {
  return (
    <section className="py-16 bg-[#F15A2B]">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready for your next project?
          </h2>
          <p className="text-white text-base md:text-lg">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="What are you say ?"
              className="px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="flex justify-center mt-2">
            <Button variant="dark">
              Request Demo
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form 