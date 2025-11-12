import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswers: number[];
  showFeedback: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onCheck: () => void;
}

export const QuizNavigation = ({
  currentQuestion,
  totalQuestions,
  selectedAnswers,
  showFeedback,
  onPrevious,
  onNext,
  onCheck,
}: QuizNavigationProps) => {
  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = currentQuestion === totalQuestions;
  const hasAnswer = selectedAnswers.length > 0;

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4 md:mt-8">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="gap-2 order-2 sm:order-1"
        size="lg"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="sm:inline">Anterior</span>
      </Button>

      <div className="flex gap-2 order-1 sm:order-2">
        {!showFeedback && (
          <Button
            onClick={onCheck}
            disabled={!hasAnswer}
            className="gap-2 bg-gradient-to-r from-primary to-primary/80 flex-1 sm:flex-initial text-sm sm:text-base"
            size="lg"
          >
            <Check className="w-4 h-4" />
            <span>Verificar</span>
          </Button>
        )}
        {showFeedback && !isLastQuestion && (
          <Button
            onClick={onNext}
            className="gap-2 bg-gradient-to-r from-primary to-primary/80 flex-1 sm:flex-initial text-sm sm:text-base"
            size="lg"
          >
            <span>Próxima</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
        {showFeedback && isLastQuestion && (
          <Button
            onClick={onNext}
            className="gap-2 bg-gradient-to-r from-success to-success/80 flex-1 sm:flex-initial text-sm sm:text-base"
            size="lg"
          >
            <span>Ver Resultado</span>
            <Check className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
