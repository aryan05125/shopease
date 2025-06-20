
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "/placeholder.svg",
      rating: 4.8,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: "/placeholder.svg",
      rating: 4.6,
      category: "Wearables"
    },
    {
      id: 3,
      name: "Leather Travel Backpack",
      price: 89.99,
      originalPrice: 129.99,
      image: "/placeholder.svg",
      rating: 4.9,
      category: "Fashion"
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      originalPrice: 99.99,
      image: "/placeholder.svg",
      rating: 4.7,
      category: "Electronics"
    }
  ];

  const categories = [
    { name: "Electronics", image: "/placeholder.svg", count: "120+" },
    { name: "Fashion", image: "/placeholder.svg", count: "85+" },
    { name: "Home & Garden", image: "/placeholder.svg", count: "200+" },
    { name: "Sports", image: "/placeholder.svg", count: "150+" }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-shopease-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30">
              ✨ New Collection Available
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Discover Amazing Products at 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
                Great Prices
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Shop from thousands of products with fast delivery, secure payments, and excellent customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="bg-white text-shopease-blue-700 hover:bg-gray-100 font-semibold px-8">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-shopease-blue-700 font-semibold px-8">
                View Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-shopease-blue-100 rounded-full flex items-center justify-center group-hover:bg-shopease-blue-200 transition-colors">
                  <img src={category.image} alt={category.name} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} items</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-2">Handpicked items just for you</p>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="hidden md:flex">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-red-500">
                    Save ${(product.originalPrice - product.price).toFixed(0)}
                  </Badge>
                </div>
                <div className="p-4 space-y-3">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 group-hover:text-shopease-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-shopease-blue-600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <Button size="sm" className="bg-shopease-blue-600 hover:bg-shopease-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
            <p className="text-gray-600">
              Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shopease-blue-500"
              />
              <Button className="bg-shopease-blue-600 hover:bg-shopease-blue-700 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
