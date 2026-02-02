import { useState } from 'react';
import { Stethoscope, Scissors, Send, ExternalLink } from 'lucide-react';

export function PartnerSection() {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    contact: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', clinicName: '', contact: '', location: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="partner-section" className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100 reveal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Stethoscope className="w-12 h-12 text-purple-600" />
            <Scissors className="w-12 h-12 text-pink-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900">
            Are You a Vet or a Groomer?
          </h2>
          <p className="text-lg md:text-xl text-purple-700 max-w-3xl mx-auto">
            Join Wigglywoosh's trusted network. Get discovered by pet parents in your area and grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg reveal card-hover">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">
                Partner Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  'Get the Wigglywoosh Verified Badge after our audit',
                  'Appear on our map-based marketplace',
                  'Access to pet health records (with parent consent)',
                  'Digital appointment booking system',
                  'Grow your client base with targeted visibility',
                  'Free marketing through our platform',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-purple-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Login Link */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200 reveal card-hover">
              <h4 className="font-semibold text-purple-900 mb-3">Already a Partner?</h4>
              <a
                href="https://partner.wigglywoosh.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors link-underline"
              >
                Access Partner Dashboard
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl reveal card-hover">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">
              Request an Audit
            </h3>
            
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-900 mb-2">Request Submitted!</h4>
                <p className="text-green-700">We'll contact you within 48 hours to schedule your audit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-purple-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Dr. John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="clinicName" className="block text-sm font-semibold text-purple-900 mb-2">
                    Clinic/Business Name *
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    required
                    value={formData.clinicName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Happy Paws Veterinary Clinic"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-purple-900 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-purple-900 mb-2">
                    Location (City) *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Bangalore, Karnataka"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cta bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>

                <p className="text-xs text-purple-600 text-center">
                  By submitting, you agree to our audit process and terms of service
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}