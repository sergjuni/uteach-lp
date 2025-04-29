import Button from './Button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="UTeach" className="h-8" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary">Log in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 