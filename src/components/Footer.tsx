const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="font-poppins text-sm">
            2025 | Todos los derechos reservados a CardMatch
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a href="#" className="font-poppins text-footer-foreground hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#" className="font-poppins text-footer-foreground hover:text-white transition-colors">
              Sobre nosotros
            </a>
            <a href="#" className="font-poppins text-footer-foreground hover:text-white transition-colors">
              Disclaimer
            </a>
            <a href="#" className="font-poppins text-footer-foreground hover:text-white transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="font-poppins text-footer-foreground hover:text-white transition-colors">
              Política de privacidad
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;