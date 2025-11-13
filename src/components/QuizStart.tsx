import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus, List, Shuffle, ListOrdered } from "lucide-react";
import { useState } from "react";

interface QuizStartProps {
  onStart: (questionCount: number, sequential: boolean) => void;
  onViewQuestions: () => void;
  onAddQuestion: () => void;
  totalQuestions: number;
}

export const QuizStart = ({ onStart, onViewQuestions, onAddQuestion, totalQuestions }: QuizStartProps) => {
  const [isSequential, setIsSequential] = useState(false);

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
            <Plus className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <div className="text-left">
              <div className="font-semibold text-sm md:text-base">Adicionar Nova Questão</div>
              <div className="text-xs text-muted-foreground">
                Expanda o banco de questões
              </div>
            </div>
          </Button>
        </div>

        <Card className="p-4 sm:p-6 md:p-8 shadow-[var(--shadow-card)] border-border">
          <CardHeader className="text-center space-y-2 p-0 pb-4 md:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
              Escolha o Modo e Número de Questões
            </CardTitle>
            <CardDescription className="text-sm md:text-base text-muted-foreground px-2">
              Modo aleatório embaralha as questões. Modo sequencial mantém a ordem para memorização.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-3 sm:p-4 bg-secondary/30 rounded-lg">
              <Button
                onClick={() => setIsSequential(false)}
                variant={!isSequential ? "default" : "outline"}
                size="sm"
                className="flex-1 gap-2 text-xs sm:text-sm"
              >
                <Shuffle className="w-4 h-4" />
                Aleatório
              </Button>
              <Button
                onClick={() => setIsSequential(true)}
                variant={isSequential ? "default" : "outline"}
                size="sm"
                className="flex-1 gap-2 text-xs sm:text-sm"
              >
                <ListOrdered className="w-4 h-4" />
                Sequencial
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <Button
                onClick={() => onStart(60, isSequential)}
                size="lg"
                className="h-auto py-4 sm:py-6 flex flex-col gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm sm:text-base"
              >
                <span className="text-2xl sm:text-3xl font-bold">60</span>
                <span className="text-xs sm:text-sm opacity-90">Questões</span>
              </Button>
              
              <Button
                onClick={() => onStart(90, isSequential)}
                size="lg"
                className="h-auto py-4 sm:py-6 flex flex-col gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm sm:text-base"
              >
                <span className="text-2xl sm:text-3xl font-bold">90</span>
                <span className="text-xs sm:text-sm opacity-90">Questões</span>
              </Button>
              
              <Button
                onClick={() => onStart(120, isSequential)}
                size="lg"
                className="h-auto py-4 sm:py-6 flex flex-col gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm sm:text-base"
              >
                <span className="text-2xl sm:text-3xl font-bold">120</span>
                <span className="text-xs sm:text-sm opacity-90">Questões</span>
              </Button>
              
              <Button
                onClick={() => onStart(150, isSequential)}
                size="lg"
                className="h-auto py-4 sm:py-6 flex flex-col gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm sm:text-base"
              >
                <span className="text-2xl sm:text-3xl font-bold">150</span>
                <span className="text-xs sm:text-sm opacity-90">Questões</span>
              </Button>
              
              <Button
                onClick={() => onStart(180, isSequential)}
                size="lg"
                className="h-auto py-4 sm:py-6 flex flex-col gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm sm:text-base"
              >
                <span className="text-2xl sm:text-3xl font-bold">180</span>
                <span className="text-xs sm:text-sm opacity-90">Questões</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
