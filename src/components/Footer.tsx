import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo e Informações da Empresa */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Logo Marmoraria Brum Marquinhos" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">Marmoraria Brum Marquinhos</h3>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Mais de 15 anos de tradição em marmoraria, oferecendo qualidade e 
                excelência em cada projeto realizado.
              </p>
              <p className="text-sm text-primary-foreground/60">
                CNPJ: 007.958.530-25
              </p>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-primary-foreground/80">(55) 9 9648-6463</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-primary-foreground/80 text-sm">
                    marmorariabrummaquinhosdasilva@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-primary-foreground/80">
                    Avenida São Luís, 786 - Vila Nova
                  </span>
                </div>
              </div>
            </div>

            {/* Redes Sociais e Horário */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4 mb-6">
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
                <h5 className="font-semibold mb-2">Horário de Funcionamento</h5>
                <p className="text-primary-foreground/80 text-sm">
                  Segunda a Sexta<br />
                  07:30 às 18:30
                </p>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
                © 2024 Marmoraria Brum Marquinhos. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/60 text-sm">
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