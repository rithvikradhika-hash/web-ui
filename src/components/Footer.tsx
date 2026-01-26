import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold">Wigglywoosh</span>
            </div>
            <p className="text-purple-200">
              Central Intelligence for Your Pet's Care. Making pet parenting effortless and stress-free.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/wigglywoosh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 p-3 rounded-lg hover:bg-purple-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/wigglywoosh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 p-3 rounded-lg hover:bg-purple-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://app.wigglywoosh.co.in" className="text-purple-200 hover:text-white transition-colors">
                  Parent App
                </a>
              </li>
              <li>
                <a href="https://partner.wigglywoosh.co.in" className="text-purple-200 hover:text-white transition-colors">
                  Partner Dashboard
                </a>
              </li>
              <li>
                <a href="/blog" className="text-purple-200 hover:text-white transition-colors">
                  Educational Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-purple-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-purple-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-purple-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/data-security" className="text-purple-200 hover:text-white transition-colors">
                  Data Security
                </a>
              </li>
              <li>
                <a href="/refund" className="text-purple-200 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:admin@wigglywoosh.co.in" className="text-purple-200 hover:text-white transition-colors">
                  admin@wigglywoosh.co.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-purple-200 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-purple-200">
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-200 text-sm text-center md:text-left">
              © {currentYear} Wigglywoosh. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-200">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
              <span>for pet parents everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}