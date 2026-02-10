import { Heart } from 'lucide-react';

export function Hero() {
  const scrollToPartners = () => {
    const partnerSection = document.getElementById('partner-section');
    partnerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 reveal">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-3 rounded-2xl shadow-lg">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            <span className="text-3xl font-bold text-purple-900">Wigglywoosh</span>
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-900 leading-tight">
              Central Intelligence for Your Pet's Care.
            </h1>
            <p className="text-lg md:text-xl text-purple-700 max-w-2xl mx-auto lg:mx-0">
              One secure vault for health records and a verified marketplace for the best local care
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://app.wigglywoosh.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="cta bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Launch Your Pet's Vault
            </a>
            <button
              onClick={scrollToPartners}
              className="cta bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-purple-200"
            >
              For Vets & Groomers
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-purple-700">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-purple-700">HIPAA Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl card-hover reveal">
            <img
              src="https://images.unsplash.com/photo-1629751223385-5e9e8c004b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHB1cHB5fGVufDF8fHx8MTc2ODY0MzYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Happy puppy"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              <span className="font-semibold text-purple-900">100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
