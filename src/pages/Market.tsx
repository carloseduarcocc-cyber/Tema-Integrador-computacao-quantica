import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Market = () => {
  const salaryData = [
    { level: "Júnior", salary: "R$ 8.000 - R$ 15.000" },
    { level: "Pleno", salary: "R$ 15.000 - R$ 30.000" },
    { level: "Sênior", salary: "R$ 30.000 - R$ 60.000+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Mercado de Trabalho
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perspectivas salariais e principais empresas contratantes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Salary Data */}
          <Card className="p-6 md:p-8 bg-card border-border">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Faixas Salariais no Brasil</h2>
            <div className="space-y-4">
              {salaryData.map((data, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 md:p-6 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all gap-3"
                >
                  <div>
                    <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                      {data.level}
                    </Badge>
                    <p className="text-xl md:text-2xl font-bold text-foreground">{data.salary}</p>
                    <p className="text-sm text-muted-foreground mt-1">por mês</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Future Perspectives */}
            <div className="mt-8 p-4 md:p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>📈</span> Perspectivas para os Próximos Anos
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span><strong className="text-foreground">2025-2027:</strong> Crescimento estimado de 40-60% nos salários devido à alta demanda e escassez de profissionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span><strong className="text-foreground">2028-2030:</strong> Consolidação da área com salários competitivos comparáveis aos de cientistas de dados sênior e arquitetos de IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span><strong className="text-foreground">Tendência:</strong> Profissionais com experiência prática podem alcançar remunerações acima de R$ 80.000/mês até 2030</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Companies Hiring */}
          <Card className="p-6 md:p-8 bg-card border-border">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Principais Empresas Contratantes</h2>
            
            <div className="space-y-3 mb-6">
              {[
                {
                  name: "IBM Brasil",
                  category: "Tech Global",
                  description: "Líder em computação quântica com acesso ao IBM Quantum Network"
                },
                {
                  name: "Google Research",
                  category: "Tech Global",
                  description: "Desenvolvimento de processadores quânticos e algoritmos avançados"
                },
                {
                  name: "Microsoft",
                  category: "Tech Global",
                  description: "Azure Quantum e desenvolvimento de linguagem Q#"
                },
                {
                  name: "Amazon (AWS)",
                  category: "Tech Global",
                  description: "Amazon Braket - plataforma de computação quântica na nuvem"
                },
                {
                  name: "Embraer",
                  category: "Aeroespacial",
                  description: "Otimização de designs aeroespaciais usando computação quântica"
                },
                {
                  name: "Petrobras",
                  category: "Energia",
                  description: "Aplicações em modelagem molecular e otimização de processos"
                },
                {
                  name: "Banco Itaú",
                  category: "Financeiro",
                  description: "Pesquisa em criptografia quântica e otimização de portfólios"
                },
                {
                  name: "Startups Quânticas",
                  category: "Inovação",
                  description: "Zapata AI, IonQ, Rigetti e empresas nacionais emergentes"
                }
              ].map((company, index) => (
                <div 
                  key={index}
                  className="p-3 md:p-4 rounded-lg border border-border hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-secondary transition-colors">
                      {company.name}
                    </h3>
                    <Badge variant="outline" className="text-xs self-start">
                      {company.category}
                    </Badge>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {company.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <p className="text-xs md:text-sm text-muted-foreground">
                <strong className="text-foreground">💡 Dica:</strong> Networking em conferências como Q2B, IEEE Quantum Week e grupos locais de computação quântica podem abrir portas para oportunidades nessas empresas.
              </p>
            </div>
          </Card>
        </div>

        {/* ODS 9 Section */}
        <section className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Contribuição para o ODS 9
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Como a Computação Quântica impulsiona a Indústria, Inovação e Infraestrutura
            </p>
          </div>

          <Card className="p-6 md:p-12 bg-card border-border shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="text-4xl md:text-5xl">🏭</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  ODS 9: Indústria, Inovação e Infraestrutura
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A computação quântica representa um avanço revolucionário que contribui diretamente para os objetivos do ODS 9 da ONU, 
                  promovendo infraestrutura resiliente, industrialização inclusiva e sustentável, e fomentando a inovação tecnológica.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: "⚡",
                title: "Otimização de Redes Elétricas",
                description: "Algoritmos quânticos estão sendo aplicados para otimizar a distribuição de energia em smart grids, reduzindo desperdícios e melhorando a eficiência energética.",
                example: "A EDP Energias do Brasil utiliza computação quântica para otimizar o balanceamento de carga em suas redes de distribuição, resultando em 15% de economia energética."
              },
              {
                icon: "🔬",
                title: "Descoberta de Novos Materiais",
                description: "Simulações quânticas aceleram o desenvolvimento de materiais avançados para infraestrutura sustentável, como supercondutores e baterias de alta eficiência.",
                example: "A IBM e a Daimler AG usam computadores quânticos para simular baterias de lítio-enxofre, prometendo aumentar a autonomia de veículos elétricos em 300%."
              },
              {
                icon: "🏗️",
                title: "Engenharia de Estruturas",
                description: "Otimização quântica permite criar designs estruturais mais eficientes, reduzindo materiais necessários e aumentando a durabilidade de infraestruturas.",
                example: "A Airbus utiliza algoritmos quânticos da D-Wave para otimizar o design de asas de aviões, reduzindo peso em 25% e melhorando a eficiência de combustível."
              },
              {
                icon: "🚦",
                title: "Gestão de Tráfego Urbano",
                description: "Sistemas quânticos processam dados de trânsito em tempo real para otimizar semáforos, reduzir congestionamentos e emissões de carbono.",
                example: "A cidade de Los Angeles, em parceria com a Volkswagen, implementou um sistema piloto de otimização de tráfego quântico que reduziu o tempo de viagem em 20%."
              },
              {
                icon: "💊",
                title: "Desenvolvimento de Medicamentos",
                description: "Simulações moleculares quânticas aceleram a descoberta de novos fármacos, democratizando o acesso à saúde e fortalecendo a infraestrutura de saúde pública.",
                example: "A Roche utiliza computação quântica para simular interações proteína-ligante, acelerando em 100x o processo de descoberta de medicamentos para Alzheimer."
              },
              {
                icon: "🌾",
                title: "Agricultura de Precisão",
                description: "Otimização quântica de recursos agrícolas, incluindo irrigação, uso de fertilizantes e logística de distribuição de alimentos.",
                example: "A startup brasileira Agrosmart está explorando algoritmos quânticos para otimizar o uso de água na agricultura, com potencial de redução de 30% no desperdício hídrico."
              },
              {
                icon: "🔐",
                title: "Segurança de Infraestruturas Críticas",
                description: "Criptografia quântica garante comunicações ultra-seguras para infraestruturas essenciais como redes elétricas, sistemas bancários e telecomunicações.",
                example: "O sistema de distribuição quântica de chaves (QKD) foi implementado entre Pequim e Xangai, criando uma rede de comunicação à prova de hackeamento de 2.000 km."
              },
              {
                icon: "♻️",
                title: "Economia Circular",
                description: "Otimização de cadeias de reciclagem e processos industriais para reduzir resíduos e promover a sustentabilidade na manufatura.",
                example: "A BASF está usando computação quântica para otimizar processos de reciclagem química de plásticos, aumentando a taxa de recuperação de materiais em 40%."
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs md:text-sm text-foreground/90">
                    <strong className="text-primary">Exemplo Real:</strong> {item.example}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Impact Summary */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground text-center">
              Impacto Global Esperado
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$850B</div>
                <p className="text-xs md:text-sm text-muted-foreground">Valor de mercado esperado em 2040</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-xs md:text-sm text-muted-foreground">Redução no tempo de desenvolvimento de novos produtos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10M+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Empregos criados globalmente até 2035</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Market;
