export default function TestimonialsSection() {
      const testimonials = [
        {
          name: 'Sarah Johnson',
          role: 'Patient',
          content: 'The convenience of getting medical advice without leaving home is amazing!',
          image: '/testimonial1.jpg'
        },
        {
          name: 'Michael Brown',
          role: 'Patient',
          content: 'The doctors are very professional and the platform is easy to use.',
          image: '/testimonial2.jpg'
        }
      ]

      return (
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                What Our Patients Say
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <img 
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <div className="text-lg font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
