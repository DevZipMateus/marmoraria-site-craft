import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const Portfolio = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const trabalhos = [
    { id: 1, image: "/trabalhos/banheiro-elegante.jpg", alt: "Banheiro elegante com bancada em mármore travertino" },
    { id: 2, image: "/trabalhos/cozinha-moderna.jpg", alt: "Cozinha moderna com lareira em pedra natural" },
    { id: 3, image: "/trabalhos/cozinha-granito.jpg", alt: "Cozinha clássica com bancada em granito preto" },
    { id: 4, image: "/trabalhos/bancada-led.jpg", alt: "Bancada com iluminação LED embutida" },
    { id: 5, image: "/trabalhos/banheiro-luxo.jpg", alt: "Banheiro de luxo com acabamentos premium" },
    { id: 6, image: "/trabalhos/bancada-gourmet.jpg", alt: "Bancada gourmet em mármore" },
    { id: 7, image: "/trabalhos/tumulos-jazigos.jpg", alt: "Túmulos e jazigos em pedra natural" },
    { id: 8, image: "/trabalhos/bancada-dupla.jpg", alt: "Bancada dupla em granito preto" },
    { id: 9, image: "/trabalhos/bancada-preta.jpg", alt: "Bancada preta com pia integrada" },
    { id: 10, image: "/trabalhos/cozinha-completa.jpg", alt: "Projeto completo de cozinha" }
  ];

  // Auto-play a cada 3 segundos
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/marble-background.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alguns de Nossos Trabalhos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Conheça alguns dos projetos que realizamos com excelência e dedicação. 
              Clique nas imagens para visualizá-las em tamanho maior.
            </p>
          </div>

          {/* Carrossel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-5xl mx-auto px-4 sm:px-0"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {trabalhos.map((trabalho) => (
                <CarouselItem key={trabalho.id} className="pl-2 sm:pl-4 basis-full xs:basis-1/2 sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2">
                    <Card className="overflow-hidden hover:shadow-gold transition-smooth cursor-pointer group">
                      <CardContent className="p-0">
                        <div 
                          className="relative aspect-square overflow-hidden"
                          onClick={() => handleImageClick(trabalho.image)}
                        >
                          <img
                            src={trabalho.image}
                            alt={trabalho.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                              <span className="text-accent-foreground text-sm font-semibold">+</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" />
          </Carousel>

          {/* Modal de Expansão */}
          <Dialog open={!!selectedImage} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
              <div className="relative">
                <DialogClose asChild>
                  <button
                    className="absolute -top-12 right-0 w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-elegant hover:bg-accent hover:text-accent-foreground transition-smooth z-10"
                    aria-label="Fechar imagem"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </DialogClose>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Trabalho da marmoraria em tamanho expandido"
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-elegant"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;