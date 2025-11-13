import { useState, useEffect } from "react";
import { QuizStart } from "@/components/QuizStart";
import { QuizHeader } from "@/components/QuizHeader";
import { QuestionCard } from "@/components/QuestionCard";
import { QuizNavigation } from "@/components/QuizNavigation";
import { QuizResults } from "@/components/QuizResults";
import { QuestionsList } from "@/components/QuestionsList";
import { AddQuestionForm } from "@/components/AddQuestionForm";
import { Question, getRandomQuestions, getAllQuestions, addCustomQuestion } from "@/data/questions";
import { shuffleArray } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type ViewMode = "start" | "quiz" | "results" | "questionsList" | "addQuestion";

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("start");
  const [allAvailableQuestions, setAllAvailableQuestions] = useState<Question[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  // Carregar questões na inicialização
  useEffect(() => {
    setAllAvailableQuestions(getAllQuestions());
  }, []);

  // Recarregar questões quando voltar para o início
  useEffect(() => {
    if (viewMode === "start") {
      setAllAvailableQuestions(getAllQuestions());
    }
  }, [viewMode]);

  // Função para embaralhar as opções de uma questão
  const shuffleQuestionOptions = (question: Question): Question => {
    // Guarda as opções originais e suas respostas corretas
    const originalOptions = [...question.options];
    const shuffledOptions = shuffleArray(question.options);
    
    // Mapeia as novas posições das respostas corretas
    const newCorrectAnswers = question.correctAnswers.map(correctIndex => {
      const originalOption = originalOptions[correctIndex];
      return shuffledOptions.indexOf(originalOption);
    });

    return {
      ...question,
      options: shuffledOptions,
      correctAnswers: newCorrectAnswers,
      originalOptions: originalOptions
    };
  };

  const handleStart = (questionCount: number, sequential: boolean = false) => {
    // Pega questões (aleatórias ou sequenciais) e embaralha as opções de cada uma
    const selectedQuestions = getRandomQuestions(questionCount, sequential);
    const shuffledQuestions = selectedQuestions.map(q => shuffleQuestionOptions(q));
    
    setQuestions(shuffledQuestions);
    setViewMode("quiz");
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setScore(0);
  };

  const handleViewQuestions = () => {
    setViewMode("questionsList");
  };

  const handleAddQuestion = () => {
    setViewMode("addQuestion");
  };

  const handleSaveQuestion = (question: Question) => {
    addCustomQuestion(question);
    setAllAvailableQuestions(getAllQuestions());
  };

  const handleBackToStart = () => {
    setViewMode("start");
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (answers: number[]) => {
    setSelectedAnswers(answers);
  };

  const handleCheck = () => {
    const correctAnswers = currentQuestion.correctAnswers.sort();
    const userAnswers = selectedAnswers.sort();
    
    const isCorrect = 
      correctAnswers.length === userAnswers.length &&
      correctAnswers.every((answer, index) => answer === userAnswers[index]);

    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correto! ✓",
        description: "Parabéns, você acertou!",
        className: "bg-success text-success-foreground",
      });
    } else {
      toast({
        title: "Incorreto ✗",
        description: "Continue estudando!",
        variant: "destructive",
      });
    }

    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
    } else {
      setViewMode("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
    }
  };

  const handleRestart = () => {
    setViewMode("start");
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setScore(0);
  };

  // Tela de lista de questões
  if (viewMode === "questionsList") {
    return (
      <QuestionsList
        questions={allAvailableQuestions}
        onBack={handleBackToStart}
      />
    );
  }

  // Tela de adicionar questão
  if (viewMode === "addQuestion") {
    return (
      <AddQuestionForm
        onBack={handleBackToStart}
        onSave={handleSaveQuestion}
        existingIds={allAvailableQuestions.map(q => q.id)}
      />
    );
  }

  // Tela inicial de seleção
  if (viewMode === "start") {
    return (
      <QuizStart
        onStart={handleStart}
        onViewQuestions={handleViewQuestions}
        onAddQuestion={handleAddQuestion}
        totalQuestions={allAvailableQuestions.length}
      />
    );
  }

  // Tela de resultados
  if (viewMode === "results") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-8 px-4">
        <QuizResults
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // Tela do questionário
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-4 sm:py-6 md:py-8 px-3 sm:px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <QuizHeader
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          score={score}
        />
        
        <QuestionCard
          key={currentQuestionIndex}
          question={currentQuestion}
          selectedAnswers={selectedAnswers}
          onAnswerChange={handleAnswerChange}
          showFeedback={showFeedback}
        />

        <QuizNavigation
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswers={selectedAnswers}
          showFeedback={showFeedback}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onCheck={handleCheck}
        />
      </div>
    </div>
  );
};

export default Index;
