
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart items count

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-shopease-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-shopease-blue-700">ShopEase</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-shopease-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-shopease-blue-600 transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-shopease-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-shopease-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden md:flex">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-shopease-blue-600">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-shopease-blue-600">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-shopease-blue-600">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-in">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
              <Link to="/" className="text-gray-700 hover:text-shopease-blue-600 transition-colors py-2">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-shopease-blue-600 transition-colors py-2">
                Shop
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-shopease-blue-600 transition-colors py-2">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-shopease-blue-600 transition-colors py-2">
                Contact
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-shopease-blue-600 transition-colors py-2">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
