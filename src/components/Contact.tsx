import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 9 9648-6463",
      action: () => window.open('tel:+5555996486463')
    },
    {
      icon: Mail,
      title: "E-mail", 
      content: "marmorariabrummaquinhosdasilva@gmail.com",
      action: () => window.open('mailto:marmorariabrummaquinhosdasilva@gmail.com')
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Avenida São Luís, 786 - Vila Nova",
      action: () => window.open('https://maps.google.com/?q=Avenida+São+Luís+786+Vila+Nova')
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta: 07:30 às 18:30",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/share/1BKU8uZMMg/",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/5555996486463",
      color: "text-green-600"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atendê-lo e transformar seus projetos em realidade. 
              Entre em contato conosco através dos canais abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-gold transition-smooth">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground mb-3">
                          {info.content}
                        </p>
                        {info.action && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={info.action}
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          >
                            {info.title === "Telefone" ? "Ligar Agora" : 
                             info.title === "E-mail" ? "Enviar E-mail" : "Ver no Mapa"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Redes Sociais */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  Nossas Redes Sociais
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <social.icon className={`h-5 w-5 mr-2 ${social.color}`} />
                      {social.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action Principal */}
            <div>
              <Card className="p-8 bg-gradient-gold text-center">
                <div className="mb-6">
                  <MessageCircle className="h-16 w-16 text-accent-foreground mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-accent-foreground mb-4">
                    Solicite seu Orçamento
                  </h3>
                  <p className="text-accent-foreground/80 mb-6">
                    Fale conosco pelo WhatsApp e receba um atendimento personalizado. 
                    Nossa equipe está pronta para esclarecer suas dúvidas e elaborar 
                    um orçamento sob medida para seu projeto.
                  </p>
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-semibold py-4 mb-4"
                  onClick={() => window.open('https://wa.me/5555996486463?text=Olá! Gostaria de solicitar um orçamento para marmoraria.', '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                
                <p className="text-sm text-accent-foreground/70">
                  Resposta rápida garantida durante o horário comercial
                </p>
              </Card>

              {/* Informações Adicionais */}
              <div className="mt-8 space-y-4">
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Por que escolher a Marmoraria Brum Marquinhos?
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Orçamento gratuito e sem compromisso
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Atendimento personalizado e consultoria
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Garantia de qualidade em todos os serviços
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Mais de 15 anos de experiência
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;