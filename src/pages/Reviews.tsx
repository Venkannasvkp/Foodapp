import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    comment:
      'Absolutely amazing snacks! The Masala Chips are my favorite. Fresh, crispy, and perfectly spiced. Highly recommend!',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    rating: 5,
    comment:
      'Best banana chips I have ever tasted. The quality is outstanding and delivery was super fast. Will definitely order again!',
    date: '2024-01-12',
  },
  {
    id: 3,
    name: 'Lakshmi Devi',
    rating: 5,
    comment:
      'Traditional taste just like homemade! The mixture and murukku remind me of my mother\'s cooking. Excellent quality.',
    date: '2024-01-10',
  },
  {
    id: 4,
    name: 'Arun Patel',
    rating: 4,
    comment:
      'Great variety of snacks. The spicy peanuts are addictive! Good packaging and reasonable prices.',
    date: '2024-01-08',
  },
  {
    id: 5,
    name: 'Meera Reddy',
    rating: 5,
    comment:
      'Ordered for a family function and everyone loved it! The quality and freshness are unmatched. Thank you Dhanalakshmi Snacks!',
    date: '2024-01-05',
  },
  {
    id: 6,
    name: 'Suresh Babu',
    rating: 5,
    comment:
      'The ribbon pakoda is crispy and delicious. Perfect snack for evening tea time. Very satisfied with the purchase!',
    date: '2024-01-03',
  },
  {
    id: 7,
    name: 'Kavitha Nair',
    rating: 5,
    comment:
      'Excellent service and top-quality products. The WhatsApp ordering is so convenient. Will be a regular customer!',
    date: '2023-12-28',
  },
  {
    id: 8,
    name: 'Venkat Raman',
    rating: 4,
    comment:
      'Very good taste and authentic flavors. The sev is particularly good. Keep up the good work!',
    date: '2023-12-25',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Customer Reviews</h1>
          <p className="text-gray-600 text-lg mb-6">
            See what our customers say about us
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-5xl font-bold text-orange-600">{averageRating}</div>
            <div>
              <StarRating rating={Math.round(Number(averageRating))} />
              <p className="text-gray-600 mt-1">Based on {reviews.length} reviews</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-lg mb-6">
            We would love to hear from you! Your feedback helps us improve our
            products and services.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20share%20my%20review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Write a Review
          </a>
        </div>
      </div>
    </div>
  );
}
