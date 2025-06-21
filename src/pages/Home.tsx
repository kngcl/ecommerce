import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Zap, Truck, Shield, Headphones } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  const saleProducts = products.filter(p => p.originalPrice).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $99</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is safe</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Same day delivery in selected areas</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">Customer support available anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-2">Discover our most popular items</p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Limited Time Offers</h2>
            <p className="text-gray-600 mt-2">Don't miss out on these amazing deals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/sale"
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
            >
              View All Sale Items
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-r-lg hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;