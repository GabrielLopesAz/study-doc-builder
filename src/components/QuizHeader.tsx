import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

export const QuizHeader = ({ currentQuestion, totalQuestions, score }: QuizHeaderProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-primary to-primary/80 p-3 rounded-xl shadow-lg">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Simulado CIS ITSM</h1>
            <p className="text-sm text-muted-foreground">ServiceNow Certification Practice</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Sua pontuação</p>
          <p className="text-2xl font-bold text-primary">{score}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Questão {currentQuestion} de {totalQuestions}</span>
          <span>{Math.round(progress)}% completo</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};
