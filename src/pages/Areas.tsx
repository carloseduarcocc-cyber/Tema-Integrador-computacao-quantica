import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

const Areas = () => {
  const careers = [
    {
      title: "Cientista de Computação Quântica",
      description: "Desenvolve algoritmos quânticos e pesquisa novas aplicações da tecnologia.",
    },
    {
      title: "Engenheiro de Hardware Quântico",
      description: "Projeta e constrói sistemas de computadores quânticos físicos.",
    },
    {
      title: "Desenvolvedor de Software Quântico",
      description: "Cria aplicações práticas usando linguagens e frameworks quânticos.",
    },
    {
      title: "Pesquisador em Física Quântica",
      description: "Estuda os fundamentos teóricos da mecânica quântica aplicada à computação.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Áreas de Atuação
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diversas carreiras promissoras aguardam profissionais na computação quântica
          </p>
        </div>

        {/* Career Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Principais Carreiras
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {careers.map((career, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {career.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {career.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Desafios Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            A computação quântica é uma área fascinante, mas traz desafios únicos que profissionais enfrentam diariamente
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🧮",
                title: "Complexidade Técnica",
                description: "Necessidade de dominar física quântica avançada, álgebra linear e matemática complexa simultaneamente."
              },
              {
                icon: "⚡",
                title: "Tecnologia Emergente",
                description: "Trabalhar com hardware instável e em constante evolução, com limitações técnicas frequentes."
              },
              {
                icon: "🔬",
                title: "Escassez de Recursos",
                description: "Acesso limitado a computadores quânticos reais para testes, dependendo de simuladores e filas de espera."
              },
              {
                icon: "📊",
                title: "Ruído Quântico",
                description: "Lidar constantemente com erros e interferências que afetam a precisão dos cálculos quânticos."
              },
              {
                icon: "🔧",
                title: "Falta de Padrões",
                description: "Ausência de metodologias consolidadas e ferramentas padronizadas na indústria."
              },
              {
                icon: "📚",
                title: "Curva de Aprendizado",
                description: "Necessidade de atualização constante devido aos avanços rápidos e descobertas frequentes na área."
              },
              {
                icon: "👥",
                title: "Colaboração Interdisciplinar",
                description: "Comunicação efetiva com equipes diversas de física, engenharia e ciência da computação."
              },
              {
                icon: "🎯",
                title: "Expectativas vs. Realidade",
                description: "Gerenciar expectativas sobre as limitações atuais da tecnologia e prazos de desenvolvimento realistas."
              }
            ].map((challenge, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 group"
              >
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-secondary transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Qualifications and Certifications Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Qualificações e Certificações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            Formação, certificações e competências essenciais para se destacar na área de computação quântica
          </p>

          <Tabs defaultValue="formacao" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="formacao">Formação Acadêmica</TabsTrigger>
              <TabsTrigger value="certificacoes">Certificações</TabsTrigger>
              <TabsTrigger value="competencias">Competências</TabsTrigger>
            </TabsList>

            <TabsContent value="formacao" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🎓",
                    title: "Graduação em Física",
                    description: "Base fundamental em mecânica quântica, física teórica e experimental."
                  },
                  {
                    icon: "💻",
                    title: "Ciência da Computação",
                    description: "Conhecimento em algoritmos, estruturas de dados e programação avançada."
                  },
                  {
                    icon: "⚙️",
                    title: "Engenharia Elétrica",
                    description: "Compreensão de sistemas eletrônicos e hardware quântico."
                  },
                  {
                    icon: "📐",
                    title: "Matemática Aplicada",
                    description: "Domínio de álgebra linear, cálculo avançado e teoria dos números."
                  },
                  {
                    icon: "🔬",
                    title: "Mestrado/Doutorado",
                    description: "Especialização em computação quântica, física quântica ou áreas correlatas."
                  },
                  {
                    icon: "📚",
                    title: "Pós-Graduação",
                    description: "Especializações em quantum computing, quantum information ou quantum algorithms."
                  }
                ].map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificacoes" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🔵",
                    title: "IBM Quantum Developer",
                    description: "Certificação oficial em Qiskit e desenvolvimento de circuitos quânticos na plataforma IBM.",
                    provider: "IBM"
                  },
                  {
                    icon: "🟢",
                    title: "Microsoft Azure Quantum",
                    description: "Certificação em Q# e desenvolvimento de aplicações quânticas no Azure.",
                    provider: "Microsoft"
                  },
                  {
                    icon: "🔴",
                    title: "Google Quantum AI",
                    description: "Especialização em Cirq e algoritmos quânticos no Google Quantum AI.",
                    provider: "Google"
                  },
                  {
                    icon: "🎓",
                    title: "MIT xPRO Quantum",
                    description: "Programa executivo em computação quântica e aplicações práticas.",
                    provider: "MIT"
                  },
                  {
                    icon: "⚛️",
                    title: "Quantum Computing Fundamentals",
                    description: "Certificação em fundamentos de computação quântica e algoritmos básicos.",
                    provider: "Coursera/edX"
                  },
                  {
                    icon: "🤖",
                    title: "AI+ Quantum Computing",
                    description: "Certificação em machine learning quântico e aplicações de IA.",
                    provider: "AI CERTs"
                  }
                ].map((cert, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {cert.provider}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {cert.description}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="competencias" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span>💻</span> Linguagens
                  </h3>
                  {[
                    "Python (Qiskit, Cirq)",
                    "Q# (Microsoft)",
                    "Julia",
                    "C++",
                    "MATLAB"
                  ].map((item, index) => (
                    <Card key={index} className="p-4 bg-card border-border hover:border-primary/30 transition-colors">
                      <p className="text-muted-foreground">{item}</p>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span>📐</span> Matemática
                  </h3>
                  {[
                    "Álgebra Linear",
                    "Teoria dos Grupos",
                    "Cálculo Avançado",
                    "Probabilidade",
                    "Teoria da Informação"
                  ].map((item, index) => (
                    <Card key={index} className="p-4 bg-card border-border hover:border-secondary/30 transition-colors">
                      <p className="text-muted-foreground">{item}</p>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span>🎯</span> Especialidades
                  </h3>
                  {[
                    "Algoritmos Quânticos",
                    "Correção de Erros",
                    "Criptografia Quântica",
                    "Machine Learning Quântico",
                    "Otimização Quântica"
                  ].map((item, index) => (
                    <Card key={index} className="p-4 bg-card border-border hover:border-accent/30 transition-colors">
                      <p className="text-muted-foreground">{item}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default Areas;
