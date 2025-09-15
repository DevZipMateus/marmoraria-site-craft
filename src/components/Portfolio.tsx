import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trabalhos = [
    {
      id: 1,
      image: "/trabalhos/banheiro-elegante.jpg",
      title: "Banheiro Elegante",
      description: "Bancada em mármore travertino com iluminação LED embutida e acabamentos de luxo.",
      category: "Lavabo"
    },
    {
      id: 2,
      image: "/trabalhos/cozinha-moderna.jpg",
      title: "Cozinha com Lareira",
      description: "Projeto completo com bancada em granito branco, lareira em pedra natural e churrasqueira integrada.",
      category: "Cozinha"
    },
    {
      id: 3,
      image: "/trabalhos/cozinha-granito.jpg",
      title: "Cozinha Clássica",
      description: "Bancada em granito preto absoluto com acabamento polido e design funcional.",
      category: "Cozinha"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trabalhos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trabalhos.length) % trabalhos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alguns de Nossos Trabalhos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos que realizamos com excelência e dedicação. 
              Cada trabalho reflete nosso compromisso com a qualidade e satisfação do cliente.
            </p>
          </div>

          {/* Carrossel */}
          <div className="relative">
            {/* Container do Carrossel */}
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {trabalhos.map((trabalho) => (
                  <div key={trabalho.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      {/* Imagem */}
                      <div className="relative overflow-hidden">
                        <img
                          src={trabalho.image}
                          alt={trabalho.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-overlay opacity-20"></div>
                      </div>

                      {/* Conteúdo */}
                      <div className="bg-card border border-border p-8 flex flex-col justify-center">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                            {trabalho.category}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {trabalho.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {trabalho.description}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                            onClick={() => window.open('https://wa.me/5555996486463?text=Olá! Vi o trabalho ' + trabalho.title + ' no site e gostaria de um orçamento similar.', '_blank')}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Solicitar Orçamento
                          </Button>
                          <Button 
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                            onClick={() => window.open('https://wa.me/5555996486463?text=Olá! Gostaria de ver mais trabalhos como ' + trabalho.title, '_blank')}
                          >
                            Ver Mais Trabalhos
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões de Navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center shadow-elegant hover:bg-accent hover:text-accent-foreground transition-smooth group"
              aria-label="Trabalho anterior"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center shadow-elegant hover:bg-accent hover:text-accent-foreground transition-smooth group"
              aria-label="Próximo trabalho"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-3 mt-8">
            {trabalhos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentSlide 
                    ? 'bg-accent shadow-gold' 
                    : 'bg-border hover:bg-accent/50'
                }`}
                aria-label={`Ir para trabalho ${index + 1}`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-marble border border-border shadow-elegant max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Gostou dos nossos trabalhos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco e transforme seu projeto em realidade. 
                Oferecemos consultoria gratuita e orçamento personalizado.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4"
                onClick={() => window.open('https://wa.me/5555996486463?text=Olá! Vi o portfólio de trabalhos no site e gostaria de solicitar um orçamento.', '_blank')}
              >
                Solicitar Orçamento Gratuito
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;