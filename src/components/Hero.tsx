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

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo e Nome da Empresa */}
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="Logo Marmoraria Brum Marquinhos" 
              className="h-20 w-auto mr-6"
            />
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
                Marmoraria Brum Marquinhos
              </h1>
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
                <span className="text-muted-foreground ml-2">15+ anos de experiência</span>
              </div>
            </div>
          </div>

          {/* Descrição Principal */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Somos uma equipe com mais de 15 anos no ramo de marmoraria. A empresa Brum Marquinhos tem a maior prioridade em ver nossos clientes satisfeitos.
          </h2>

          {/* Destaques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg shadow-gold transition-smooth group"
              onClick={() => window.open('https://wa.me/5555996486463', '_blank')}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-smooth"
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
          <div className="mt-12 p-6 bg-card border border-border rounded-lg shadow-elegant max-w-md mx-auto">
            <h3 className="font-semibold text-foreground mb-2">Horário de Atendimento</h3>
            <p className="text-muted-foreground">
              Segunda a Sexta: 07:30 às 18:30
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;