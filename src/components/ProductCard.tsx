import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', product });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement wishlist functionality
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute top-3 right-3 bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-medium">
              Out of Stock
            </div>
          )}

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button
              onClick={handleAddToWishlist}
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
            <h3 className="text-lg font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;