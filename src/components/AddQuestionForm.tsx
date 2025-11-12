import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Plus, Trash2, Save } from "lucide-react";
import { Question } from "@/data/questions";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AddQuestionFormProps {
  onBack: () => void;
  onSave: (question: Question) => void;
  existingIds: number[];
}

export const AddQuestionForm = ({ onBack, onSave, existingIds }: AddQuestionFormProps) => {
  const { toast } = useToast();
  const [questionEn, setQuestionEn] = useState("");
  const [questionPt, setQuestionPt] = useState("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [multipleChoice, setMultipleChoice] = useState(false);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) {
      toast({
        title: "Erro",
        description: "É necessário ter pelo menos 2 opções",
        variant: "destructive",
      });
      return;
    }
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    // Ajustar as respostas corretas se necessário
    setCorrectAnswers(correctAnswers.filter(i => i !== index).map(i => i > index ? i - 1 : i));
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const toggleCorrectAnswer = (index: number) => {
    if (multipleChoice) {
      if (correctAnswers.includes(index)) {
        setCorrectAnswers(correctAnswers.filter(i => i !== index));
      } else {
        setCorrectAnswers([...correctAnswers, index]);
      }
    } else {
      setCorrectAnswers([index]);
    }
  };

  const handleSave = () => {
    // Validações
    if (!questionEn.trim() || !questionPt.trim()) {
      toast({
        title: "Erro",
        description: "Preencha as perguntas em inglês e português",
        variant: "destructive",
      });
      return;
    }

    const filledOptions = options.filter(opt => opt.trim());
    if (filledOptions.length < 2) {
      toast({
        title: "Erro",
        description: "É necessário ter pelo menos 2 opções preenchidas",
        variant: "destructive",
      });
      return;
    }

    if (correctAnswers.length === 0) {
      toast({
        title: "Erro",
        description: "Selecione pelo menos uma resposta correta",
        variant: "destructive",
      });
      return;
    }

    // Criar nova questão
    const newId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
    const newQuestion: Question = {
      id: newId,
      questionEn: questionEn.trim(),
      questionPt: questionPt.trim(),
      options: filledOptions,
      correctAnswers: correctAnswers.sort((a, b) => a - b),
      multipleChoice,
    };

    onSave(newQuestion);

    // Limpar formulário
    setQuestionEn("");
    setQuestionPt("");
    setOptions(["", "", "", ""]);
    setCorrectAnswers([]);
    setMultipleChoice(false);

    toast({
      title: "Sucesso!",
      description: "Questão adicionada com sucesso",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Adicionar Nova Questão
            </h1>
            <p className="text-sm text-muted-foreground">
              Preencha os campos abaixo para criar uma nova questão
            </p>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-160px)]">
          <Card className="p-6">
            <div className="space-y-6">
              {/* Pergunta em Inglês */}
              <div className="space-y-2">
                <Label htmlFor="question-en">Pergunta (Inglês) *</Label>
                <Textarea
                  id="question-en"
                  placeholder="Digite a pergunta em inglês..."
                  value={questionEn}
                  onChange={(e) => setQuestionEn(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>

              {/* Pergunta em Português */}
              <div className="space-y-2">
                <Label htmlFor="question-pt">Pergunta (Português) *</Label>
                <Textarea
                  id="question-pt"
                  placeholder="Digite a pergunta em português..."
                  value={questionPt}
                  onChange={(e) => setQuestionPt(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>

              {/* Múltipla Escolha */}
              <div className="flex items-center gap-2 p-4 rounded-lg bg-muted/50">
                <Switch
                  id="multiple-choice"
                  checked={multipleChoice}
                  onCheckedChange={(checked) => {
                    setMultipleChoice(checked);
                    if (!checked && correctAnswers.length > 1) {
                      setCorrectAnswers([correctAnswers[0]]);
                    }
                  }}
                />
                <Label htmlFor="multiple-choice" className="cursor-pointer">
                  Múltipla Escolha (mais de uma resposta correta)
                </Label>
              </div>

              {/* Opções */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Opções de Resposta *</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addOption}
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Adicionar Opção
                  </Button>
                </div>

                <div className="space-y-3">
                  {options.map((option, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex items-center gap-2 pt-2">
                        <Checkbox
                          checked={correctAnswers.includes(index)}
                          onCheckedChange={() => toggleCorrectAnswer(index)}
                          className="border-2"
                        />
                        <span className="text-sm font-medium text-muted-foreground">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                      <Input
                        placeholder={`Opção ${String.fromCharCode(65 + index)}`}
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value)}
                        className="flex-1"
                      />
                      {options.length > 2 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeOption(index)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Marque o checkbox para indicar as respostas corretas
                </p>
              </div>

              {/* Botão Salvar */}
              <div className="pt-4 border-t border-border">
                <Button
                  onClick={handleSave}
                  className="w-full gap-2 bg-gradient-to-r from-primary to-primary/80"
                  size="lg"
                >
                  <Save className="w-5 h-5" />
                  Salvar Questão
                </Button>
              </div>
            </div>
          </Card>
        </ScrollArea>
      </div>
    </div>
  );
};
