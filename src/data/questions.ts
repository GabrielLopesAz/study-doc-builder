const STORAGE_KEY = "custom_questions";

export interface Question {
  id: number;
  questionEn: string;
  questionPt: string;
  options: string[];
  correctAnswers: number[];
  multipleChoice: boolean;
  originalOptions?: string[]; // Para manter as opções originais antes do embaralhamento
}

// Carregar questões customizadas do localStorage
export const loadCustomQuestions = (): Question[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Erro ao carregar questões customizadas:", error);
    return [];
  }
};

// Salvar questões customizadas no localStorage
export const saveCustomQuestions = (questions: Question[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  } catch (error) {
    console.error("Erro ao salvar questões customizadas:", error);
  }
};

// Adicionar nova questão customizada
export const addCustomQuestion = (question: Question): void => {
  const customQuestions = loadCustomQuestions();
  customQuestions.push(question);
  saveCustomQuestions(customQuestions);
};

// Obter todas as questões (base + customizadas)
export const getAllQuestions = (): Question[] => {
  const customQuestions = loadCustomQuestions();
  return [...allQuestions, ...customQuestions];
};

export const allQuestions: Question[] = [
  {
    "id": 1,
    "questionEn": "Which of the following are defined for a given change model? (Choose three.)",
    "questionPt": "Qual dos seguintes é definido para um determinado modelo de mudança? (Escolha três.)",
    "options": [
     
      "Phase transitions",
      "State model",
      "Phase model",
      "State transitions",
      "State transition conditions"
    ],
    "correctAnswers": [
     1,3,4
    ],
    "multipleChoice": true
  },
  {
    "id": 2,
    "questionEn": "A customer wants to add a new Catalog Item to the Service Catalog. What process would be used to ensure the new item is authorized?",
    "questionPt": "Um cliente deseja adicionar um novo Item de Catálogo ao Catálogo de Serviços. Qual processo seria utilizado para garantir que o novo item esteja autorizado?",
    "options": [
      "Fulfillment Management",
      "Release Management",
      "Configuration Management",
      "Change Management",
      "Catalog Management"
    ],
    "correctAnswers": [
      3
    ],
    "multipleChoice": false
  },
  {
    "id": 3,
    "questionEn": "Your customer wants to add a notification to the Change - Emergency - Authorize Flow. What is the first thing you would do to meet this requirement?",
    "questionPt": "Seu cliente quer adicionar uma notificação ao Fluxo de Alteração - Emergência - Autorizar. Qual é a primeira coisa que você faria para atender a esse requisito?",
    "options": [ 
      "Create a copy of the baseline Change - Emergency - Authorize Flow, and then edit the new copy",
      "Create a backup of the baseline Change - Emergency - Authorize Flow, and edit the baseline flow",
      "Deactivate the baseline Change - Emergency - Authorize Flow",
      "Unpublish the baseline Change - Emergency - Authorize Flow",
     ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 4,
    "questionEn": "What is an example of a Key Performance Indicator for Change management that is included with Performance Analytics, but not available in ServiceNow reporting? (Choose two.)",
    "questionPt": "Qual é um exemplo de um Indicador de Desempenho Chave para gestão de mudanças que está incluído na Análise de Desempenho, mas não está disponível nos relatórios do ServiceNow? (Escolha dois.)",
    "options": [
      "% Successful Changes",
      "% Unauthorized Changes",
      "Count of Completed Changes per Month, by Change Type",
      "Count of Completed Changes per Month, by Category"
    ],
    "correctAnswers": [0,1],
    "multipleChoice": true
  },
  {
    "id": 5,
    "questionEn": "What actions can a user with the itil_admin role take in support of Change Management? (Choose three.)",
    "questionPt": "Quais ações um usuário com o papel de itil_admin pode realizar em apoio à Gestão de Mudanças? (Escolha três.)",
    "options": [
      "Delete CAB Definition",
      "Manage Risk Conditions",
      "Manage Risk Assessments",
      "Delete Change",
      "Create and manage Approval Policies"
    ],
    "correctAnswers": [
      1,2,3
    ],
    "multipleChoice": true
  },
  {
    "id": 6,
    "questionEn": "Your customer wants to use the Normal change model, but wants to add another level of approval for changes relating to the Service, SAP Enterprise Services.\nWhat should you do to satisfy this requirement?",
    "questionPt": "Seu cliente quer usar o modelo de mudança Normal, mas deseja adicionar mais um nível de aprovação para mudanças relacionadas ao Serviço, Serviços Empresariais SAP.\n\nO que você deve fazer para satisfazer esse requisito?",
    "options": [
      "Add a new Policy Input to the Normal Change Approval Policy",
      "Add a new Decision to the Normal Change Approval Policy",
      "Add a new Change Approval Policy",
      "Add a new Decision to the Normal Change Workflow"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 7,
    "questionEn": "Which table stores incident categories and subcategories?",
    "questionPt": "Qual tabela armazena categorias e subcategorias de incidentes?",
    "options": [
      "Category [sys_category]",
      "Task Category [task_category]",
      "Choice [sys_choice]",
      "Incident [incident]"
    ],
    "correctAnswers": [
     2
    ],
    "multipleChoice": false
  },
  {
    "id": 8,
    "questionEn": "A problem record is the Parent to what record?",
    "questionPt": "Um registro de problema é o pai de qual registro?",
    "options": [ 
      "Known Error",
      "Workaround",
      "Major Incident",
      "Related Incidents",
      "Problem Task",
    
    ],
    "correctAnswers": [
      4
    ],
    "multipleChoice": false
  },
  {
    "id": 9,
    "questionEn": "What optional Incident table is extended from the Task table?",
    "questionPt": "Qual tabela de Incidente opcional é estendida a partir da tabela de Tarefa?",
    "options": [ 
      "Child Incident [incident_child]",
      "Major Incident [major_incident]",
      "Incident Task [incident_task]",
      "Parent Incident [incident_parent]", 
    ],
    "correctAnswers": [
     3
    ],
    "multipleChoice": false
  },
  {
    "id": 10,
    "questionEn": "From which table, is the Incident table extended?",
    "questionPt": "De qual tabela a tabela de Incidente é estendida?",
    "options": [
   
      "Task [task]",
      "Task [sn_task]",
      "Ticket [ticket]",
      "Work [sn_work]",
    
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 11,
    "questionEn": "In what table are Change records stored?",
    "questionPt": "Em que tabela os registros de mudança são armazenados?",
    "options": [
      "Change [change_task]",
      "Change Request [rfc]",
      "Change Request [change_request]",
      "Change [change]",
      "Change [task_change]"
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  },
  {
    "id": 12,
    "questionEn": "The Problem table is extended from what table?",
    "questionPt": "A tabela Problem é estendida a partir de qual tabela?",
    "options": [
           "Task",
      "Major Incident",
      "Outage",
      "Problem Task",
      "Incident",
          ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 13,
    "questionEn": "Which capability provides visibility to data joined between multiple tables?",
    "questionPt": "Qual capacidade fornece visibilidade aos dados combinados entre múltiplas tabelas?",
    "options": [
     
      "Database Views",
      "Metric Tables",
      "Published Reports",
      "Custom Tables",
      "Breakdown Sources",
     
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 14,
    "questionEn": "A customer requests that when the Service Desk agent clicks on the information icon for the Caller's name, the quick view frame shows only the following fields:\nUser name - \nManager name -\nEmail Address -\nEmployee ID -\n How would you modify the quick view frame?",
    "questionPt": "Manager name -\n\nEmail Address -\n\nEmployee ID -\n\nHow would you modify the quick view frame?\n\n\n\nUm cliente solicita que, quando o agente do Service Desk clicar no ícone de informação para o nome do Chamador, o quadro de visualização rápida mostre apenas os seguintes campos:\n\nNome do usuário -\n\nNome do gerente -\n\nEndereço de e-mail -\n\nID do funcionário -\n\nComo você modificaria o quadro de visualização rápida?",
    "options": [
    
      "Update the sys_popup view for the user table",
      "Update the sys_quick view for the caller table",
      "Update the sys_popup view for the caller table",
      "Update the sys_quick view for the user table",
    
    ],
    "correctAnswers": [
     0
    ],
    "multipleChoice": false
  },
  {
    "id": 15,
    "questionEn": "Which type of catalog item should be used to create an incident record from the portal?",
    "questionPt": "Qual tipo de item de catálogo deve ser utilizado para criar um registro de incidente a partir do portal?",
    "options": [
     
      "Incident Template",
      "Record producer",
      "Order Guide",
      "Request Item"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 16,
    "questionEn": "Which should be used to explore the entire hierarchy and table definitions of the Configuration Management Database Classes?",
    "questionPt": "Qual deve ser usado para explorar toda a hierarquia e definições de tabela das Classes do Banco de Dados de Gerenciamento de Configuração?",
    "options": [
      "Reports",
      "CI Class Manager",
      "Application Menus",
      "Dependency View"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  }, {
    "id": 17,
    "questionEn": "When the change request moves to Close",
    "questionPt": "",
    "options": [
      "When the change request moves to Close",
      "When a change manager accepts the change",
      "When the change request moves to a state of Review",
      "When the change request moves to a state of Assess"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 18,
    "questionEn": "Which baseline Change Flow automatically generates a Change task, for Post Implementation Review?",
    "questionPt": "Qual fluxo de mudança padrão gera automaticamente uma tarefa de mudança para a Revisão Pós-Implementação?",
    "options": [
    
      "Change - Emergency - Review",
      "Change - Emergency - Authorize",
      "Change - P1 - Review",
      "Change - Major Incident - Authorize",
      "Change - Emergency - PIRQuestion",
    
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 19,
    "questionEn": "How are Service Catalogs and Catalog Items related? (Choose two.)",
    "questionPt": "Como os Catálogos de Serviços e os Itens de Catálogo estão relacionados? (Escolha dois.)",
    "options": [
      "A catalog item can be associated with one or more service catalogs",
      "Access to catalog items is determined by the service catalog's assigned user criteria",
      "Service catalogs may contain multiple catalog items",
      "A catalog item can only be associated with one service catalog"
    ],
    "correctAnswers": [0,2],
    "multipleChoice": true
  },
  {
    "id": 20,
    "questionEn": "Which role has the ability to modify the cart layout?",
    "questionPt": "Qual função tem a capacidade de modificar o layout do carrinho",
    "options": [
      "itil",
      "itil_admin",
      "catalog_admin",
      "catalog_manager"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 21,
    "questionEn": "Which of the following elements are automatically included in the name of the update set for items published via Catalog Builder? (Choose two.)",
    "questionPt": "Quais dos seguintes elementos são automaticamente incluídos no nome do conjunto de atualização para itens publicados via Catalog Builder? (Escolha dois.)",
    "options": [
     
      "Catalog(s)",
      "Item name",
      "Variables",
      "Item author",
      "Timestamp"
    ],
    "correctAnswers": [1,4],
    "multipleChoice": true
  },
  {
    "id": 22,
    "questionEn": "What would you use to define a common grouping of configuration items such as all web servers in Miami?",
    "questionPt": "O que você usaria para definir um agrupamento comum de itens de configuração, como todos os servidores web em Miami?",
    "options": [
      
      "CI class",
      "Dependent group",
      "CSDM component group",
      "Dynamic CI group"
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 23,
    "questionEn": "When you click Change > Create New, which page is displayed?",
    "questionPt": "Quando você clica em Alterar > Criar Novo, qual página é exibida?",
    "options": [
      "Change Landing Page",
      "Change Form",
      "Change Catalog",
      "Change Wizard",
      "Change Interceptor",
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 24,
    "questionEn": "At which level can the type of knowledge feedback be enabled or disabled?",
    "questionPt": "Em qual nível o tipo de feedback de conhecimento pode ser ativado ou desativado?",
    "options": [
      "Knowledge base",
      "Knowledge article",
      "Knowledge category",
      "Knowledge article template",
   
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 25,
    "questionEn": "What defines the required approvals and the associated conditions for a change model?",
    "questionPt": "O que define as aprovações necessárias e as condições associadas para um modelo de mudança?",
    "options": [
      "A change approval policy",
      "A change model's state transitions",
      "A change model approval definition",
      "A change approval lifecycle flow",
   
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 26,
    "questionEn": "On the ‘Create New’ change landing page in Service Operations Workspace, what class label is displayed for the Emergency change model?",
    "questionPt": "Na página de aterrissagem 'Criar Novo' no Workspace de Operações de Serviço, qual rótulo de classe é exibido para o modelo de mudança de Emergência?",
    "options": [
      " Unauthorized",
      "Default",
      "Break/fix",
      "Out-of-the-box",
   
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 27,
    "questionEn": "Which platform role can create service portfolios and taxonomy nodes?",
    "questionPt": "Qual função da plataforma pode criar portfólios de serviços e nós de taxonomia?",
    "options": [
    
      "portfolio_viewer",
      "portfolio_admin",
      "portfolio_manager",
      "portfolio_editor"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 28,
    "questionEn": "If a change model has Write roles AND Can write defined, which users have the ability to modify the change model record? (Choose two.)",
    "questionPt": "Se um modelo de mudança tem roles de Escrita E Permissão de escrita definidas, quais usuários têm a capacidade de modificar o registro do modelo de mudança? (Escolha dois.)",
    "options": [
      "Users with the itil_admin role",
      "Users with admin role",
      "Users that have the Write role(s) OR that match the Can write user criteria",
      "Users with sn_change_write role",
      "Users that have the Write role(s) AND match the Can write user criteria"
    ],
    "correctAnswers": [1,4],
    "multipleChoice": true
  },
  {
    "id": 29,
    "questionEn": "What defines which catalog items, and in what order, are included in an Order Guide?",
    "questionPt": "O que define quais itens do catálogo, e em que ordem, são incluídos em um Guia de Pedidos?",
    "options": [
      "Order guide template",
      "Rules",
      "Variable sets",
      "UI policies"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 30,
    "questionEn": "After publishing an Item via Catalog Builder, the associated update set is set to which state?",
    "questionPt": "Após publicar um Item via Catalog Builder, o conjunto de atualização associado é definido para qual estado?",
    "options": [    
      "In progress",
      "Complete",
      "New",
      "Published"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 31,
    "questionEn": "Which Service Portfolio Management phase does a service belong to when it is in operational state?",
    "questionPt": "Em qual fase do gerenciamento de portfólio de serviços um serviço pertence quando está em estado operacional?",
    "options": [
      "Active",
      "Retired",
      "Catalog",
      "Pipeline"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 32,
    "questionEn": "Which of these can be associated with a service within the service portfolio taxonomy?",
    "questionPt": "Qual destes pode ser associado a um serviço dentro da taxonomia do portfólio de serviços?",
    "options": [
      "Node layer",
      "Node",
      "Node level",
      "Leaf node"
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 33,
    "questionEn": "Which service types can be managed through the scope of Service Portfolio Management? (Choose two.)",
    "questionPt": "Qual é o processo responsável por entregar itens que foram solicitados a partir de um Catálogo de Serviços?",
    "options": [
    
      "Application service",
      "Technical service",
      "Business service",
      "Mobile service"
    ],
    "correctAnswers": [1,2],
    "multipleChoice": true
  },
  {
    "id": 34,
    "questionEn": "Which is the process responsible for delivering items that have been ordered from a Service Catalog?",
    "questionPt": "Qual é o processo responsável por entregar itens que foram solicitados a partir de um Catálogo de Serviços?",
    "options": [
    
      "Service Catalog Management",
      "Catalog Workflows",
      "Catalog Fulfillment",
      "Catalog Item Design",
      "Request Management"
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 35,
    "questionEn": "Where is the definition of what is provided, or not provided, for a service defined?",
    "questionPt": "Onde está definida a definição do que é fornecido, ou não fornecido, para um serviço?",
    "options": [
      "Vendor service agreements",
      "Service scope",
      "Service contracts",
      "Service limitations"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 36,
    "questionEn": "When using Catalog Builder, what can be built using templates? (Choose two.)",
    "questionPt": "Ao usar o Catalog Builder, o que pode ser construído usando modelos? (Escolha dois.)",
    "options": [ 
      "Content items",
      "Catalog items",
      "Knowledge articles",
      "Order guides",
      "Record producers"
    ],
    "correctAnswers": [1,4],
    "multipleChoice": true
  },
  {
    "id": 37,
    "questionEn": "Which organizational role is responsible for the overall administrative capabilities of a portfolio?",
    "questionPt": "Qual cargo organizacional é responsável pelas capacidades administrativas globais de um portfólio?",
    "options": [ 
      "Service Manager",
      "Portfolio Manager",
      "Portfolio Owner",
      "Service Owner"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 38,
    "questionEn": "A Portfolio Manager is primarily concerned with the performance of what hierarchy?",
    "questionPt": "Um Gerente de Portfólio está principalmente preocupado com o desempenho de qual hierarquia?",
    "options": [ 
     
      "Service Portfolio, Service, Service Offering",
      "Portfolio Owner, Service Owner, Catalog Manager",
      "Service Catalog, Catalog item, Requested item",
      "Requested Item, Catalog Task, Task SLA",
      
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 39,
    "questionEn": "When modifying a Change Flow, a library is available of re-usable components for your flow. What are these components called?",
    "questionPt": "Ao modificar um Fluxo de Mudança, uma biblioteca de componentes reutilizáveis está disponível para seu fluxo. Como são chamados esses componentes?",
    "options": [ 
      "Flow activities",
      "Flow actions",
      "Attributes",
      "Properties"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 40,
    "questionEn": "How is granular read and write access for a specific change model defined?",
    "questionPt": "Como o acesso granular de leitura e gravação para um modelo de mudança específico é definido?",
    "options": [ 
      "Configuring ACLs on the chge_model table",
      "Configuring ACLs on the Create New landing page",
      "Change properties",
      "Setting Advanced Security to true and applying user criteria"
    ],
    "correctAnswers": [
    3
    ],
    "multipleChoice": false
  },
  {
    "id": 41,
    "questionEn": "Which of the following can leverage user criteria for controlling access?",
    "questionPt": "Qual dos seguintes pode utilizar critérios de usuários para controlar o acesso?",
    "options": [ 
      "Catalog taxonomy",
      "Catalog topics",
      "Catalog categories",
      "Catalog variables",
      "Catalog items"
    ],
    "correctAnswers": [
     4
    ],
    "multipleChoice": false
  },
  {
    "id": 42,
    "questionEn": "Which level are service commitments associated in the service portfolio taxonomy?",
    "questionPt": "A quais níveis estão associados os compromissos de serviço na taxonomia do portfólio de serviços?",
    "options": [ 
      "Node",
      "Offering",
      "Service",
      "Portfolio"
    ],
    "correctAnswers": [
      3
    ],
    "multipleChoice": false
  },
  {
    "id": 43,
    "questionEn": "How are the relationships between services and offerings that are built in Service Portfolio Management transferred to the Configuration Management Database (CMDB)?",
    "questionPt": "Como as relações entre serviços e ofertas que são construídas na Gestão de Portfólio de Serviços são transferidas para o Banco de Dados de Gerenciamento de Configuração (CMDB)?",
    "options": [
      
      "Only parent:child (service:offering) relationships are automatically created in the CMDB",
      "If the service is defined as a business service, the relationships and dependencies will be automatically in the CMDB",
      "All CMDB relationships and dependencies are automatically created upon publishing the service and offerings",
      "Any required CMDB relationships and dependencies must be created manually"
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  },
  {
    "id": 44,
    "questionEn": "What is the minimum number of offering(s) a service must have to move to the Catalog phase?",
    "questionPt": "Qual é o número mínimo de oferta(s) que um serviço deve ter para passar para a fase de Catálogo?",
    "options": [ 
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 45,
    "questionEn": "In Incident Management, an Assignment group is automatically set on a change request record because of a business rule. How is the group identified?",
    "questionPt": "No gerenciamento de incidentes, um grupo de atribuição é definido automaticamente em um registro de solicitação de mudança devido a uma regra de negócio. Como o grupo é identificado?",
    "options": [
      
      "Change group on CI record, or if empty, the Change group on the Service offering",
      "Support group on CI record, or if empty, the Support group on the Service",
      "Support group on CI record, or the default assignment group for the user",
      "Support group on CI record, or if empty, the Support group on the Service offering"
    ],
    "correctAnswers":  [3] ,
    "multipleChoice": false
  },
  {
    "id": 46,
    "questionEn": "In Change Management, an Assignment group is automatically set on a change request record because of a business rule. How is the group identified?",
    "questionPt": "Na Gestão de Mudanças, um grupo de Atribuição é definido automaticamente em um registro de solicitação de mudança devido a uma regra de negócios. Como o grupo é identificado?",
    "options": [
     "Change group on CI record, or if empty, the Change group on the Service offering",
      "Support group on CI record, or the default assignment group for the user",
      "Support group on CI record, or if empty, the Support group on the Service",
      "Support group on CI record, or if empty, the Support group on the Service offering",
      
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 47,
    "questionEn": "What is the Request lifecycle state when a user is entering details in a form?",
    "questionPt": "Qual é o estado do ciclo de vida da solicitação quando um usuário está inserindo detalhes em um formulário?",
    "options": [
      
      "Draft",
      "Requested",
      "Approved",
      "In Progress",
       
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 48,
    "questionEn": "Who accepts or approves Major Incidents in the Major Incident Management process?",
    "questionPt": "Quem aceita ou aprova Incidentes Maiores no processo de Gerenciamento de Incidentes Maiores?",
    "options": [
        "Incident Manager",
      "Assigned Group",
      "Problem Manager",
      "Change Manager",
    
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 49,
    "questionEn": "How are relationships between Portfolio > Service > Service Offering automatically reflected in the CMDB?",
    "questionPt": "Como as relações entre Portfólio > Serviço > Oferta de Serviço são automaticamente refletidas no CMDB?",
    "options": [
         "Relationships are created when the service is classified as a business service",
      "CMDB relationships are created manually via the CI Relationship Editor",
      "CMDB entries are created automatically when the service and offering are published",
      "The CMDB requires an integration script to reflect taxonomy relationships"
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  },
  {
    "id": 50,
    "questionEn": "Which of the following defines the approvals that should be applied to a change request?",
    "questionPt": "Qual dos seguintes define as aprovações que devem ser aplicadas a um pedido de mudança?",
    "options": [
          "Change approval UI actions",
      "Change approval policy",
      "Change approval script includes",
      "Change approval business rules"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 51,
    "questionEn": "What do you use to identify who will have access to particular items in a service catalog?",
    "questionPt": "O que você usa para identificar quem terá acesso a itens específicos em um catálogo de serviços?",
    "options": [
       
      "User criteria",
      "Access criteria",
      "User access rules",
      "Availability rules",
      "Security rules",
       ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 52,
    "questionEn": "What is a core difference between an Incident and a Problem?",
    "questionPt": "Qual é a diferença principal entre um Incidente e um Problema?",
    "options": [
      "Incidents are focused on one individual having an issue; Problems are when you have many people having the same issue",
      "Incidents can be any priority; Problems are high or critical",
      "Incidents are the same as a Problem",
      "Incidents are focused on the quickest resolution; Problems are focused on root cause analysis"
    ],
    "correctAnswers": [
     3
    ],
    "multipleChoice": false
  },
  {
    "id": 53,
    "questionEn": "Where can a change manager define the fields that must be populated before a change request can move from the state of New to Assess?",
    "questionPt": "Onde um gerente de mudanças pode definir os campos que devem ser preenchidos antes que um pedido de mudança possa passar do estado Novo para Avaliar?",
    "options": [
    
      "Choice conditions",
      "Model State Transition Conditions",
      "Dictionary Overrides",
      "State choice lists"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 54,
    "questionEn": "Your company sells bicycles. They want to build a service catalog for current and prospective customers, so they can browse for bicycles and accessories, and make purchases.\nWhat interface is suitable for these external users?",
    "questionPt": "Sua empresa vende bicicletas. Eles querem construir um catálogo de serviços para clientes atuais e potenciais, para que possam navegar por bicicletas e acessórios e fazer compras.\n\nQue interface é adequada para esses usuários externos?",
    "options": [
     "Service Catalog Mobile App",
      "Portal",
      "Now Catalog App",
      "Google leads spoke",
      "Customer Service Catalog"
    ],
    "correctAnswers": [
      4
    ],
    "multipleChoice": false
  },
  {
    "id": 55,
    "questionEn": "What happens when an existing service record is checked out in service Builder for editing?",
    "questionPt": "O que acontece quando um registro de serviço existente é dessinalizado no Service Builder para edição?",
    "options": [
        "The service portfolio record is placed in a Work in progress state",
      "The service and offerings are temporarily unavailable for consumption",
      "copy of the service is created and placed in a Draft state",
      "The original service record is placed in a Retired state"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 56,
    "questionEn": "Which Change request fields are used in conflict detection? (Choose three.)",
    "questionPt": "Quais campos de solicitação de mudança são usados na detecção de conflitos? (Escolha três.)",
    "options": [
       
      "CI Business criticality",
      "Planned end date",
      "Risk",
      "Planned start date",
      "Configuration item"
    ],
    "correctAnswers": [1,3,4],
    "multipleChoice": true
  },
  {
    "id": 57,
    "questionEn": "What types of Conflicts are detected automatically on the Change request? (Choose three.)",
    "questionPt": "Quais tipos de conflitos são detectados automaticamente na solicitação de mudança? (Escolha três.)",
    "options": [
     
      "Conflict with Assignee Shift Schedule",
      "Conflict with Blackout Schedule",
      "Conflict with the Company Holiday Schedule",
      "Another change for the same CI, at the same time",
      "Conflict with Maintenance Window"
    ],
    "correctAnswers": [0,3,4],
    "multipleChoice": false
  },
  {
    "id": 58,
    "questionEn": "How are Releases related to Changes?",
    "questionPt": "Como as Releases estão relacionadas às Mudanças?",
    "options": [
     
      "Releases are comprised of one or more Changes",
      "Changes are comprised of one or more Releases",
      "Releases are implemented before Changes",
      "Changes are implemented before Releases",
     
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 59,
    "questionEn": "Which workflow is defined as Requests for approval from a manager of the knowledge base before moving the article to the retired state? The workflow is canceled and the article remains in the published state if any manager rejects the request.",
    "questionPt": "Qual fluxo de trabalho é definido como Solicitações de aprovação de um gerente da base de conhecimento antes de mover o artigo para o estado aposentado? O fluxo de trabalho é cancelado e o artigo permanece no estado publicado se qualquer gerente rejeitar a solicitação.",
    "options": [
       "Knowledge – Article Retire",
      "Knowledge – Retire Authorize",
      "Knowledge – Approval Retire",
      "Knowledge – Retire-Approval Required",
      "Knowledge – Instant Retire"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 60,
    "questionEn": "What Knowledge base feature can you use to standardize the sections and fonts on a knowledge article?",
    "questionPt": "Qual recurso da base de conhecimento você pode usar para padronizar as seções e fontes em um artigo de conhecimento?",
    "options": [
      "Article designer",
      "Coaching loops",
      "Templates",
      "Article layout"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 61,
    "questionEn": "Which of the following roles can create and manage user criteria for service catalogs?",
    "questionPt": "Qual das seguintes funções pode criar e gerenciar critérios de usuários para catálogos de serviços?",
    "options": [
      "catalog_admin",
      "itil_admin",
      "catalog_manager",
      "catalog_criteria_admin",
      "catalog_criteria_manager",
      
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 62,
    "questionEn": "Which catalog property allows users to save partially completed requests to complete and submit at a later time?",
    "questionPt": "Qual propriedade do catálogo permite que os usuários salvem pedidos parcialmente concluídos para completar e enviar em um momento posterior?",
    "options": [
      "Edit cart layout",
      "Enable wish list",
      "Enable cart save",
      "User partial save"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 63,
    "questionEn": "Once a Catalog Item has been requested, what mechanism determines the approvals, and tasks that are triggered in the application?",
    "questionPt": "Uma vez que um Item de Catálogo foi solicitado, qual mecanismo determina as aprovações e as tarefas que são acionadas na aplicação?",
    "options": [
    
      "Processes",
      "Flows",
      "Procedures",
      "Actions",
      "Scripts"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 64,
    "questionEn": "Unless there are particular security requirements, what role is given to users that perform request fulfillment work?",
    "questionPt": "A menos que existam requisitos de segurança específicos, qual é o papel atribuído aos usuários que realizam o trabalho de atendimento a pedidos?",
    "options": [
   
      "itil",
      "task_worker",
      "sc_fulfiller",
      "catalog_fulfiller",
      "fulfiller",
      
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 65,
    "questionEn": "our customer is a data center. They have a construction department that builds out spaces for new customers. The customer account representatives are responsible for initiating the construction requests. The guidelines are extensive for how to complete the construction request documentation.\nYour customer wants the catalog to contain two items:\n1. Construction request\n2. Getting Started with Construction Requests\nThe Getting Started Item should contain a link to a Knowledge Article.\nWhat type of item would you use to satisfy the requirement for the Getting Started Item?",
    "questionPt": "1. Construction request\n\n2. Getting Started with Construction Requests\n\nThe Getting Started Item should contain a link to a Knowledge Article.\n\nWhat type of item would you use to satisfy the requirement for the Getting Started Item?\n\n\n\n\nNosso cliente é um data center. Eles têm um departamento de construção que constrói espaços para novos clientes. Os representantes de contas do cliente são responsáveis por iniciar os pedidos de construção. As diretrizes são extensas sobre como completar a documentação do pedido de construção.Seu cliente deseja que o catálogo contenha dois itens:\n1. Pedido de construção\n2. Introdução aos Pedidos de Construção\n\nO item Introdução deve conter um link para um Artigo de Conhecimento.\n\nQue tipo de item você usaria para satisfazer o requisito do item Introdução?",
    "options": [
      "Knowledge Item",
      "Record Producer",
      "Content Item",
      "Order Guide",
      "Catalog Item"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 66,
    "questionEn": "What is an example of a good use case for an Order Guide?",
    "questionPt": "Qual é um exemplo de um bom caso de uso para um order guide",
    "options": [
     
      "Order a set of Dishes",
      "Order a Custom Automobile",
      "Order a Technical Consultation",
      "Order a Couch",
      "Order a case of Laundry Soap",
       
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 67,
    "questionEn": "Your customer has a catalog item for Request VPN. They would like to adjust the cart layout for only the VPN item, so the Quantity field is not displayed. How would you meet this requirement?",
    "questionPt": "Seu cliente tem um item no catálogo para Solicitar VPN. Eles gostariam de ajustar o layout do carrinho apenas para o item VPN, de modo que o campo de Quantidade não seja exibido. Como você atenderia a esse requisito?",
    "options": [
      "On the Cart Layout, Columns tab, unselect the Quantity column",
      "On the Catalog Item, Columns tab, unselect the Quantity column",
      "On the Catalog Item, Advanced View, unselect Use cart layout, select No quantity",
      "On the Catalog, Advanced View, unselect Use cart layout, select No quantity",
      "On the Catalog Item, Cart Layout Related List set the Quantity record to Inactive"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 68,
    "questionEn": "A manager wants to run a report on the Computer catalog items, to see how many requests are being made for the add-on extra memory, as compared with those requiring only the base memory. How would you meet this requirement?",
    "questionPt": "Um gerente deseja executar um relatório sobre os itens do catálogo de Computadores, para ver quantos pedidos estão sendo feitos para o complemento de memória extra, em comparação com aqueles que requerem apenas a memória básica. Como você atenderia a essa solicitação?",
    "options": [
      
      "Build report on SC Task table, Group by Variables for Computer > Extra memory",
      "Build report on Requested Item table, Group by Variables for Computer > Extra memory",
      "Build report on Task table, Group by Variables for Computer > Extra memory",
      "Build report on Request table, Group by Variables for Computer > Extra memory",
      "Build report on Catalog Item table, Group by Variables for Computer > Extra memory"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 69,
    "questionEn": "Which record type would you use for an Ask a Question form that would generate an Incident?",
    "questionPt": "Qual tipo de registro você usaria para um formulário de Pergunte uma Pergunta que geraria um Incidente?",
    "options": [
     
      "Record Producer",
      "Order Guide",
      "Linked Item",
      "Catalog Item",
     
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 70,
    "questionEn": "Which of the following objects on the Shopping Cart Widget can be displayed or hidden using Maintain Cart Layouts settings? (Choose two.)",
    "questionPt": "Qual das seguintes opções no Widget do Carrinho de Compras pode ser exibida ou ocultada usando as configurações de Manter Layouts do Carrinho? (Escolha duas.)",
    "options": [
      "Quantity",
      "Requested by",
      "Price",
      "Shipping Address"
    ],
    "correctAnswers": [0,2],
    "multipleChoice": true
  },
  {
    "id": 71,
    "questionEn": "Your customer wants a catalog to contain two items:\n1. A request with 1 approval and 2 fulfillment tasks\n2. A link to a knowledge article\nWhat type of item would you use to satisfy the requirement for the Construction request?",
    "questionPt": "2. A link to a knowledge article\n\nWhat type of item would you use to satisfy the requirement for the Construction request?\n\n\n\nSeu cliente deseja que um catálogo contenha dois itens:\n\n1. Uma solicitação com 1 aprovação e 2 tarefas de fulfillment\n\n2. Um link para um artigo de conhecimento\n\nQue tipo de item você usaria para satisfazer a exigência da solicitação de Construção?",
    "options": [
      "Catalog Item",
      "Content Item",
      "Record Producer",
      "Order Guide",
      
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 72,
    "questionEn": "When building multiple catalog items, which components would you evaluate for consolidation and re-use? (Choose two.)",
    "questionPt": "Ao construir vários itens de catálogo, quais componentes você avaliaria para consolidação e reutilização? (Escolha dois.)",
    "options": [
    
      "Sets of Variables",
      "Entitlements",
      "Icons",
      "Flows and Subflows"
    ],
    "correctAnswers": [0,3],
    "multipleChoice": false
  },
  {
    "id": 73,
    "questionEn": "Which record type would you use for a Computer request?",
    "questionPt": "Qual tipo de registro você usaria para um pedido de computador?",
    "options": [
    
      "Record Producer",
      "Catalog Item",
      "Content Item",
      "Order Guide"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 74,
    "questionEn": "What are the different ways a user can locate items in a service catalog? (Choose two.)",
    "questionPt": "Quais são as diferentes maneiras de um usuário localizar itens em um catálogo de serviços? (Escolha duas.)",
    "options": [
      "Use the search on the catalog or portal",
      "Navigate through the categories",
      "Use the Top Request or Popular Items widget",
      "Use the application navigator"
    ],
    "correctAnswers": [0,1],
    "multipleChoice": false
  },
  {
    "id": 75,
    "questionEn": "Your customer complains that when their users click on the Configuration Item magnifier from the Incident form, that they are overwhelmed by the volume of CIs to choose from. They want to exclude certain types of CIs from the CI lists on the Incident. Problem and Change forms. What do you recommend to your customer?",
    "questionPt": "Seu cliente reclama que, quando seus usuários clicam na lupa do Item de Configuração no formulário de Incidente, ficam sobrecarregados pelo volume de ICs disponíveis para escolha. Eles querem excluir certos tipos de ICs das listas de ICs nos formulários de Incidente, Problema e Mudança. O que você recomenda ao seu cliente?",
    "options": [
   
      "Add a Show field to the base CMDB table: Check the Show box on those CI records they want to display; make reference qualifier to display only the CIs with show=true",
      "Use the Principal CI class checkbox, to identify the CI classes that they want visible on the Incident, Problem, and Change forms",
      "Create an Access control to hide the unnecessary CIs from the itil users",
      "Make a show/hide UI action to show only the desired CIs to the itil users",
     
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 76,
    "questionEn": "Incidents can be created and managed in the workspace, using UI layouts that are tailored to different personas, processes, and interfaces. Examples include: \n• Default \n• Major incidents\n• Self Service\n• Mobile\nWhat are these UI layouts called in the Now Platform?"
    ,"questionPt": "",
    "options": [
   
      "Form Layouts",
      "Workspaces",
      "Forms",
      "Form Designs",
      "Views"
     
    ],
    "correctAnswers": [4],
    "multipleChoice": false
  },
  {
    "id": 77,
    "questionEn": "The Major Incident Management (MIM) application is linked to the Incident management process, but the records have an additional set of States. What are these MI States?",
    "questionPt": "O que você usaria para criar registros de Incidentes, com base em e-mails enviados por usuários ou sistemas?",
    "options": [
     
      "Proposed, Accepted, Rejected, Cancelled",
      "Proposed, Accepted, Rejected, Reopened",
      "Proposed, Received, eCAB Convened, Closed",
      "New, Work in progress, Escalated, Communicated"
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 78,
    "questionEn": "What would you use to create Incident records, based on emails sent by users or systems?",
    "questionPt": "O que você usaria para criar registros de Incidentes, com base em e-mails enviados por usuários ou sistemas?",
    "options": [
     
      "Record Producer",
      "Inbound Flow Action",
      "Data Collection Job",
      "D. Transform Map"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 79,
    "questionEn": "When you activate the ITSM Roles plugin, what additional granular roles are created for the Incident application? (Choose two.)",
    "questionPt": "Quando você ativa o plugin de Funções ITSM, quais funções granulares adicionais são criadas para o aplicativo de Incidentes? (Escolha duas.)",
    "options": [
      
      "sn_incident_update",
      "sn_incident_read",
      "sn_incident_write",
      "sn_incident_insert"
    ],
    "correctAnswers": [1,2],
    "multipleChoice": true
  },
  {
    "id": 80,
    "questionEn": "What are some good practices for guiding your customers' use of Notifications? (Choose three.)",
    "questionPt": "Quais são algumas boas práticas para orientar o uso de Notificações pelos seus clientes? (Escolha três.)",
    "options": [
      
      "Make sure Notification requirements and test plans are in the project scope from the start",
      "Get input from the Marketing department, regarding the format of customer/caller-facing notifications",
      "Use templates to ensure consistency and ease of configuration",
      "Use incident.itil.role template as the master template to build all other ITSM templates",
      "When possible, maximize the quantity of email updates to customers"
    ],
    "correctAnswers": [0,1,2],
    "multipleChoice": true
  },
  {
    "id": 81,
    "questionEn": "Your customer wants to use Incident Tasks on Incident Records. But for efficiency reasons, they want to automatically close all Incident Tasks when the parent Incident is closed or canceled. How could you meet this requirement? (Choose two.)",
    "questionPt": "Seu cliente deseja usar Tarefas de Incidente em Registros de Incidente. Mas, por razões de eficiência, eles querem fechar automaticamente todas as Tarefas de Incidente quando o Incidente pai for fechado ou cancelado. Como você poderia atender a esse requisito? (Escolha duas.)",
    "options": [
      "On Incident Properties, for Autoclose Incident Tasks, select Yes",
      "Edit system property com.snc.incident.autoclose.basedon.resolved_at",
      "Enable system property com.snc.incident.incident_task.closure",
      "On Incident Properties, for Close open Incident Tasks, when an Incident is closed or canceled, select Yes"
    ],
    "correctAnswers": [2,3],
    "multipleChoice": true
  },
  {
    "id": 82,
    "questionEn": "Incident management includes limited functionality for what advanced reporting capability?",
    "questionPt": "A gestão de incidentes inclui funcionalidade limitada para qual capacidade de relatórios avançados?",
    "options": [
    
      "Analytics Dashboards",
      "Performance Analytics",
      "Machine Learning Metrics",
      "KPI Reports"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 83,
    "questionEn": "Your client indicates they would like a way to designate VIP callers on an incident form. How would you accomplish this?",
    "questionPt": "Seu cliente indica que gostaria de uma maneira de designar chamadores VIP em um formulário de incidente. Como você faria isso?",
    "options": [
    
      "VIP Flag dictionary entry",
      "VIP Flash action script",
      "VIP Flag field style",
      "VIP Flag reference decorator"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 84,
    "questionEn": "What happens if an agent hovers over the reference icon next to the caller field on an incident record and there is not a sys_popup view defined for the [sys_user] table?",
    "questionPt": "O que acontece se um agente passar o mouse sobre o ícone de referência ao lado do campo do chamador em um registro de incidente e não houver uma visão sys_popup definida para a tabela [sys_user]?",
    "options": [
     
      "The default view of the User form is displayed",
      "An error is displayed",
      "Only dot-walked fields will be displayed",
      "There will be no reference icon if there is no sys_popup defined", 
     
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
   {
    "id": 85,
    "questionEn": " If the Assignment group is empty on an incident record, what happens when an agent who is a member of multiple user groups clicks the Assign to me UI action?",
    "questionPt": "Se o grupo de Atribuição estiver vazio em um registro de incidente, o que acontece quando um agente que é membro de vários grupos de usuários clica na ação de interface do usuário Atribuir a mim?",

        "options": [
     
      "An error is displayed indicating the agent must manually assign the incident",
      "The Assignment group field will not populate",
      "The Assignment group field automatically populates with the agent's primary group",
      "The agent is prompted to select the Assignment group", 
     
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 86,
    "questionEn": "Where are the timeframe conditions for sending an SLA breach warning notification defined?",
    "questionPt": "Onde estão definidas as condições de prazo para enviar uma notificação de violação do SLA?",
    "options": [
     
      "SLA definition record",
      "Default SLA flow",
      "SLA Properties application",
      "SLA trigger conditions"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 87,
    "questionEn": "Your customer wants to give secure access to business users to view problem records and reports for the products they support. When you install the ITSM roles plugin, what additional problem role is installed to support this requirement?",
    "questionPt": "Seu cliente deseja fornecer acesso seguro a usuários de negócios para visualizar registros de problemas e relatórios dos produtos que eles suportam. Quando você instala o plugin de funções ITSM, qual função adicional de problema é instalada para atender a essa necessidade?",
    "options": [
      
      "sn_business_user",
      "sn_problem_read",
      "sn_service_owner",
      "sn_problem_write",
      "sn_problem_business_user"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 88,
    "questionEn": "A tester has submitted a bug report, because at no point in the Problem lifecycle, does the Create Known Error article link appear under Related Links. Also, they notice there is no Known Error knowledge base in the instance. What might be the cause of this?",
    "questionPt": "Um testador enviou um relatório de erro, porque em nenhum momento no ciclo de vida do Problema, o link do artigo Criar Erro Conhecido aparece em Links Relacionados. Além disso, eles notaram que não há uma base de dados de Erros Conhecidos na instância. Qual pode ser a causa disso?",
    "options": [
        
      "The customer did not pay the bill for Knowledge management",
      "The Problem Management Best Practice - Madrid - Knowledge Integration plugin has not been activated",
      "Tester is not impersonating the Problem Coordinator",
      "The sn_known_error_write role is required to see the Create Known Error article link",
      "The requirement was not in the stories"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 89,
    "questionEn": "A new problem manager wants a high-level view of the activities in problem management. What module do you recommend?",
    "questionPt": "Um novo gerente de problemas quer uma visão geral das atividades em gerenciamento de problemas. Qual módulo você recomenda?",
    "options": [
       
      "Problem > Homepage",
      "Problem > Overview",
      "ITIL Manager > Homepage",
      "Problem > Process Health Dashboard",
      "Problem > Dashboard"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 90,
    "questionEn": "A new Problem Coordinator accidentally created several problem investigations that need to be deleted. What role is required to delete a problem record?",
    "questionPt": "Um novo Coordenador de Problemas acidentalmente criou várias investigações de problemas que precisam ser deletadas. Qual é o papel necessário para deletar um registro de problema?",
    "options": [
      
      "sn_problem_delete",
      "itil_manager",
      "problem_manager",
      "problem_admin",
      "problem_coordinator"
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 91,
    "questionEn": "Why don't Problem records automatically move from Resolved to Closed after the fix is implemented?",
    "questionPt": "Por que os registros de Problemas não mudam automaticamente de Resolvido para Fechado após a implementação da correção?",
    "options": [
     
      "It is designed to follow the ITIL4 standard",
      "There is a scheduled job that automatically moves Resolved problems to Closed after 7 days",
      "There is no Closed state. Problem records are moved to the Completed",
      "It is good practice to monitor fixes implemented, to ensure the underlying issues are resolved, before closing a problem record"
    ],
    "correctAnswers": [4],
    "multipleChoice": false
  },
  {
    "id": 92,
    "questionEn": "In the life of a Problem record, there are opportunities to click the Re-Analyze button and move backward in the lifecycle. When you click the Re-Analyze button, what state is set on the problem record?",
    "questionPt": "Na vida de um registro de Problema, há oportunidades para clicar no botão Re-analisar e voltar no ciclo de vida. Quando você clica no botão Re-analisar, qual estado é definido no registro do problema?",
    "options": [
     
      "Assess",
      "Draft",
      "Root Cause Analysis",
      "Fix in Progress"
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 93,
    "questionEn": "The key stakeholder for your ITSM implementation wants to have SLAs on every Task record. What advice do you give regarding SLAs on Problem records?",
    "questionPt": "A principal parte interessada na implementação do seu ITSM deseja ter SLAs em cada registro de Tarefa. Que conselho você dá em relação aos SLAs em registros de Problema?",
    "options": [
    
      "SLAs are essential to problem management, as support specialists need to quickly identify root causes",
      "SLAs may be counterproductive to problem management, as the key objective is to permanently fix an error no matter how long that may take",
      "SLAs are available for problem management but require custom code",
      "SLAs are recommended in the ITIL framework for problem management"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 94,
    "questionEn": "What are two effective measures of performance for the Problem Management process? (Choose two.)",
    "questionPt": "Quais são duas medidas eficazes de desempenho para o processo de Gerenciamento de Problemas? (Escolha duas.)",
    "options": [
      "Problems older than 30 days by Priority and State",
      "Number of Problems that have Breached SLAs",
      "Percentage of Problem Resolution within SLA by Category",
      "Average Problem Resolution Time"
    ],
    "correctAnswers": [0,3],
    "multipleChoice": true
  },
  {
    "id": 95,
    "questionEn": "Your customer has an external system, that is used to perform changes. Your customer wants to capture these changes in your instance for reporting and CMDB maintenance purposes.\nWhat baseline Change Model supports this scenario?",
    "questionPt": "Seu cliente tem um sistema externo, que é usado para realizar alterações. Seu cliente deseja capturar essas alterações em sua instância para fins de relatórios e manutenção do CMDB.\n\nQual modelo de mudança de base apóia esse cenário?",
    "options": [
     
      "Cloud Infrastructure",
      "Automated Changes",
      "Retroactive Changes",
      "Change Registration",
      "Unauthorized Changes"
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 96,
    "questionEn": "Where are the technical approvals defined, that are executed in the Change - Normal - Assess flow?",
    "questionPt": "Onde estão definidas as aprovações técnicas que são executadas no fluxo de Mudança - Normal - Avaliar?",
    "options": [
     
      "Change Approval Policy",
      "Change Assess Approval Subflow",
      "Change Approval Matrix",
      "Change Approval Subflow",
    
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 97,
    "questionEn": "What is the trigger for the Change - Normal - Assess Flow?",
    "questionPt": "Qual é o gatilho para a Mudança - Normal - Avaliar Fluxo?",
    "options": [
      
     
      "A Change request using the Normal Change model is moved to the Assess state",
      "A Change request using the Normal Change model is created",
      "A Change request using the Normal Change model is Low Risk and is moved to the Assess state",
      "A Change request using the Normal Change model is Assigned to a group",
      
      
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 98,
    "questionEn": "A CAB manager is looking for a way to make their CAB meetings more organized and efficient. They want to be able to:\n• Define CAB meeting agendas\n• View change calendars\n• Review, Approve, or Reject changes directly from the change application\nWhat feature would you recommend?",
    "questionPt": "• View change calendars\n\n• Review, Approve, or Reject changes directly from the change application\n\nWhat feature would you recommend?\n\n\n\nUm gerente de CAB está buscando uma maneira de tornar suas reuniões de CAB mais organizadas e eficientes. Ele deseja poder:\n\n• Definir as pautas das reuniões do CAB• Visualizar calendários de mudanças\n\n• Revisar, Aprovar ou Rejeitar mudanças diretamente do aplicativo de mudanças\n\nQue recurso você recomendaria?",
    "options": [
     
      "Change CAB Dashboard",
      "CMDB Health Dashboard",
      "CAB Taskboard",
      "Change Overview",
      "CAB Workbench"
    ],
    "correctAnswers": [4],
    "multipleChoice": false
  },
  {
    "id": 99,
    "questionEn": "What are the Release types available on the baseline release record?",
    "questionPt": "Quais são os tipos de lançamento disponíveis no registro de lançamento base?",
    "options": [
      "Standard, Normal, Prototype, Patch",
      "Major, Minor, Upgrade, Emergency, Maintenance, Patch",
      "Standard, Normal, Emergency",
      "Alpha, Beta, Snapshot, Nightly, Milestone, Release Candidate"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 100,
    "questionEn": "On a Normal Change Model, what are some examples of the Model State Transitions that are defined for the Authorize state?",
    "questionPt": "Em um Modelo de Mudança Normal, quais são alguns exemplos das Transições de Estado do Modelo definidas para o estado de Autorizar?",
    "options": [
    
      "Authorize to Draft, Authorize to Assess, Authorize to Review",
      "Authorize to Implement, Authorize to Assess, Authorize to Review",
      "Authorize to Canceled, Authorize to New, Authorize to Scheduled",
      "Authorize to Scheduled, Authorize to Closed, Authorize to New"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 101,
    "questionEn": "What are the components of a Flow Action?",
    "questionPt": "Quais são os componentes de uma Ação de Fluxo?",
    "options": [
  
      "Inputs, Processes, Subprocesses, and Outputs",
      "Processes, Subprocess, and Action Steps",
      "Indexes, Processes, and Outputs",
      "Inputs, Action Steps, and Outputs"
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 102,
    "questionEn": "When creating a catalog, which field specifies who is able to create, modify, and publish items in the catalog ?",
    "questionPt": "Ao criar um catálogo, qual campo especifica quem pode criar, modificar e publicar itens no catálogo?",
    "options": [
     
      "Item Admins",
      "Item Owners",
      "Authors",
      "Editors"
    ],
    "correctAnswers": [
     3
    ],
    "multipleChoice": false
  },
  {
    "id": 103,
    "questionEn": "On the Unauthorized Change Properties module what can you configure ? (Choose two.)",
    "questionPt": "No módulo Alterar Propriedades Não Autorizadas, o que você pode configurar? (Escolha dois.)",
    "options": [
     
      "Unauthorized Change Dashboard",
      "Enable/Disable creation of Unauthorized changes",
      "Maximum number of unauthorized change records for a CI",
      "CI classes to monitor"
    ],
    "correctAnswers": [
     1,3
    ],
    "multipleChoice": true
  },
  {
    "id": 104,
    "questionEn": "Which Agent workspace feature gives agents automatic search results that show possible solutions for records they open ?",
    "questionPt": "Qual recurso do espaço de trabalho do Agente fornece resultados de busca automáticos que mostram possíveis soluções para os registros que eles abrem?",
    "options": [
      
      "Knowledge Bases",
      "Agent Assist",
      "Chat Bot",
      "Intelligent Agent",
      "Related Search Results"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 105,
    "questionEn": "When using Agent assist in the Agent workspace, what are examples of possible solutions can be automatically searched and displayed ? (Choose five.)",
    "questionPt": "Ao usar o Assistente de Agente no espaço de trabalho do Agente, quais são exemplos de soluções possíveis que podem ser pesquisadas e exibidas automaticamente? (Escolha cinco.)",
    "options": [
    
      "Incidents",
      "Changes",
      "Knowledge",
      "SQL Queries",
      "Cases",
      "Runbook Actions",
      "Problems"
    ],
    "correctAnswers": [
      0,1,2,4,6
    ],
    "multipleChoice": true
  },
  {
    "id": 106,
    "questionEn": "Your customer is using the baseline Create Incident Catalog Item and would like to add a few additional input fields. How should you update the catalog item ?",
    "questionPt": "Seu cliente está usando o item do catálogo de criação de incidentes padrão e gostaria de adicionar alguns campos de entrada adicionais. Como você deve atualizar o item do catálogo?",
    "options": [
     
      "Edit in Form Designer",
      "Edit in Item Designer",
      "Edit in Catalog Item Designer",
      "Edit in Catalog Builder"
    ],
    "correctAnswers": [
     3
    ],
    "multipleChoice": false
  },
  {
    "id": 107,
    "questionEn": "A change user complains that with the new Preapproved tab, they have to search through many options to find the Reboot Windows Server change. Since they use this change several times per day, it is inconvenient.\nWhat should you suggest to make it easier for the change user ?",
    "questionPt": "Um usuário de mudanças reclama que, com a nova aba de Pré-aprovados, é necessário procurar entre muitas opções para encontrar a mudança de Reiniciar o Servidor Windows. Como eles usam essa mudança várias vezes por dia, isso é inconveniente.\n\nO que você sugeriria para facilitar para o usuário de mudanças?",
    "options": [
   
    
      "Use the keyword search",
      "Make a Favorite",
      "Use the Pin feature",
      "Drag the change tile to the Navigation pane"
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  },
  {
    "id": 108,
    "questionEn": "Which of the following are users able to do when configuring stages in Flow Designer ? (Choose two.)",
    "questionPt": "Quais das seguintes opções os usuários podem fazer ao configurar estágios no Flow Designer? (Escolha dois.)",
    "options": [
        
      "Define the stage set in a subflow",
      "Display the stages to the requester",
      "Import a copy of a pre-defined stage set",
      "Create any number of stages"

    ],
    "correctAnswers": [2,3],
    "multipleChoice": true
  },
  {
    "id": 109,
    "questionEn": "In the ServiceNow native platform, the service catalog can be accessed via the Self-Service > Service Catalog module. Your customer wants to make modifications to this home page, to add, remove and re-arrange the categories.\nUsers with what roles can make these edits? (Choose two.)",
    "questionPt": "Na plataforma nativa do ServiceNow, o catálogo de serviços pode ser acessado pelo módulo Autoatendimento > Catálogo de Serviços. Seu cliente deseja fazer modificações nesta página inicial, para adicionar, remover e reorganizar as categorias.\n\nUsuários com quais funções podem fazer essas edições? (Escolha duas.)",
    "options": [
         
      "admin",
      "sn_catalog_homepage_write",
      "catalog_admin",
      "catalog_editor",
      "sc_catalog_admin"
    ],
    "correctAnswers": [ 0,2 ],
    "multipleChoice": true
  },
  {
    "id": 110,
    "questionEn": "In request fulfillment, approvals can be required before a request can be fulfilled. Your customer is worried about requests getting stuck in the process flow, if the approver is on extended absence from the office.\nWhat can you suggest to alleviate this concern? (Choose two.)",
    "questionPt": "Na realização de pedidos, aprovações podem ser necessárias antes que um pedido possa ser atendido. Seu cliente está preocupado com pedidos que podem ficar parados no fluxo de processo, se o aprovador estiver ausente por um longo período do escritório.\n\nO que você pode sugerir para aliviar essa preocupação? (Escolha duas opções.)",
    "options": [
    
    
      "The approver can set their approval notifications to auto-reply with “approved” in the subject line",
      "The approval can be defined as a group approval, where any member of the group can approve",
      "The approver can use the Delegate module to assign a person to approve on their behalf, while they are away from the office",
      "The approver can set their approval notifications to forward to their personal email address"
    ],
    "correctAnswers": [1,2],
    "multipleChoice": true
  },
  {
    "id": 111,
    "questionEn": "Which type of catalog item may be found in a Service Catalog ?",
    "questionPt": "Que tipo de item de catálogo pode ser encontrado em um Catálogo de Serviços?",
    "options": [
     
      "Record Producers",
      "Requested Items",
      "Execution Plans",
      "Categories",
    
    ],
    "correctAnswers": [0],
    "multipleChoice": false
  },
  {
    "id": 112,
    "questionEn": "Your customer needs help defining Category values for the Problem records. What approach should you suggest ?  (Choose two.)",
    "questionPt": "Seu cliente precisa de ajuda para definir os valores de Categoria para os registros de Problemas. Que abordagem você deve sugerir? (Escolha duas.)",
    "options": [
    
      "Define categories based on the customer’s CMDB classes",
      "Re-use existing categories from legacy systems",
      "Re-use existing categories from incident management",
      "Define categories based on ITIL problem taxonomy"
    ],
    "correctAnswers": [
      0,2
    ],
    "multipleChoice": true
  },
  {
    "id": 113,
    "questionEn": "Released in Quebec, what tool enables you to delegate the creation and maintenance of common and simple use case Catalog Items to business users ?",
    "questionPt": "Lançado em Quebec, qual ferramenta permite que você delegue a criação e manutenção de Itens de Catálogo de casos de uso comuns e simples aos usuários de negócios?",
    "options": [
     
      "Catalog Item Builder",
      "Catalog Wizard",
      "Catalog Builder",
      "Catalog Designer"
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  },
  {
    "id": 114,
    "questionEn": "What would you use to create a New Hire Employee request which would allow you to order your workstation and company mobile ?",
    "questionPt": "O que você usaria para criar um pedido de Novos Funcionários que lhe permitiria solicitar sua estação de trabalho e o celular da empresa?",
    "options": [
      
      "Content Item",
      "Order Guide",
      "Record Producer",
      "Catalog Item",
      "Knowledge item"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 115,
    "questionEn": "The Problem Manager wants the Problem Coordinators to be able to Re-analyze a Completed Problem.\nWhich module could they use to make this change ?",
    "questionPt": "O Gerente de Problemas quer que os Coordenadores de Problemas possam Re-analisar um Problema Concluído.\n\nQual módulo eles poderiam usar para fazer essa mudança?",
    "options": [
    
    
      "State Management > State Models",
      "Problem > Administration » Problem Properties",
      "System UI > Form Actions",
      "System UI > UI Actions",
      "System UI > UI Action Groups"
    ],
    "correctAnswers": [
    2
    ],
    "multipleChoice": false
  },
  {
    "id": 116,
    "questionEn": "Which capability provides visibility to data joined between multiple tables ?",
    "questionPt": "Qual capacidade fornece visibilidade aos dados unidos entre várias tabelas?",
    "options": [
     
    
      "Metric Tables",
      "Breakdown Sources",
      "Published Reports",
      "Custom Tables",
      "Database Views"
    ],
    "correctAnswers": [
      4
    ],
    "multipleChoice": false
  },
  {
    "id": 117,
    "questionEn": "What process is responsible for defining and managing the lifecycle of all catalog items, by producing and maintaining the services in the catalog and ensuring that a central, accurate, and consistent source of data is provided ?",
    "questionPt": "Qual processo é responsável por definir e gerenciar o ciclo de vida de todos os itens do catálogo, produzindo e mantendo os serviços no catálogo e garantindo que uma fonte central, precisa e consistente de dados seja fornecida?",
    "options": [
     
      "Catalog item management",
      "Service mapping",
      "Service portfolio management",
      "Service catalog management"
    ],
    "correctAnswers": [
      3
    ],
    "multipleChoice": false
  },
  {
    "id": 118,
    "questionEn": "On a Change Approval Definition record, what does the ‘wait for’ condition define ?",
    "questionPt": "Em um registro de Definição de Aprovação de Mudança, o que a condição 'aguardar' define?",
    "options": [
      "The number or percentage of users from the approval group that must approve the change",
      "The state the change must be in before the approval notifications can be sent",
      "The fields that must be populated before the approval can be requested",
      "Whether the change approval is sent to an individual user or a group",
     
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 119,
    "questionEn": "Risk is configured by default, to calculate Risk = High for a change that is scheduled with only 3 days lead time. Your customer’s change policy requires that changes be requested with 5 days lead time.\nHow would you satisfy this requirement ?",
    "questionPt": "O risco é configurado por padrão para calcular o Risco = Alto para uma mudança que está programada com apenas 3 dias de antecedência. A política de mudanças do seu cliente exige que as mudanças sejam solicitadas com 5 dias de antecedência.\n\nComo você atenderia a esse requisito?",
    "options": [
      
      "Update the Risk Condition for Insufficient lead time",
      "Update the Calculate Risk UI Action",
      "Update the Risk Matrix for insufficient lead time",
      "Update the Risk Assessment Matrix for Insufficient lead time",
      "Update the Risk Property for Insufficient lead time",
      
    ],
    "correctAnswers": [
     0
    ],
    "multipleChoice": false
  },
  {
    "id": 120,
    "questionEn": "Which should be used to explore the entire hierarchy and table definitions of the Configuration Management Database Classes ?",
    "questionPt": "Qual deve ser usado para explorar toda a hierarquia e definições de tabela das Classes do Banco de Dados de Gerenciamento de Configuração?",
    "options": [
      
     
      "CI Class Manager",
      "Application Menus",
      "Dependency View",
      "Reports",
     
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 121,
    "questionEn": "What tools are available to the assignee to help resolve an Incident ? (Choose two.)",
    "questionPt": "Quais ferramentas estão disponíveis para o designado ajudar a resolver um Incidente? (Escolha duas.)",
    "options": [
     
      "Knowledge Articles",
      "Workarounds",
      "Enterprise CMDB Dashboard",
      "CI Class Manager",
      "Incident Overview Dashboard"
    ],
    "correctAnswers": [
    0,1
    ],
    "multipleChoice": true
  },
  {
    "id": 122,
    "questionEn": "How are Releases related to Projects ?",
    "questionPt": "Como as Releases estão relacionadas aos Projetos?",
    "options": [
     
      "Projects need to be completed before releases can be defined",
      "Project tasks and Release tasks are interchangeable",
      "Projects are used to do root cause analysis for releases",
      "Project features are components of a release",
      "Projects can be part of one or more releases"
    ],
    "correctAnswers": [
     4
    ],
    "multipleChoice": false
  },
  {
    "id": 123,
    "questionEn": "When defining catalog categories and subcategories, what are some good practices to follow ? (Choose two.)",
    "questionPt": "Ao definir categorias e subcategorias de catálogo, quais são algumas boas práticas a seguir? (Escolha duas.)",
    "options": [
      
      "Do not go to deep with subcategories: go only 1-2 levels deep",
      "Align categories with CMDB classes where possible",
      "Keep the number of top-level categories to 8-10",
      "Remember that items can only be assigned to one category"
    ],
    "correctAnswers": [
     0,2
    ],
    "multipleChoice": true
  },
  {
    "id": 124,
    "questionEn": "Which type of catalog item should be used to create an incident record from the portal ?",
    "questionPt": "Qual tipo de item de catálogo deve ser usado para criar um registro de incidente no portal?",
    "options": [
      "Request Item",
      "Record Producer",
      "Order Guide",
      "Incident Template",
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },  {
    "id": 125,
    "questionEn": "What are the different ways a user can provide feedback on a knowledge article ? (Choose four.)",
    "questionPt": "Quais são as diferentes maneiras de um usuário fornecer feedback sobre um artigo de conhecimento? (Escolha quatro.)",
    "options": [
      
      "Helpful ?",
      "Flag Article",
      "10 Star scale",
      "Comment on Article",
      "Pin Article",
      "5 Star scale",
    ],
    "correctAnswers": [
     0,1,3,5
    ],
    "multipleChoice": true
  },
  {
    "id": 126,
    "questionEn": "Which module is a useful starting point for a manager to view current state operational information for Incident management ?",
    "questionPt": "Qual módulo é um ponto de partida útil para um gerente visualizar informações operacionais do estado atual para a gestão de Incidentes?",
    "options": [
      "Manager Workspace",
      "CMDB Health Dashboard",
      "Incident > Overview",
      "Critical Incidents Map"
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  },
  {
    "id": 127,
    "questionEn": "Your customer has built a mature knowledge base, with articles targeted to internal audiences -which are technical. Other articles are written for end users, with simple instructions. From the Incident form, the agents would like to be able to identify which articles are visible to the callers What feature would you use, to satisfy this requirement ?",
    "questionPt": "Seu cliente construiu uma base de conhecimento madura, com artigos voltados para públicos internos - que são técnicos. Outros artigos são escritos para usuários finais, com instruções simples. No formulário de Incidente, os agentes gostariam de poder identificar quais artigos estão visíveis para os chamados. Que recurso você utilizaria para atender a essa necessidade?",
    "options": [
      "Search as User",
      "Internal/External Highlighting",
      "User Only View",
      "Show User Viewable",
    
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 128,
    "questionEn": "When using the Knowledge - instant Retire workflow, how does the Valid to date enact a Knowledge article ?",
    "questionPt": "Ao usar o fluxo de trabalho Knowledge - Retirada instantânea, como a data Válido até ativa um artigo de conhecimento?",
    "options": [
    
      "On Valid to date, retire notification is sent to the Knowledge base owner",
      "On Valid to date, the article is archived",
      "On Valid to date, article is automatically retired",
      "On Valid to date, retire notification is sent to the Knowledge article author"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 129,
    "questionEn": "Which interface is designed for tier 1 IT agents who solve internal or external customer issues ?",
    "questionPt": "Qual interface é projetada para agentes de TI de nível 1 que resolvem problemas de clientes internos ou externos?",
    "options": [
    
      "Incident Overview",
      "ITSM Dashboard",
      "IT Service Management Workspace (Agent Workspace)",
      "ITIL Homepage"
    ],
    "correctAnswers": [
     2
    ],
    "multipleChoice": false
  },
  {
    "id": 130,
    "questionEn": "Which role would give you access to the CI Class Manager ?",
    "questionPt": "Qual função lhe daria acesso ao Gerenciador de Classes de CI?",
    "options": [
    
      "class_manager",
      "ecmdb_admin",
      "ecmdb",
      "sn_class_manager"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 131,
    "questionEn": "Which field from the configuration item will automatically populate in the Assignment group field of an incident record ?",
    "questionPt": "Qual campo do item de configuração será preenchido automaticamente no campo do grupo de atribuição de um registro de incidente?",
    "options": [
    
      "Approval group",
      "Change group",
      "Support group",
      "Managed by",
      
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  }, {
    "id": 132,
    "questionEn": "Your Problem Manager has a structured problem management process, which includes a final review of the solution implemented and of the data regarding incident reduction. When a problem is resolved, after implementing a fix, they want the Post Fix Review task to be automatically created and assigned to the Problem assignee. What feature would you use to meet this requirement ?",
    "questionPt": "Seu Gerenciador de Problemas tem um processo de gerenciamento de problemas estruturado, que inclui uma revisão final da solução implementada e dos dados sobre a redução de incidentes. Quando um problema é resolvido, após a implementação de uma correção, eles desejam que a tarefa de Revisão Pós-Correção seja criada automaticamente e atribuída ao responsável pelo Problema. Que recurso você usaria para atender a essa necessidade?",
    "options": [
    
      "problem_admin",
      "problem_coordinator",
      "problem_task_analyst",
      "itil_admin",
      "security_admin",
      
    ],
    "correctAnswers": [
      0,1
    ],
    "multipleChoice": true
  },
  {
    "id": 133,
    "questionEn": "Your Problem Manager has a structured problem management process, which includes a final review of the solution implemented and of the data regarding incident reduction. When a problem is resolved, after implementing a fix, they want the Post Fix Review task to be automatically created and assigned to the Problem assignee.\nWhat feature would you use to meet this requirement ?",
    "questionPt": "Seu Gerenciador de Problemas tem um processo de gerenciamento de problemas estruturado, que inclui uma revisão final da solução implementada e dos dados sobre a redução de incidentes. Quando um problema é resolvido, após a implementação de uma correção, eles desejam que a tarefa de Revisão Pós-Correção seja criada automaticamente e atribuída ao responsável pelo Problema.\n\nQue recurso você usaria para atender a essa necessidade?",
    "options": [
   
      "Flow Designer",
      "Workflow Dashboard",
      "State Model",
      "Action Modeler",
      "Task Creator"
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 134,
    "questionEn": "What baseline Change Flows support the baseline Normal Change model ?",
    "questionPt": "Quais Fluxos de Mudança de base suportam o modelo de Mudança Normal da base?",
    "options": [
     
      "Change - Normal - New, Change - Normal - Assess, Change - Normal - Implement, Change - Implementation tasks",
      "Change - Normal - Assess, Change - Normal - Authorize, Change - Normal - Implement Change - Implementation tasks",
      "Change - Normal - New, Change - Normal - Review, Change - Normal - Close, Change - Implementation tasks",
      "Change - Normal - Assess, Change - Normal - Authorize, Change - Normal - Close, Change - Implementation tasks"
    ],
    "correctAnswers": [1],
    "multipleChoice": false
  },
  {
    "id": 135,
    "questionEn": "Under what circumstances, should you use the Communicate workaround Related Link on the Problem record ?",
    "questionPt": "Em quais circunstâncias você deve usar a solução alternativa de Comunicação no link relacionado do registro de Problema?",
    "options": [
      
     
      "The workaround is helpful information for the Callers on the Problem's related Incidents (open)",
      "The workaround is helpful information for the members of the Problem's Work notes list",
      "The workaround should be published to a knowledge article, visible from the portal",
      "The workaround is helpful information for the members of the Problem's Assignment Group",
       
    ],
    "correctAnswers": [
     1
    ],
    "multipleChoice": false
  },
  {
    "id": 136,
    "questionEn": "A tester wants to submit a bug report, because they are not able to see the Communicate Fix link under the Related Links on the Problem form.What do you recommend that they confirm, before submitting the bug report ? (Choose two.)",
    "questionPt": "Um testador quer enviar um relatório de erro, porque não consegue ver o link Comunicar Correção em Outros Links no formulário de Problema.\n\nO que você recomenda que ele confirme antes de enviar o relatório de erro? (Escolha dois.)",
    "options": [
      
      "The Fix notes field is filled in and saved",
      "Tester is impersonating a user with problem_coordinator role",
      "Tester is impersonating a user with communications.manager role",
      "Tester is impersonating the assignee, which has the problem_coordinator role"
    ],
    "correctAnswers": [
      0,1
    ],
    "multipleChoice": false
  },
  {
    "id": 137,
    "questionEn": "Your customer needs different catalogs for :\nHuman Resources - employee facing - for submitting requests to HR \nCustomer - external customer facing - for ordering company products and services\nWhen these catalogs are created, in which table would the definition be stored?",
    "questionPt": "Customer - external customer facing - for ordering company products and services\n\nWhen these catalogs are created, in which table would the definition be stored?\n\n\n\nSeu cliente precisa de catálogos diferentes para:\n\nRecursos Humanos - voltado para os funcionários - para encaminhar solicitações ao RH\n\nCliente - voltado para o cliente externo - para solicitar produtos e serviços da empresa\n\nQuando esses catálogos forem criados, em qual tabela a definição será armazenada?",
    "options": [
   
     
      "Business Services Catalog [bs_catalog]",
      "Service Offering Catalog [sn_offering]",
      "Service Portfolio Catalog [sc_portfolio]",
      "Catalog [sc_catalog]",
    
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 138,
    "questionEn": "When creating a catalog, which field specifies who can edit, update, and delete catalogs, categories, and catalog items ?",
    "questionPt": "Ao criar um catálogo, qual campo especifica quem pode editar, atualizar e excluir catálogos, categorias e itens do catálogo?",
    "options": [
   
     
      "Editors",
      "Contributors",
      "Manager",
      "Owner",
    
    ],
    "correctAnswers": [3],
    "multipleChoice": false
  },
  {
    "id": 139,
    "questionEn": "Which of the following Change Task Types are available by default ? (Choose three.)",
    "questionPt": "Quais dos seguintes Tipos de Tarefa de Mudança estão disponíveis por padrão? (Escolha três.)",
    "options": [
      
      "Testing",
      "Deployment",
      "Review",
      "Verification",
      "Planning"
    ],
    "correctAnswers": [
      0,2,4
    ],
    "multipleChoice": true
  },
  {
    "id": 140,
    "questionEn": "Request fulfillment relies on three record types, Requests, Requested Items, and Catalog Tasks. The lifecycle status of these records is reflected in a combination of state and stage fields. Which status field is set by the flow ?",
    "questionPt": "O cumprimento de solicitações depende de três tipos de registros: Solicitações, Itens Solicitados e Tarefas do Catálogo.\n\nO status do ciclo de vida desses registros é refletido em uma combinação de campos de estado e estágio.\n\nQual campo de status é definido pelo fluxo?",
    "options": [
     
      "Status on Request",
      "Stage on Requested item",
      "State on Requested Item",
      "State on Catalog Task"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 141,
    "questionEn": "Given the class structure shown below, which types of CIs will be included in a report run against the cmdb_ci_computer table ?    \n-cmdb    \n--cmdb_ci    \n---cmdb_ci_hardware    \n----cmdb_ci_server    \n----cmdb_ci_win_server    \n----cmdb_ci_linux_server    \n----cmdb_ci_unix_server    \n---cmdb_ci_pc_hardware",    "questionPt": "Dada a estrutura da classe mostrada abaixo, quais tipos de CIs estarão incluídos em um relatório executado contra a tabela cmdb_ci_computer?",
    "options": [
    
      "Just CIs defined directly in cmdb_ci_computer",
      "CIs defined directly in cmdb_ci_computer and all parent classes",
      "CIs defined directly in cmdb_ci_computer and all child classes"
    ],
    "correctAnswers": [
     1
    ],
    "multipleChoice": false
  },
  {
    "id": 142,
    "questionEn": "Your implementation team has a new Business Analyst. They will be attending their first Service Catalog workshop and will be responsible for capturing notes and decisions from the workshop.\nWhat Now Create assets do you recommend they review, to prepare ? (Choose two.)",
    "questionPt": "Sua equipe de implementação tem um novo Analista de Negócios. Ele estará participando de seu primeiro workshop de Catálogo de Serviços e será responsável por capturar notas e decisões do workshop.\n\nQuais ativos do Now Create você recomenda que eles revisem para se preparar? (Escolha dois.)",
    "options": [
        
      "Service Catalog and Request Mgmt - Workshop Preparation Guide",
      "Service Catalog and Request Mgmt - Process Guide",
      "ITSM - Business Outcomes and Corresponding KPIs",
      "IT Service Management - Typical Challenges and Remediation"
    ],
    "correctAnswers": [
      1
    ],
    "multipleChoice": false
  },
  {
    "id": 143,
    "questionEn": "Which of the following cannot be defined or set through a Catalog UI Policy ?",
    "questionPt": "Qual das seguintes opções não pode ser definida ou configurada através de uma Política de UI do Catálogo?",
    "options": [
     
      "Setting a catalog category to visible",
      "Setting a variable to mandatory",
      "Apply a requirement to all form views",
      "Setting a variable to read-only",
   
    ],
    "correctAnswers": [
      3
    ],
    "multipleChoice": false
  },
  {
    "id": 144,
    "questionEn": "When a user clicks on the Communicate fix UI action on the Problem form, what happens ?",
    "questionPt": "Quando um usuário clica na ação da interface de usuário Corrigir Comunicação no formulário de Problema, o que acontece?",
    "options": [
     
      "Fix is written to a draft Knowledge article",
      "Fix is written to the Comments field on any Incident associated with the problem, which is On Hold, Awaiting Problem",
      "Fix is written to the Work notes field on any Incident associated with the problem, which is Active",
      "Fix is written to the Comments field on any Incident associated with the problem, which is Active"
    ],
    "correctAnswers": [2],
    "multipleChoice": false
  },
  {
    "id": 145,
    "questionEn": "When is a change task for Post Implementation Review created for an unauthorized change ?",
    "questionPt": "Quando é criada uma tarefa de mudança para a Revisão Pós-Implementação para uma mudança não autorizada?",
    "options": [
    
      "When the change request moves to a state of Review",
      "When a change manager accepts the change",
      "When the change request moves to a state of Assess",
      "When the change request moves to Close"
    ],
    "correctAnswers": [
    0
    ],
    "multipleChoice": false
  },
  {
    "id": 146,
    "questionEn": "When using Inbound Email Actions, what happens if an email is received which has no watermark or reference number ?",
    "questionPt": "O que acontece se um e-mail é recebido sem marca d'água ou número de referência ao usar as Ações de E-mail de Entrada?",
    "options": [
    
      "Email is rejected and auto-reply sent to sender",
      "New case is created from the message",
      "New interaction is created from the message",
      "New incident created from the message"
    ],
    "correctAnswers": [
      3
    ],
    "multipleChoice": false
  },
  {
    "id": 147,
    "questionEn": "When a user clicks on the Communicate workaround UI action on the Problem form, what happens ?",
    "questionPt": "Quando um usuário clica na ação da interface de usuário da solução alternativa 'Comunicar' no formulário de Problema, o que acontece?",
    "options": [
   
    
      "Workaround is written to the Comments field on any open Incident associated with the problem",
      "Workaround is written to the Work notes field on any open Incident associated with the problem",
      "Workaround is written to the Workaround field on any incident associated with the problem",
      "Workaround is written to a draft Knowledge article"
    ],
    "correctAnswers": [
     1
    ],
    "multipleChoice": false
  },
  {
    "id": 148,
    "questionEn": "Problem and Problem Task records, move automatically from New to Assess states, when which fields are filled ? (Choose two.)",
    "questionPt": "Os registros de Problema e Tarefa de Problema mudam automaticamente dos estados Novo para Avaliar, quando quais campos estão preenchidos? (Escolha dois.)",
    "options": [
   
     
      "State",
      "Assigned to",
      "Short Descriptor",
      "Configuration Item",
      "work notes",
     
    ],
    "correctAnswers": [
      0
    ],
    "multipleChoice": false
  },
  {
    "id": 149,
    "questionEn": "Roles control which users can perform which actions on a change record. What are actions, which cannot be performed by anyone, even an administrator ? (Choose two.)",
    "questionPt": "Os papéis controlam quais usuários podem realizar quais ações em um registro de mudança. Quais são as ações que não podem ser realizadas por ninguém, nem mesmo por um administrador? (Escolha duas.)",
    "options": [
      
    
      "Delete a Change record",
      "Delete a Standard Change Template",
      "Delete CAB Definition",
      "Update Change Type on an existing change record"
    ],
    "correctAnswers": [
    1,3
    ],
    "multipleChoice": true
  },
  {
    "id": 150,
    "questionEn": "What is the Business Rule that triggers automatic group assignment on Incident, Problem or Change requests ?",
    "questionPt": "Qual é a regra de negócios que aciona a atribuição automática de grupos em pedidos de Incidente, Problema ou Mudança?",
    "options": [
    
      "ITSM Assignment Lookup Rule",
      "Automatic Assignment for ITSM",
      "Populate Assignment Group based on CI/SO",
      "Auto-populate ITSM Assignment Groups"
    ],
    "correctAnswers": [
      2
    ],
    "multipleChoice": false
  }
];
// Função para pegar questões (aleatórias ou sequenciais)
export function getRandomQuestions(count: number, sequential: boolean = false): Question[] {
  const allAvailable = getAllQuestions();
  if (sequential) {
    return allAvailable.slice(0, Math.min(count, allAvailable.length));
  }
  const shuffled = [...allAvailable].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, allAvailable.length));
}
