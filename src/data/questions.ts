export interface Question {
  id: number;
  questionEn: string;
  questionPt: string;
  options: string[];
  correctAnswers: number[];
  multipleChoice: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    questionEn: "Which of the following are defined for a given change model? (Choose three.)",
    questionPt: "Qual dos seguintes é definido para um determinado modelo de mudança? (Escolha três.)",
    options: [
      "Phase transitions",
      "State model",
      "Phase model",
      "State transitions",
      "State transition conditions"
    ],
    correctAnswers: [0, 3, 4],
    multipleChoice: true
  },
  {
    id: 2,
    questionEn: "A customer wants to add a new Catalog Item to the Service Catalog. What process would be used to ensure the new item is authorized?",
    questionPt: "Um cliente deseja adicionar um novo Item de Catálogo ao Catálogo de Serviços. Qual processo seria utilizado para garantir que o novo item esteja autorizado?",
    options: [
      "Fulfillment Management",
      "Release Management",
      "Configuration Management",
      "Change Management",
      "Catalog Management"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 3,
    questionEn: "Your customer wants to add a notification to the Change - Emergency - Authorize Flow. What is the first thing you would do to meet this requirement?",
    questionPt: "Seu cliente quer adicionar uma notificação ao Fluxo de Alteração - Emergência - Autorizar. Qual é a primeira coisa que você faria para atender a esse requisito?",
    options: [
      "Create a copy of the baseline Change - Emergency - Authorize Flow, and then edit the new copy",
      "Create a backup of the baseline Change - Emergency - Authorize Flow, and edit the baseline flow",
      "Deactivate the baseline Change - Emergency - Authorize Flow",
      "Unpublish the baseline Change - Emergency - Authorize Flow"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 4,
    questionEn: "What is an example of a Key Performance Indicator for Change management that is included with Performance Analytics, but not available in ServiceNow reporting? (Choose two.)",
    questionPt: "Qual é um exemplo de um Indicador de Desempenho Chave para gestão de mudanças que está incluído na Análise de Desempenho, mas não está disponível nos relatórios do ServiceNow? (Escolha dois.)",
    options: [
      "% Successful Changes",
      "% Unauthorized Changes",
      "Count of Completed Changes per Month, by Change Type",
      "Count of Completed Changes per Month, by Category"
    ],
    correctAnswers: [0, 1],
    multipleChoice: true
  },
  {
    id: 5,
    questionEn: "What actions can a user with the itil_admin role take in support of Change Management? (Choose three.)",
    questionPt: "Quais ações um usuário com o papel de itil_admin pode realizar em apoio à Gestão de Mudanças? (Escolha três.)",
    options: [
      "Delete CAB Definition",
      "Manage Risk Conditions",
      "Manage Risk Assessments",
      "Delete Change",
      "Create and manage Approval Policies"
    ],
    correctAnswers: [0, 1, 4],
    multipleChoice: true
  },
  {
    id: 6,
    questionEn: "Your customer wants to use the Normal change model, but wants to add another level of approval for changes relating to the Service, SAP Enterprise Services. What should you do to satisfy this requirement?",
    questionPt: "Seu cliente quer usar o modelo de mudança Normal, mas deseja adicionar mais um nível de aprovação para mudanças relacionadas ao Serviço, Serviços Empresariais SAP. O que você deve fazer para satisfazer esse requisito?",
    options: [
      "Add a new Policy Input to the Normal Change Approval Policy",
      "Add a new Decision to the Normal Change Approval Policy",
      "Add a new Change Approval Policy",
      "Add a new Decision to the Normal Change Workflow"
    ],
    correctAnswers: [2],
    multipleChoice: false
  },
  {
    id: 7,
    questionEn: "Which table stores incident categories and subcategories?",
    questionPt: "Qual tabela armazena categorias e subcategorias de incidentes?",
    options: [
      "Category [sys_category]",
      "Task Category [task_category]",
      "Choice [sys_choice]",
      "Incident [incident]"
    ],
    correctAnswers: [2],
    multipleChoice: false
  },
  {
    id: 8,
    questionEn: "A problem record is the Parent to what record?",
    questionPt: "Um registro de problema é o pai de qual registro?",
    options: [
      "Known Error",
      "Workaround",
      "Major Incident",
      "Related Incidents",
      "Problem Task"
    ],
    correctAnswers: [4],
    multipleChoice: false
  },
  {
    id: 9,
    questionEn: "What optional Incident table is extended from the Task table?",
    questionPt: "Qual tabela de Incidente opcional é estendida a partir da tabela de Tarefa?",
    options: [
      "Child Incident [incident_child]",
      "Major Incident [major_incident]",
      "Incident Task [incident_task]",
      "Parent Incident [incident_parent]"
    ],
    correctAnswers: [2],
    multipleChoice: false
  },
  {
    id: 10,
    questionEn: "From which table, is the Incident table extended?",
    questionPt: "De qual tabela a tabela de Incidente é estendida?",
    options: [
      "Task [task]",
      "Task [sn_task]",
      "Ticket [ticket]",
      "Work [sn_work]"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 11,
    questionEn: "In what table are Change records stored?",
    questionPt: "Em que tabela os registros de mudança são armazenados?",
    options: [
      "Change [change_task]",
      "Change Request [rfc]",
      "Change Request [change_request]",
      "Change [change]",
      "Change [task_change]"
    ],
    correctAnswers: [2],
    multipleChoice: false
  },
  {
    id: 12,
    questionEn: "The Problem table is extended from what table?",
    questionPt: "A tabela Problem é estendida a partir de qual tabela?",
    options: [
      "Task",
      "Major Incident",
      "Outage",
      "Problem Task",
      "Incident"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 13,
    questionEn: "Which capability provides visibility to data joined between multiple tables?",
    questionPt: "Qual capacidade fornece visibilidade aos dados combinados entre múltiplas tabelas?",
    options: [
      "Database Views",
      "Metric Tables",
      "Published Reports",
      "Custom Tables",
      "Breakdown Sources"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 14,
    questionEn: "A customer requests that when the Service Desk agent clicks on the information icon for the Caller's name, the quick view frame shows only specific fields. How would you modify the quick view frame?",
    questionPt: "Um cliente solicita que, quando o agente do Service Desk clicar no ícone de informação para o nome do Chamador, o quadro de visualização rápida mostre apenas os seguintes campos. Como você modificaria o quadro de visualização rápida?",
    options: [
      "Update the sys_popup view for the user table",
      "Update the sys_quick view for the caller table",
      "Update the sys_popup view for the caller table",
      "Update the sys_quick view for the user table"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 15,
    questionEn: "Which type of catalog item should be used to create an incident record from the portal?",
    questionPt: "Qual tipo de item de catálogo deve ser utilizado para criar um registro de incidente a partir do portal?",
    options: [
      "Incident Template",
      "Record producer",
      "Order Guide",
      "Request Item"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 16,
    questionEn: "Which should be used to explore the entire hierarchy and table definitions of the Configuration Management Database Classes?",
    questionPt: "Qual deve ser usado para explorar toda a hierarquia e definições de tabela das Classes do Banco de Dados de Gerenciamento de Configuração?",
    options: [
      "Reports",
      "CI Class Manager",
      "Application Menus",
      "Dependency View"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 17,
    questionEn: "When does the change request move to Close?",
    questionPt: "Quando a solicitação de mudança move para Fechado?",
    options: [
      "When the change request moves to Close",
      "When a change manager accepts the change",
      "When the change request moves to a state of Review",
      "When the change request moves to a state of Assess"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 18,
    questionEn: "Which baseline Change Flow automatically generates a Change task, for Post Implementation Review?",
    questionPt: "Qual fluxo de mudança padrão gera automaticamente uma tarefa de mudança para a Revisão Pós-Implementação?",
    options: [
      "Change - Emergency - Review",
      "Change - Emergency - Authorize",
      "Change - P1 - Review",
      "Change - Major Incident - Authorize",
      "Change - Emergency - PIRQuestion"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 19,
    questionEn: "How are Service Catalogs and Catalog Items related? (Choose two.)",
    questionPt: "Como os Catálogos de Serviços e os Itens de Catálogo estão relacionados? (Escolha dois.)",
    options: [
      "A catalog item can be associated with one or more service catalogs",
      "Access to catalog items is determined by the service catalog's assigned user criteria",
      "Service catalogs may contain multiple catalog items",
      "A catalog item can only be associated with one service catalog"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true
  },
  {
    id: 20,
    questionEn: "Which role has the ability to modify the cart layout?",
    questionPt: "Qual função tem a capacidade de modificar o layout do carrinho?",
    options: [
      "itil",
      "itil_admin",
      "catalog_admin",
      "catalog_manager"
    ],
    correctAnswers: [2],
    multipleChoice: false
  }
];
