import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-poppins font-bold text-2xl text-primary">
              CardMatch
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-poppins text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#" className="font-poppins text-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#" className="font-poppins text-foreground hover:text-primary transition-colors">
              Tarjeta de Crédito
            </a>
            <a href="#" className="font-poppins text-foreground hover:text-primary transition-colors">
              Consejos
            </a>
            <a href="#" className="font-poppins text-foreground hover:text-primary transition-colors">
              Préstamos
            </a>
            <button className="text-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;