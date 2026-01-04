import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Clock, Utensils, Dumbbell, BookOpen, Star } from "lucide-react"
import { Timeline } from "@/components/timeline"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
            Método Simples e Comprovado
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Emagreça de Forma Realista, Sem Dietas Radicais
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Transforme sua rotina com um método simples que não exige dietas extremas ou horas intermináveis na academia
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="https://pay.kiwify.com.br/lOVr8g6">Quero começar agora</Link>
          </Button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Você já se sentiu assim?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Falta de tempo</h3>
                  <p className="text-sm text-muted-foreground">
                    Rotina corrida e sem tempo para cozinhar ou ir à academia
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dietas fracassadas</h3>
                  <p className="text-sm text-muted-foreground">
                    Já tentou várias dietas mas sempre volta ao peso anterior
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sem motivação</h3>
                  <p className="text-sm text-muted-foreground">Desanima fácil e não consegue manter a consistência</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            A Solução é Mais Simples do Que Você Imagina
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Um método em 3 passos que se encaixa na sua rotina
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Alimentação Consciente</h3>
              <p className="text-muted-foreground">
                Receitas simples e saborosas que você pode fazer em menos de 30 minutos
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Exercícios Práticos</h3>
              <p className="text-muted-foreground">Treinos curtos de 20-30 minutos que cabem na sua rotina</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Hábitos Sustentáveis</h3>
              <p className="text-muted-foreground">Crie uma rotina que você consegue manter para sempre</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">O Que Você Vai Receber</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-book Completo</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Guia alimentar com receitas fáceis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Plano de refeições semanal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lista de compras simplificada</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Dumbbell className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Treinos em Casa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Exercícios sem equipamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Treinos de 20-30 minutos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Planejamento semanal</span>
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Módulo avançado (após 7 dias)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Programa de musculação completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Progressão de cargas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Técnicas para lidar com a fome</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentoria Grátis Bonus Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
            <div className="text-center mb-8">
              <div className="inline-block rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold mb-4">
                BÔNUS EXCLUSIVO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Mentoria Gratuita de 1 Mês</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Além do e-book completo, você também recebe acesso a uma mentoria de 30 dias
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Apoio Contínuo</h3>
                <p className="text-sm text-muted-foreground">
                  Tire suas dúvidas e receba suporte durante toda sua jornada
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Orientação Educacional</h3>
                <p className="text-sm text-muted-foreground">
                  Apoio para aplicar o método em sua rotina e tirar duvidas sobre o conteúdo
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Acompanhamento de aplicação</h3>
                <p className="text-sm text-muted-foreground">Suporte para manter constância e organização durante o processo</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-primary">
                <span className="text-foreground">GRÁTIS por tempo limitado</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-4 py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">O Que Dizem Nossos Leitores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm mb-4 text-muted-foreground">
                "Finalmente encontrei um método que funciona! Perdi 8kg em 3 meses sem sofrimento."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-sm">Maria Silva</p>
                  <p className="text-xs text-muted-foreground">São Paulo, SP</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm mb-4 text-muted-foreground">
                "As receitas são deliciosas e os treinos curtos cabem perfeitamente na minha rotina."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-sm">João Santos</p>
                  <p className="text-xs text-muted-foreground">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm mb-4 text-muted-foreground">
                "Mudou minha relação com a comida. Agora sei que é possível emagrecer de forma saudável."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-sm">Ana Costa</p>
                  <p className="text-xs text-muted-foreground">Belo Horizonte, MG</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="px-4 py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Comece Sua Transformação Hoje</h2>
          <p className="text-lg mb-8 opacity-90">Acesso imediato ao e-book completo com todos os materiais</p>
          <div className="bg-primary-foreground/10 rounded-2xl p-8 mb-8">
            <div className="mb-4">
              <span className="text-xl line-through opacity-70">R$ 129,90</span>
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-2">R$ 29,90</div>
            <p className="text-sm opacity-90">Pagamento único • Acesso vitalício</p>
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="https://pay.kiwify.com.br/lOVr8g6">Quero começar agora</Link>
          </Button>
          <p className="text-sm mt-6 opacity-75">Garantia de 7 dias • 100% seguro</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>O método funciona para iniciantes?</AccordionTrigger>
              <AccordionContent>
                Sim! O método foi desenvolvido especialmente para pessoas que estão começando ou que já tentaram
                emagrecer antes sem sucesso. Tudo é explicado de forma simples e progressiva.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Preciso de equipamentos para os treinos?</AccordionTrigger>
              <AccordionContent>
                Não é necessário. Oferecemos treinos completos que você pode fazer em casa sem nenhum equipamento.
                Também incluímos opções para quem tem acesso a academia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quanto tempo leva para ver resultados?</AccordionTrigger>
              <AccordionContent>
                Os primeiros resultados aparecem já nas primeiras semanas, mas o mais importante é que você está criando
                hábitos sustentáveis para uma transformação duradoura.
              </AccordionContent>
            </AccordionItem>
            
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Posso pedir reembolso?</AccordionTrigger>
              <AccordionContent>
                Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito,
                devolvemos 100% do seu dinheiro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-muted/30 border-t">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Transforme Sua Vida Hoje</h3>
            <p className="text-muted-foreground">Junte-se a milhares de pessoas que já mudaram seus hábitos</p>
          </div>
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Aviso Legal:</strong> Este e-book tem caráter educacional e informativo. Os resultados podem
              variar de pessoa para pessoa. Consulte um profissional de saúde antes de iniciar qualquer programa de
              emagrecimento.
            </p>
            <p className="pt-4">
              <strong>Contato:</strong> metodobasesuporte@gmail.com
            </p>
            <p className="pt-4 text-xs">© 2026 Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
