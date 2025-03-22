import React from 'react';
import { ShoppingBag, Star, Truck, RefreshCw } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "Classic Black Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    rating: 4.8
  },
  {
    id: 2,
    name: "White Essential",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800",
    rating: 4.9
  },
  {
    id: 3,
    name: "Navy Comfort",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
    rating: 4.7
  },
];

const features = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Shipping",
    description: "On orders over $50"
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Easy Returns",
    description: "30-day return policy"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Premium Quality",
    description: "100% cotton materials"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Dozn</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Men</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Women</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sale</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1800"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Premium T-Shirts<br />for Every Style
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover our collection of comfortable and stylish t-shirts
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <ShoppingBag className="h-8 w-8" />
                <span className="ml-2 text-2xl font-bold">Dozn</span>
              </div>
              <p className="mt-4 text-gray-400">
                Premium quality t-shirts for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Men</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Women</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Dozn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;