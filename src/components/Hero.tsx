import { ArrowRight, Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/marble-background.jpg)' }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo e Nome da Empresa */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:space-x-6">
            <img 
              src="/logo.png" 
              alt="Logo Marmoraria Brum Marquinhos" 
              className="h-16 sm:h-20 w-auto"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-2 leading-tight">
                Marmoraria Brum Marquinhos
              </h1>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
                ))}
                <span className="text-muted-foreground text-sm sm:text-base ml-2">15+ anos de experiência</span>
              </div>
            </div>
          </div>

          {/* Descrição Principal */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
            Somos uma equipe com mais de 15 anos no ramo de marmoraria. A empresa Brum Marquinhos tem a maior prioridade em ver nossos clientes satisfeitos.
          </h2>

          {/* Destaques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card border border-border shadow-elegant">
              <Award className="h-8 w-8 text-accent" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Qualidade Garantida</div>
                <div className="text-sm text-muted-foreground">Materiais premium</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card border border-border shadow-elegant">
              <Clock className="h-8 w-8 text-accent" />
              <div className="text-left">
                <div className="font-semibold text-foreground">15+ Anos</div>
                <div className="text-sm text-muted-foreground">De experiência</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card border border-border shadow-elegant">
              <Star className="h-8 w-8 text-accent" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Satisfação</div>
                <div className="text-sm text-muted-foreground">Cliente em primeiro lugar</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-gold transition-smooth group text-sm sm:text-base"
              onClick={() => window.open('https://wa.me/5555996486463', '_blank')}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-smooth text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Horário de Funcionamento */}
          <div className="mt-8 sm:mt-12 mx-4 sm:mx-auto">
            <div className="p-4 sm:p-6 bg-card border border-border rounded-lg shadow-elegant max-w-md mx-auto">
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Horário de Atendimento</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Segunda a Sexta: 07:30 às 18:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;