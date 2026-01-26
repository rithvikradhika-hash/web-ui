import { Shield, Lock, CheckCircle, Award, Eye, ClipboardCheck } from 'lucide-react';

export function Trust() {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Wigglywoosh Verified Badge',
      description: 'Only providers who pass our rigorous physical audit receive the verified badge',
    },
    {
      icon: Eye,
      title: 'In-Person Audits',
      description: 'Our team physically inspects every clinic and grooming facility',
    },
    {
      icon: ClipboardCheck,
      title: 'Hygiene & Safety Standards',
      description: 'We verify cleanliness, equipment quality, and safety protocols',
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'All partners must show valid certifications and licenses',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900">
              Trust & Verification
            </h2>
          </div>
          <p className="text-lg md:text-xl text-purple-700 max-w-3xl mx-auto">
            Your pet deserves the best. That's why we personally verify every single partner on our platform.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-green-100"
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-purple-700 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Badge Showcase */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-2 border-green-200 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-12 h-12 text-green-600 fill-green-100" />
                <h3 className="text-2xl md:text-3xl font-bold text-purple-900">
                  Look for the Verified Badge
                </h3>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                Every partner displaying the Wigglywoosh Verified Badge has been physically audited by our team 
                for hygiene, safety, and quality standards. We don't just check boxes—we visit in person.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                  Wigglywoosh Verified
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-purple-900">SSL/TLS Encryption</h4>
                </div>
                <p className="text-sm text-purple-700">
                  Your pet's medical data is encrypted in transit and at rest using bank-level security
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-purple-900">Data Privacy Guaranteed</h4>
                </div>
                <p className="text-sm text-purple-700">
                  We never share your pet's information without explicit consent. Your privacy is our priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
