import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";
import { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  selectedAnswers: number[];
  onAnswerChange: (answers: number[]) => void;
  showFeedback: boolean;
}

export const QuestionCard = ({ 
  question, 
  selectedAnswers, 
  onAnswerChange, 
  showFeedback 
}: QuestionCardProps) => {
  const handleSingleChoice = (index: number) => {
    onAnswerChange([index]);
  };

  const handleMultipleChoice = (index: number, checked: boolean) => {
    if (checked) {
      onAnswerChange([...selectedAnswers, index]);
    } else {
      onAnswerChange(selectedAnswers.filter(i => i !== index));
    }
  };

  const isCorrect = (index: number) => question.correctAnswers.includes(index);
  const isSelected = (index: number) => selectedAnswers.includes(index);

  const getOptionStyle = (index: number) => {
    if (!showFeedback) return "";
    if (isCorrect(index)) return "border-success bg-success/5";
    if (isSelected(index) && !isCorrect(index)) return "border-destructive bg-destructive/5";
    return "";
  };

  return (
    <Card className="p-4 sm:p-6 md:p-8 shadow-[var(--shadow-card)] border-border">
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-start gap-2 sm:gap-3">
            <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-xs sm:text-sm">
              {question.id}
            </span>
            <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-foreground leading-relaxed break-words">
                {question.questionEn}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
                {question.questionPt}
              </p>
              {question.multipleChoice && (
                <p className="text-xs font-medium text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full inline-block">
                  Escolha {question.correctAnswers.length} opções
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3">
          {question.multipleChoice ? (
            <div className="space-y-2 md:space-y-3">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border-2 transition-all active:scale-[0.99] ${getOptionStyle(index)} ${
                    !showFeedback ? "hover:border-primary/50 hover:bg-primary/5 cursor-pointer" : ""
                  }`}
                >
                  <Checkbox
                    id={`option-${index}`}
                    checked={isSelected(index)}
                    onCheckedChange={(checked) => handleMultipleChoice(index, checked as boolean)}
                    disabled={showFeedback}
                    className="border-2 flex-shrink-0"
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 text-xs sm:text-sm cursor-pointer leading-relaxed break-words min-w-0"
                  >
                    {option}
                  </Label>
                  {showFeedback && isCorrect(index) && (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" />
                  )}
                  {showFeedback && isSelected(index) && !isCorrect(index) && (
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <RadioGroup
              value={selectedAnswers[0]?.toString()}
              onValueChange={(value) => handleSingleChoice(parseInt(value))}
              disabled={showFeedback}
            >
              <div className="space-y-2 md:space-y-3">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border-2 transition-all active:scale-[0.99] ${getOptionStyle(index)} ${
                      !showFeedback ? "hover:border-primary/50 hover:bg-primary/5 cursor-pointer" : ""
                    }`}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      className="border-2 flex-shrink-0"
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 text-xs sm:text-sm cursor-pointer leading-relaxed break-words min-w-0"
                    >
                      {option}
                    </Label>
                    {showFeedback && isCorrect(index) && (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" />
                    )}
                    {showFeedback && isSelected(index) && !isCorrect(index) && (
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </RadioGroup>
          )}
        </div>
      </div>
    </Card>
  );
};
