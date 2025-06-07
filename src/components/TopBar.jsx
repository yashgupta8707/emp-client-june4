import { Search, Menu } from "lucide-react";

export default function TopBar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-gray-800">
        
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex items-center justify-between h-12 lg:h-14">
              
              <div className="flex-shrink-0">
                <img 
                  src="/images/Logo.webp" 
                  alt="Logo" 
                  className="h-6 lg:h-8 w-auto" 
                />
              </div>

              <nav className="flex-1 flex justify-center">
                <div className="flex space-x-8 lg:space-x-12">
                  <a href="#" className="text-gray-300 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200">
                    Home
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200">
                    Products
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200">
                    Blogs
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200">
                    About
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-sm lg:text-base font-medium transition-colors duration-200">
                    Contact
                  </a>
                </div>
              </nav>

              <div className="flex-shrink-0">
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Search className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between h-12 px-4">
            
            <div className="flex-shrink-0">
              <img 
                src="/images/Logo.webp" 
                alt="Logo" 
                className="h-6 w-auto" 
              />
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                <Search className="w-6 h-6" />
              </button>
              
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}