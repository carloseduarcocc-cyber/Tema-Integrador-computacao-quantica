import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const WhatIs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            O Que É Computação Quântica?
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-lg mb-8">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            A computação quântica é uma área revolucionária que utiliza os princípios da mecânica quântica 
            para processar informações de maneiras impossíveis para computadores clássicos. Enquanto 
            computadores tradicionais usam bits (0 ou 1), computadores quânticos utilizam qubits, que podem 
            existir em múltiplos estados simultaneamente através de um fenômeno chamado superposição.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Essa tecnologia promete resolver problemas complexos em áreas como criptografia, descoberta de 
            medicamentos, otimização de sistemas, inteligência artificial e modelagem molecular em uma 
            fração do tempo necessário para sistemas convencionais.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Empresas como IBM, Google, Microsoft e startups especializadas estão investindo bilhões no 
            desenvolvimento de computadores quânticos práticos, criando uma demanda crescente por 
            profissionais qualificados nesta área emergente.
          </p>
        </Card>

        {/* Princípios Fundamentais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Princípios Fundamentais
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "⚛️",
                title: "Qubits",
                description: "Unidades fundamentais de informação quântica que podem existir em estados de superposição, permitindo processamento paralelo massivo."
              },
              {
                icon: "🔀",
                title: "Superposição",
                description: "Capacidade de um qubit estar em múltiplos estados simultaneamente, exponencializando o poder computacional."
              },
              {
                icon: "🔗",
                title: "Entrelaçamento",
                description: "Fenômeno onde qubits se tornam correlacionados, permitindo que a medição de um afete instantaneamente o outro."
              },
              {
                icon: "📊",
                title: "Interferência Quântica",
                description: "Manipulação das amplitudes de probabilidade para amplificar respostas corretas e cancelar incorretas."
              }
            ].map((principle, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Aplicações */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Aplicações Revolucionárias
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔐",
                title: "Criptografia",
                description: "Quebra de criptografias atuais e criação de sistemas de segurança inquebráveis."
              },
              {
                icon: "💊",
                title: "Descoberta de Medicamentos",
                description: "Simulação molecular precisa para acelerar o desenvolvimento de novos fármacos."
              },
              {
                icon: "🤖",
                title: "Inteligência Artificial",
                description: "Treinamento de modelos de IA exponencialmente mais rápidos e precisos."
              },
              {
                icon: "💰",
                title: "Otimização Financeira",
                description: "Análise de portfólios e gestão de riscos em tempo real."
              },
              {
                icon: "🌍",
                title: "Modelagem Climática",
                description: "Previsões climáticas ultra-precisas para combater mudanças climáticas."
              },
              {
                icon: "🚗",
                title: "Logística",
                description: "Otimização de rotas e cadeias de suprimento globais."
              }
            ].map((application, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 group"
              >
                <div className="text-5xl mb-4 text-center">{application.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-secondary transition-colors text-center">
                  {application.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {application.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatIs;
