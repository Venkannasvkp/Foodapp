import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We are here to help! Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <a
              href="tel:+919666932714"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              +91 9666932714
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <a
              href="mailto:info@dhanalakshmisnacks.com"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              info@venkannaakana.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Saturday
              <br />
              9:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                123, MG Road, Gandhi Nagar
                <br />
                Bangalore, Karnataka - 560001
                <br />
                India
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Have a Question?
          </h2>
          <p className="text-white text-center mb-6">
            Feel free to reach out to us through WhatsApp for quick responses!
          </p>
          <div className="text-center">
            <a
              href="https://wa.me/9666932714?text=Hello%20Dhanalakshmi%20Snacks%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact us on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6394633155457!2d77.59456731482268!3d12.972442790863845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dhanalakshmi Snacks Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
