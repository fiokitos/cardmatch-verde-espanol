import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import cardMatchImage from "@/assets/cardmatch-credit-card.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background-subtle font-poppins">
      <Header />
      
      {/* Main Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8 leading-tight">
          Guía completa: Tarjeta de crédito CardMatch BV Libre Cero Anualidad
        </h1>

        {/* Featured Image */}
        <div className="flex justify-center mb-12">
          <img 
            src={cardMatchImage} 
            alt="Tarjeta de crédito CardMatch BV Libre" 
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-foreground mb-8 text-center leading-relaxed">
            Imaginen tener una tarjeta de crédito que no cobra anualidad en ningún momento de su vida y además ofrece una cuenta digital completa.
          </p>

          {/* First CTA */}
          <div className="text-center mb-12">
            <CTAButton>
              QUIERO ESTA TARJETA
            </CTAButton>
          </div>

          {/* Content Section */}
          <h2 className="text-3xl font-bold text-primary mb-6">
            Por qué considerar la Tarjeta CardMatch BV Libre?
          </h2>

          <p className="text-lg text-foreground mb-8 leading-relaxed">
            Si buscas una opción de tarjeta sin tarifas escondidas y que te ofrezca más libertad en tu día a día, la CardMatch BV Libre puede ser la elección ideal. Mira algunos de los principales diferenciales:
          </p>

          {/* Benefits List */}
          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                <Check size={16} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Anualidad cero de verdad
                </h3>
                <p className="text-foreground leading-relaxed">
                  Nada de tasas disfrazadas o cobros futuros — es gratuito para siempre.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                <Check size={16} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Pago directo con la tarjeta
                </h3>
                <p className="text-foreground leading-relaxed">
                  Incluso sin saldo en tu cuenta, puedes usar el límite de la tarjeta para hacer un Pix en el momento.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                <Check size={16} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Cuenta digital completa
                </h3>
                <p className="text-foreground leading-relaxed">
                  Control total de tu dinero desde la app, con seguridad y facilidad.
                </p>
              </div>
            </div>
          </div>

          {/* Second CTA */}
          <div className="text-center">
            <CTAButton>
              QUIERO ESTA TARJETA
            </CTAButton>
          </div>
        </article>
      </main>

      {/* FAQ Section */}
      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Preguntas Frecuentes (FAQ)
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="item-1" 
              className="border border-border rounded-lg px-6 py-2 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:text-secondary">
                ¿Cómo funciona el proceso de solicitud de la tarjeta de crédito CardMatch?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed pt-2">
                El proceso es simple, rápido y 100% online. Solo necesitas completar la solicitud en nuestro sitio web con tus datos personales y de contacto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-2" 
              className="border border-border rounded-lg px-6 py-2 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:text-secondary">
                ¿Cuánto tiempo tarda la aprobación de la tarjeta?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed pt-2">
                La aprobación de la tarjeta generalmente se realiza en pocos minutos. Recibirás una notificación por correo electrónico con el resultado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-3" 
              className="border border-border rounded-lg px-6 py-2 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:text-secondary">
                ¿Cuáles son los requisitos para calificar para la tarjeta de crédito?
              </AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed pt-2">
                Los requisitos básicos incluyen ser mayor de edad, tener una identificación válida y comprobar tu residencia. Los detalles completos están disponibles en la sección 'Términos de Uso'.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
