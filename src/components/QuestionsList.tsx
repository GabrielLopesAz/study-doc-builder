import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Question } from "@/data/questions";

interface QuestionsListProps {
  questions: Question[];
  onBack: () => void;
}

export const QuestionsList = ({ questions, onBack }: QuestionsListProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-4 sm:py-6 md:py-8 px-3 sm:px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="gap-2 flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="sm:inline">Voltar</span>
          </Button>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground break-words">
              Todas as Questões
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Total: {questions.length} questões disponíveis
            </p>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)]">
          <div className="space-y-3 sm:space-y-4 pr-2 sm:pr-4">
            {questions.map((question, index) => (
              <Card key={question.id} className="p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-3 sm:space-y-4">
                  {/* Cabeçalho */}
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
                    <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                      <Badge variant="outline" className="mt-1 shrink-0 text-xs">
                        #{index + 1}
                      </Badge>
                      <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                        <p className="font-medium text-sm sm:text-base text-foreground leading-relaxed break-words">
                          {question.questionEn}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic break-words">
                          {question.questionPt}
                        </p>
                      </div>
                    </div>
                    {question.multipleChoice && (
                      <Badge variant="secondary" className="shrink-0 text-xs self-start sm:self-auto">
                        Múltipla escolha
                      </Badge>
                    )}
                  </div>

                  {/* Opções */}
                  <div className="space-y-2 pl-0 sm:pl-2">
                    {question.options.map((option, optionIndex) => {
                      const isCorrect = question.correctAnswers.includes(optionIndex);
                      return (
                        <div
                          key={optionIndex}
                          className={`p-2 sm:p-3 rounded-lg border-2 transition-all ${
                            isCorrect
                              ? "border-success bg-success/5"
                              : "border-border bg-muted/30"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {isCorrect && (
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success shrink-0 mt-0.5" />
                            )}
                            <span
                              className={`text-xs sm:text-sm break-words ${
                                isCorrect
                                  ? "font-medium text-success"
                                  : "text-foreground"
                              }`}
                            >
                              {String.fromCharCode(65 + optionIndex)}) {option}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
