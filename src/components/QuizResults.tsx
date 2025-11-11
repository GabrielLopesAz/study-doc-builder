import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Award, Target } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizResults = ({ score, totalQuestions, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return {
      title: "Excelente! 🎉",
      message: "Você domina o conteúdo CIS ITSM!",
      color: "text-success"
    };
    if (percentage >= 70) return {
      title: "Muito Bom! 👏",
      message: "Você está no caminho certo!",
      color: "text-primary"
    };
    if (percentage >= 50) return {
      title: "Bom trabalho! 💪",
      message: "Continue estudando para melhorar!",
      color: "text-warning"
    };
    return {
      title: "Continue Praticando! 📚",
      message: "A prática leva à perfeição!",
      color: "text-destructive"
    };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <Card className="p-8 md:p-12 shadow-[var(--shadow-card)] border-border">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-6 rounded-full">
                <Trophy className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className={`text-3xl md:text-4xl font-bold ${performance.color}`}>
              {performance.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {performance.message}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Pontuação</p>
              <p className="text-3xl font-bold text-foreground">{score}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Aproveitamento</p>
              <p className="text-3xl font-bold text-foreground">{percentage}%</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Total de Questões</p>
              <p className="text-3xl font-bold text-foreground">{totalQuestions}</p>
            </div>
          </div>

          <div className="pt-6">
            <Button
              onClick={onRestart}
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-primary/80 text-lg px-8"
            >
              <RotateCcw className="w-5 h-5" />
              Reiniciar Simulado
            </Button>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              "Se esse simulado te ajudar, como me ajudou, compartilhe com outros profissionais. 
              Dividir o conhecimento é sinal de nobreza e maturidade."
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
