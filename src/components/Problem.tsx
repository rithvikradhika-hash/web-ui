import { AlertCircle, FileX, Clock, MapPinOff } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: FileX,
      title: 'Fragmented Care',
      description: 'Medical records scattered across multiple vets and groomers with no central system',
    },
    {
      icon: Clock,
      title: 'Lost Paper Records',
      description: 'Critical vaccination dates and prescriptions misplaced when you need them most',
    },
    {
      icon: MapPinOff,
      title: 'Unverified Providers',
      description: 'Difficulty finding trustworthy, hygienic pet care services in your area',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Stress',
      description: 'Panicking during pet emergencies because you can\'t access complete medical history',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm reveal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900">
            The Problem Pet Parents Face
          </h2>
          <p className="text-lg md:text-xl text-purple-700 max-w-3xl mx-auto">
            Losing track of your pet's medical history shouldn't add stress during critical moments. 
            Yet, disorganized records and fragmented care make it nearly impossible to stay on top of your pet's health.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                data-reveal-delay={index * 80}
                className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-200 card-hover hover-float reveal border-2 border-purple-100"
              >
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 hover-tilt">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-purple-700">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal" data-reveal-delay={problems.length * 80}>
          <p className="text-2xl font-semibold text-purple-900 mb-4">
            There's a better way to care for your pet.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
