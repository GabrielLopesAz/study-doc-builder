import { useState, useEffect } from "react";
import { QuizStart } from "@/components/QuizStart";
import { QuizHeader } from "@/components/QuizHeader";
import { QuestionCard } from "@/components/QuestionCard";
import { QuizNavigation } from "@/components/QuizNavigation";
import { QuizResults } from "@/components/QuizResults";
import { allQuestions, Question, getRandomQuestions } from "@/data/questions";
import { shuffleArray } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

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

  const handleStart = (questionCount: number) => {
    // Pega questões aleatórias e embaralha as opções de cada uma
    const selectedQuestions = getRandomQuestions(questionCount);
    const shuffledQuestions = selectedQuestions.map(q => shuffleQuestionOptions(q));
    
    setQuestions(shuffledQuestions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
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
      setQuizCompleted(true);
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
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  };

  // Tela inicial de seleção
  if (!quizStarted) {
    return <QuizStart onStart={handleStart} />;
  }

  // Tela de resultados
  if (quizCompleted) {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <QuizHeader
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          score={score}
        />
        
        <QuestionCard
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
