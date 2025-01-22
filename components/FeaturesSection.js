export default function FeaturesSection() {
      const features = [
        {
          icon: '👨‍⚕️',
          title: 'Expert Doctors',
          description: 'Access to certified specialists across various fields'
        },
        {
          icon: '📅',
          title: '24/7 Availability',
          description: 'Book appointments anytime that suits you'
        },
        {
          icon: '💻',
          title: 'Virtual Consultations',
          description: 'Secure video calls from anywhere'
        },
        {
          icon: '💊',
          title: 'E-Prescriptions',
          description: 'Get digital prescriptions instantly'
        }
      ]

      return (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Why Choose TeleHealth+?
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Revolutionizing healthcare with technology and compassion
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="text-4xl mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
