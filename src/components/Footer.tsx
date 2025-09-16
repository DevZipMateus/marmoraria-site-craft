import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground py-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/marble-background.jpg)' }}
      />
      
      {/* Dark Overlay for Footer */}
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Logo e Informações da Empresa */}
            <div className="text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Logo Marmoraria Brum Marquinhos" 
                  className="h-10 sm:h-12 w-auto"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Marmoraria Brum Marquinhos</h3>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                Mais de 15 anos de tradição em marmoraria, oferecendo qualidade e 
                excelência em cada projeto realizado.
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/60">
                CNPJ: 007.958.530-25
              </p>
            </div>

            {/* Contato */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm sm:text-base">(55) 9 9648-6463</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-xs sm:text-sm break-all">
                    marmorariabrummaquinhosdasilva@gmail.com
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm sm:text-base">
                    Avenida São Luís, 786 - Vila Nova
                  </span>
                </div>
              </div>
            </div>

            {/* Redes Sociais e Horário */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Siga-nos</h4>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <a 
                  href="https://www.facebook.com/share/1BKU8uZMMg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/5555996486463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2 text-sm sm:text-base">Horário de Funcionamento</h5>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">
                  Segunda a Sexta<br />
                  07:30 às 18h
                </p>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/60 text-xs sm:text-sm text-center md:text-left">
                © 2024 Marmoraria Brum Marquinhos. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/60 text-xs sm:text-sm text-center md:text-right">
                Desenvolvido com qualidade e dedicação
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;