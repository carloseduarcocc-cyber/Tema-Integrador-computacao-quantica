import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import quantumHero from "@/assets/quantum-hero.jpg";

const Index = () => {
  const sections = [
    {
      title: "O Que É Computação Quântica?",
      description: "Entenda os fundamentos e princípios da computação quântica, qubits, superposição e suas aplicações revolucionárias.",
      icon: "🔬",
      link: "/o-que-e",
      color: "from-primary to-primary/60"
    },
    {
      title: "Áreas de Atuação",
      description: "Explore as diversas carreiras profissionais, desafios e qualificações necessárias para trabalhar com computação quântica.",
      icon: "💼",
      link: "/areas",
      color: "from-secondary to-secondary/60"
    },
    {
      title: "Mercado de Trabalho",
      description: "Conheça as perspectivas salariais, principais empresas contratantes e o futuro do mercado quântico.",
      icon: "📈",
      link: "/mercado",
      color: "from-accent to-accent/60"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${quantumHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm">
            O Futuro da Tecnologia
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Computação Quântica
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explorando a fronteira entre física quântica e ciência da computação
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/o-que-e">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Começar Exploração
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore o Universo Quântico
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navegue pelas diferentes áreas da computação quântica e descubra um mundo de possibilidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link key={index} to={section.link}>
              <Card className="p-8 h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer">
                <div className="text-6xl mb-6 text-center">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors text-center">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  {section.description}
                </p>
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Explorar →
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Computação Quântica - Explorando o futuro da tecnologia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
