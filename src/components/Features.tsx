import { Camera, Calendar, MapPin, Brain } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Camera,
      title: 'Health Vault',
      subtitle: 'Snap & Save',
      description: 'Simply photograph medical records, prescriptions, and lab reports. Our intelligent system organizes everything in your pet\'s secure digital vault.',
      image: 'https://images.unsplash.com/photo-1732277347628-28234f55c951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcGV0fGVufDF8fHx8MTc2ODYzNTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Vaccination Timeline',
      subtitle: 'Never Miss a Shot',
      description: 'Automated visual progress bar tracks all vaccination schedules based on your pet\'s breed and age. Get timely reminders before each appointment.',
      image: 'https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBwZXQlMjBjYXJlfGVufDF8fHx8MTc2ODU1NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Verified Marketplace',
      subtitle: 'Trusted Local Care',
      description: 'Find the best vets and groomers near you with our map-based view. Every provider is physically audited for hygiene, safety, and quality standards.',
      image: 'https://images.unsplash.com/photo-1625279138836-e7311d5c863a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZ3xlbnwxfHx8fDE3Njg2NDM2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Brain,
      title: 'Health Nudges',
      subtitle: 'Predictive Insights',
      description: 'Receive personalized health recommendations based on your pet\'s breed, age, and medical history. Stay proactive about your pet\'s wellbeing.',
      image: 'https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg1ODI5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900">
            Everything You Need in One Place
          </h2>
          <p className="text-lg md:text-xl text-purple-700 max-w-3xl mx-auto">
            Smart features designed to make pet care effortless and stress-free
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Image */}
                <div className={`${isEven ? '' : 'lg:order-2'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                      {feature.subtitle}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-purple-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-lg text-purple-700 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="pt-4">
                    <div className={`h-1 w-24 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
