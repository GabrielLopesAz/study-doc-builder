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
    <div className="w-full mb-4 md:mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-3 md:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-gradient-to-br from-primary to-primary/80 p-2 sm:p-3 rounded-xl shadow-lg flex-shrink-0">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Simulado CIS ITSM</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">ServiceNow Certification Practice</p>
          </div>
        </div>
        <div className="text-left sm:text-right self-start sm:self-auto">
          <p className="text-xs sm:text-sm text-muted-foreground">Sua pontuação</p>
          <p className="text-xl sm:text-2xl font-bold text-primary">{score}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
          <span>Questão {currentQuestion} de {totalQuestions}</span>
          <span className="hidden sm:inline">{Math.round(progress)}% completo</span>
          <span className="sm:hidden">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};
