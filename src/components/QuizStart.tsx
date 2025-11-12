import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, List, PlusCircle } from "lucide-react";

interface QuizStartProps {
  onStart: (questionCount: number) => void;
  onViewQuestions: () => void;
  onAddQuestion: () => void;
  totalQuestions: number;
}

export const QuizStart = ({ onStart, onViewQuestions, onAddQuestion, totalQuestions }: QuizStartProps) => {
  const questionOptions = [
    { count: 60, label: "60 Questões", description: "Simulado Rápido", time: "~45 min" },
    { count: 120, label: "120 Questões", description: "Simulado Padrão", time: "~90 min" },
    { count: 180, label: "180 Questões", description: "Simulado Completo", time: "~135 min" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-6 md:py-12 px-3 sm:px-4 md:px-6 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-4 md:p-6 rounded-full">
                <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Simulado CIS ITSM
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-2 px-2">
            ServiceNow Certification Practice
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground italic max-w-2xl mx-auto px-4">
            "Se esse simulado te ajudar, como me ajudou, compartilhe com outros profissionais. 
            Dividir o conhecimento é sinal de nobreza e maturidade."
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <Button
            onClick={onViewQuestions}
            variant="outline"
            className="gap-2 h-auto py-3 md:py-4"
            size="lg"
          >
            <List className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-sm md:text-base">Ver Todas as Questões</div>
              <div className="text-xs text-muted-foreground">
                {totalQuestions} questões disponíveis
              </div>
            </div>
          </Button>
          <Button
            onClick={onAddQuestion}
            variant="outline"
            className="gap-2 h-auto py-3 md:py-4"
            size="lg"
          >
            <PlusCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-sm md:text-base">Adicionar Nova Questão</div>
              <div className="text-xs text-muted-foreground">
                Expanda o banco de questões
              </div>
            </div>
          </Button>
        </div>

        <Card className="p-4 sm:p-6 md:p-8 shadow-[var(--shadow-card)] border-border">
          <div className="space-y-4 md:space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Escolha o Número de Questões
              </h2>
              <p className="text-sm md:text-base text-muted-foreground px-2">
                Selecione quantas questões deseja responder neste simulado
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-2 md:pt-4">
              {questionOptions.map((option) => (
                <Card
                  key={option.count}
                  className="p-4 md:p-6 border-2 hover:border-primary transition-all cursor-pointer group hover:shadow-lg active:scale-95"
                  onClick={() => onStart(option.count)}
                >
                  <div className="space-y-3 md:space-y-4">
                    <div className="text-center space-y-1 md:space-y-2">
                      <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                        {option.count}
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        {option.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {option.description}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{option.time}</span>
                    </div>
                    <Button
                      className="w-full gap-2 bg-gradient-to-r from-primary to-primary/80 text-sm md:text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        onStart(option.count);
                      }}
                    >
                      <Play className="w-4 h-4" />
                      Iniciar
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="pt-4 md:pt-6 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-center text-sm">
                <div className="space-y-1">
                  <div className="font-semibold text-foreground text-sm md:text-base">📝 Questões Embaralhadas</div>
                  <div className="text-xs text-muted-foreground">
                    Ordem das opções aleatória
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground text-sm md:text-base">✓ Feedback Instantâneo</div>
                  <div className="text-xs text-muted-foreground">
                    Veja seus erros e acertos
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground text-sm md:text-base">📊 Pontuação Final</div>
                  <div className="text-xs text-muted-foreground">
                    Acompanhe seu progresso
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
