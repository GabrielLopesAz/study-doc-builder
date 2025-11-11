import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Play } from "lucide-react";

interface QuizStartProps {
  onStart: (questionCount: number) => void;
}

export const QuizStart = ({ onStart }: QuizStartProps) => {
  const questionOptions = [
    { count: 60, label: "60 Questões", description: "Simulado Rápido", time: "~45 min" },
    { count: 120, label: "120 Questões", description: "Simulado Padrão", time: "~90 min" },
    { count: 180, label: "180 Questões", description: "Simulado Completo", time: "~135 min" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 rounded-full">
                <BookOpen className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simulado CIS ITSM
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            ServiceNow Certification Practice
          </p>
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            "Se esse simulado te ajudar, como me ajudou, compartilhe com outros profissionais. 
            Dividir o conhecimento é sinal de nobreza e maturidade."
          </p>
        </div>

        <Card className="p-8 shadow-[var(--shadow-card)] border-border">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Escolha o Número de Questões
              </h2>
              <p className="text-muted-foreground">
                Selecione quantas questões deseja responder neste simulado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {questionOptions.map((option) => (
                <Card
                  key={option.count}
                  className="p-6 border-2 hover:border-primary transition-all cursor-pointer group hover:shadow-lg"
                  onClick={() => onStart(option.count)}
                >
                  <div className="space-y-4">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
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
                      className="w-full gap-2 bg-gradient-to-r from-primary to-primary/80"
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

            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">📝 Questões Embaralhadas</div>
                  <div className="text-xs text-muted-foreground">
                    Ordem das opções aleatória
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">✓ Feedback Instantâneo</div>
                  <div className="text-xs text-muted-foreground">
                    Veja seus erros e acertos
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">📊 Pontuação Final</div>
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
