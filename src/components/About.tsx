import { Users, Heart, Gem, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais com mais de 15 anos de experiência no ramo de marmoraria."
    },
    {
      icon: Heart,
      title: "Compromisso com a Satisfação",
      description: "Nossa maior prioridade é ver nossos clientes completamente satisfeitos."
    },
    {
      icon: Gem,
      title: "Materiais de Qualidade",
      description: "Trabalhamos apenas com mármores e granitos de primeira qualidade."
    }
  ];

  const benefits = [
    "Atendimento personalizado e consultoria especializada",
    "Medição e instalação realizadas por profissionais qualificados", 
    "Garantia de qualidade em todos os nossos serviços",
    "Prazo de entrega respeitado e pontualidade",
    "Preços justos e orçamentos transparentes",
    "Pós-venda e suporte contínuo"
  ];

  return (
    <section id="sobre" className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/marble-background.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a Marmoraria Brum Marquinhos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Com mais de 15 anos de tradição no mercado de marmoraria, somos especialistas em transformar 
              ambientes com a beleza e durabilidade das pedras naturais.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg shadow-elegant hover:shadow-gold transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Tradição e Qualidade em Cada Projeto
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A Marmoraria Brum Marquinhos nasceu da paixão pela arte de trabalhar com pedras naturais. 
                Ao longo dos anos, construímos nossa reputação baseada na qualidade excepcional dos nossos 
                trabalhos e no compromisso inabalável com a satisfação dos nossos clientes.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe especializada possui o conhecimento técnico e a experiência necessária para 
                realizar projetos de qualquer complexidade, desde cozinhas residenciais até grandes 
                empreendimentos comerciais.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-gold rounded-lg text-accent-foreground">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
              
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
              
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-gold rounded-lg text-accent-foreground">
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-sm">Especialidades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;