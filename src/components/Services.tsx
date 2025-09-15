import { ChefHat, Flame, Waves, ArrowUp, Mountain, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Cozinhas",
      description: "Bancadas, pias e revestimentos em mármore e granito para sua cozinha dos sonhos.",
      features: ["Bancadas sob medida", "Pias esculpidas", "Revestimentos personalizados", "Acabamentos especiais"]
    },
    {
      icon: Flame,
      title: "Lareiras",
      description: "Lareiras elegantes em pedra natural que trazem aconchego e sofisticação ao ambiente.",
      features: ["Design personalizado", "Pedras resistentes ao calor", "Acabamentos únicos", "Instalação completa"]
    },
    {
      icon: Waves,
      title: "Lavabos",
      description: "Pias e bancadas que transformam lavabos em verdadeiras obras de arte.",
      features: ["Pias esculturais", "Espelhos com moldura", "Bancadas exclusivas", "Design contemporâneo"]
    },
    {
      icon: ArrowUp,
      title: "Escadarias",
      description: "Escadas em mármore e granito com design elegante e máxima durabilidade.",
      features: ["Degraus antiderrapantes", "Corrimãos integrados", "Design arquitetônico", "Instalação segura"]
    },
    {
      icon: Mountain,
      title: "Túmulos",
      description: "Monumentos funerários em pedras nobres, criados com respeito e dignidade.",
      features: ["Materiais duradouros", "Gravações especiais", "Design respeitoso", "Manutenção inclusa"]
    },
    {
      icon: Building2,
      title: "Jazigos",
      description: "Estruturas funerárias robustas e elegantes, construídas para durar gerações.",
      features: ["Construção sólida", "Vedação perfeita", "Materiais premium", "Acabamento impecável"]
    }
  ];

  return (
    <section id="servicos" className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/marble-background.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/90" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Oferecemos uma ampla gama de serviços em marmoraria, combinando tradição artesanal 
              com técnicas modernas para resultados excepcionais.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-lg p-4 sm:p-6 shadow-elegant hover:shadow-gold transition-smooth hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full mb-4 sm:mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent group-hover:text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                  onClick={() => window.open('https://wa.me/5555996486463?text=Olá! Gostaria de saber mais sobre ' + service.title, '_blank')}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-gold rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
              Realizamos projetos personalizados em mármore e granito. Entre em contato conosco 
              e conte-nos sobre sua necessidade específica.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-semibold px-8 py-4"
              onClick={() => window.open('https://wa.me/5555996486463?text=Olá! Preciso de um projeto personalizado em marmoraria.', '_blank')}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;