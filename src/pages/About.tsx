import { Heart, Users, Award, Clock } from 'lucide-react';

export function About() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg">
            Your trusted source for authentic Indian snacks
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <img
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Dhanalakshmi Snacks"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Dhanalakshmi Snacks was founded with a passion for bringing authentic Indian
            flavors to your home. What started as a small home-based venture has grown
            into a trusted name for quality snacks across the region.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We believe in using traditional recipes passed down through generations,
            combined with modern hygiene standards and packaging techniques. Every snack
            that leaves our facility is made with the same care and attention as if we
            were making it for our own family.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our commitment to quality has earned us the trust of thousands of customers
            who return to us again and again for their favorite snacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Made with Love</h3>
            <p className="text-gray-600">
              Every product is crafted with passion and dedication to ensure the best
              taste and quality.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Family Business</h3>
            <p className="text-gray-600">
              A family-run business that values tradition, quality, and customer
              satisfaction above all else.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              We never compromise on quality. Only the finest ingredients make it into
              our products.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Daily</h3>
            <p className="text-gray-600">
              All snacks are prepared fresh daily to ensure maximum freshness and taste.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To bring the authentic taste of traditional Indian snacks to every household,
            while maintaining the highest standards of quality, hygiene, and customer
            service.
          </p>
        </div>
      </div>
    </div>
  );
}
