import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-emerald-500/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">Trusted by 10,000+ customers</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Products
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">
                  Delivered Fast
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Discover our curated collection of premium electronics, fashion, and lifestyle products. 
                Quality guaranteed with fast, secure shipping.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/categories"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Browse Categories
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Shield className="h-8 w-8 text-emerald-400 mx-auto" />
                <div className="text-white/80 text-sm">
                  <div className="font-semibold">Secure</div>
                  <div>Payments</div>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <Truck className="h-8 w-8 text-amber-400 mx-auto" />
                <div className="text-white/80 text-sm">
                  <div className="font-semibold">Free</div>
                  <div>Shipping</div>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <Star className="h-8 w-8 text-yellow-400 mx-auto" />
                <div className="text-white/80 text-sm">
                  <div className="font-semibold">Premium</div>
                  <div>Quality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-8">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Featured Product"
                  className="w-full h-80 object-cover rounded-lg"
                />
                
                {/* Product Badge */}
                <div className="absolute top-12 right-12 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  25% OFF
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              
              {/* Stats Cards */}
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
              
              <div className="absolute -right-6 bottom-20 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;