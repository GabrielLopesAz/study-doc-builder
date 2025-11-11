export interface Question {
  id: number;
  questionEn: string;
  questionPt: string;
  options: string[];
  correctAnswers: number[];
  multipleChoice: boolean;
  originalOptions?: string[]; // Para manter as opções originais antes do embaralhamento
}

export const allQuestions: Question[] = [
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
  },
  // Continue adding more questions...
  {
    id: 21,
    questionEn: "Which of the following elements are automatically included in the name of the update set for items published via Catalog Builder? (Choose two.)",
    questionPt: "Quais dos seguintes elementos são automaticamente incluídos no nome do conjunto de atualização para itens publicados via Catalog Builder? (Escolha dois.)",
    options: [
      "Catalog(s)",
      "Item name",
      "Variables",
      "Item author",
      "Timestamp"
    ],
    correctAnswers: [1, 4],
    multipleChoice: true
  },
  {
    id: 22,
    questionEn: "What would you use to define a common grouping of configuration items such as all web servers in Miami?",
    questionPt: "O que você usaria para definir um agrupamento comum de itens de configuração, como todos os servidores web em Miami?",
    options: [
      "CI class",
      "Dependent group",
      "CSDM component group",
      "Dynamic CI group"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 23,
    questionEn: "When you click Change > Create New, which page is displayed?",
    questionPt: "Quando você clica em Alterar > Criar Novo, qual página é exibida?",
    options: [
      "Change Landing Page",
      "Change Form",
      "Change Catalog",
      "Change Wizard",
      "Change Interceptor"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 24,
    questionEn: "At which level can the type of knowledge feedback be enabled or disabled?",
    questionPt: "Em qual nível o tipo de feedback de conhecimento pode ser ativado ou desativado?",
    options: [
      "Knowledge base",
      "Knowledge article",
      "Knowledge category",
      "Knowledge article template"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 25,
    questionEn: "What defines the required approvals and the associated conditions for a change model?",
    questionPt: "O que define as aprovações necessárias e as condições associadas para um modelo de mudança?",
    options: [
      "A change approval policy",
      "A change model's state transitions",
      "A change model approval definition",
      "A change approval lifecycle flow"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 26,
    questionEn: "On the 'Create New' change landing page in Service Operations Workspace, what class label is displayed for the Emergency change model?",
    questionPt: "Na página de aterrissagem 'Criar Novo' no Workspace de Operações de Serviço, qual rótulo de classe é exibido para o modelo de mudança de Emergência?",
    options: [
      "Unauthorized",
      "Default",
      "Break/fix",
      "Out-of-the-box"
    ],
    correctAnswers: [2],
    multipleChoice: false
  },
  {
    id: 27,
    questionEn: "Which platform role can create service portfolios and taxonomy nodes?",
    questionPt: "Qual função da plataforma pode criar portfólios de serviços e nós de taxonomia?",
    options: [
      "portfolio_viewer",
      "portfolio_admin",
      "portfolio_manager",
      "portfolio_editor"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 28,
    questionEn: "If a change model has Write roles AND Can write defined, which users have the ability to modify the change model record? (Choose two.)",
    questionPt: "Se um modelo de mudança tem roles de Escrita E Permissão de escrita definidas, quais usuários têm a capacidade de modificar o registro do modelo de mudança? (Escolha dois.)",
    options: [
      "Users with the itil_admin role",
      "Users with admin role",
      "Users that have the Write role(s) OR that match the Can write user criteria",
      "Users with sn_change_write role",
      "Users that have the Write role(s) AND match the Can write user criteria"
    ],
    correctAnswers: [1, 4],
    multipleChoice: true
  },
  {
    id: 29,
    questionEn: "What defines which catalog items, and in what order, are included in an Order Guide?",
    questionPt: "O que define quais itens do catálogo, e em que ordem, são incluídos em um Guia de Pedidos?",
    options: [
      "Order guide template",
      "Rules",
      "Variable sets",
      "UI policies"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 30,
    questionEn: "After publishing an Item via Catalog Builder, the associated update set is set to which state?",
    questionPt: "Após publicar um Item via Catalog Builder, o conjunto de atualização associado é definido para qual estado?",
    options: [
      "In progress",
      "Complete",
      "New",
      "Published"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 31,
    questionEn: "Which Service Portfolio Management phase does a service belong to when it is in operational state?",
    questionPt: "Em qual fase do gerenciamento de portfólio de serviços um serviço pertence quando está em estado operacional?",
    options: [
      "Active",
      "Retired",
      "Catalog",
      "Pipeline"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 32,
    questionEn: "Which of these can be associated with a service within the service portfolio taxonomy?",
    questionPt: "Qual destes pode ser associado a um serviço dentro da taxonomia do portfólio de serviços?",
    options: [
      "Node layer",
      "Node",
      "Node level",
      "Leaf node"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 33,
    questionEn: "Which service types can be managed through the scope of Service Portfolio Management? (Choose two.)",
    questionPt: "Quais tipos de serviço podem ser gerenciados através do escopo da Gestão de Portfólio de Serviços? (Escolha dois.)",
    options: [
      "Application service",
      "Technical service",
      "Business service",
      "Mobile service"
    ],
    correctAnswers: [1, 2],
    multipleChoice: true
  },
  {
    id: 34,
    questionEn: "Which is the process responsible for delivering items that have been ordered from a Service Catalog?",
    questionPt: "Qual é o processo responsável por entregar itens que foram solicitados a partir de um Catálogo de Serviços?",
    options: [
      "Service Catalog Management",
      "Catalog Workflows",
      "Catalog Fulfillment",
      "Catalog Item Design",
      "Request Management"
    ],
    correctAnswers: [4],
    multipleChoice: false
  },
  {
    id: 35,
    questionEn: "Where is the definition of what is provided, or not provided, for a service defined?",
    questionPt: "Onde está definida a definição do que é fornecido, ou não fornecido, para um serviço?",
    options: [
      "Vendor service agreements",
      "Service scope",
      "Service contracts",
      "Service limitations"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 36,
    questionEn: "When using Catalog Builder, what can be built using templates? (Choose two.)",
    questionPt: "Ao usar o Catalog Builder, o que pode ser construído usando modelos? (Escolha dois.)",
    options: [
      "Content items",
      "Catalog items",
      "Knowledge articles",
      "Order guides",
      "Record producers"
    ],
    correctAnswers: [1, 4],
    multipleChoice: true
  },
  {
    id: 37,
    questionEn: "Which organizational role is responsible for the overall administrative capabilities of a portfolio?",
    questionPt: "Qual cargo organizacional é responsável pelas capacidades administrativas globais de um portfólio?",
    options: [
      "Service Manager",
      "Portfolio Manager",
      "Portfolio Owner",
      "Service Owner"
    ],
    correctAnswers: [2],
    multipleChoice: false
  },
  {
    id: 38,
    questionEn: "A Portfolio Manager is primarily concerned with the performance of what hierarchy?",
    questionPt: "Um Gerente de Portfólio está principalmente preocupado com o desempenho de qual hierarquia?",
    options: [
      "Service Portfolio, Service, Service Offering",
      "Portfolio Owner, Service Owner, Catalog Manager",
      "Service Catalog, Catalog item, Requested item",
      "Requested Item, Catalog Task, Task SLA"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 39,
    questionEn: "When modifying a Change Flow, a library is available of re-usable components for your flow. What are these components called?",
    questionPt: "Ao modificar um Fluxo de Mudança, uma biblioteca de componentes reutilizáveis está disponível para seu fluxo. Como são chamados esses componentes?",
    options: [
      "Flow activities",
      "Flow actions",
      "Attributes",
      "Properties"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 40,
    questionEn: "How is granular read and write access for a specific change model defined?",
    questionPt: "Como o acesso granular de leitura e gravação para um modelo de mudança específico é definido?",
    options: [
      "Configuring ACLs on the chge_model table",
      "Configuring ACLs on the Create New landing page",
      "Change properties",
      "Setting Advanced Security to true and applying user criteria"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 41,
    questionEn: "Which of the following can leverage user criteria for controlling access?",
    questionPt: "Qual dos seguintes pode utilizar critérios de usuários para controlar o acesso?",
    options: [
      "Catalog taxonomy",
      "Catalog topics",
      "Catalog categories",
      "Catalog variables",
      "Catalog items"
    ],
    correctAnswers: [4],
    multipleChoice: false
  },
  {
    id: 42,
    questionEn: "Which level are service commitments associated in the service portfolio taxonomy?",
    questionPt: "A quais níveis estão associados os compromissos de serviço na taxonomia do portfólio de serviços?",
    options: [
      "Node",
      "Offering",
      "Service",
      "Portfolio"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 43,
    questionEn: "How are the relationships between services and offerings that are built in Service Portfolio Management transferred to the CMDB?",
    questionPt: "Como as relações entre serviços e ofertas que são construídas na Gestão de Portfólio de Serviços são transferidas para o CMDB?",
    options: [
      "Only parent:child (service:offering) relationships are automatically created in the CMDB",
      "If the service is defined as a business service, the relationships and dependencies will be automatically in the CMDB",
      "All CMDB relationships and dependencies are automatically created upon publishing the service and offerings",
      "Any required CMDB relationships and dependencies must be created manually"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 44,
    questionEn: "What is the minimum number of offering(s) a service must have to move to the Catalog phase?",
    questionPt: "Qual é o número mínimo de oferta(s) que um serviço deve ter para passar para a fase de Catálogo?",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 45,
    questionEn: "In Incident Management, an Assignment group is automatically set on a change request record because of a business rule. How is the group identified?",
    questionPt: "No gerenciamento de incidentes, um grupo de atribuição é definido automaticamente em um registro de solicitação de mudança devido a uma regra de negócio. Como o grupo é identificado?",
    options: [
      "Change group on CI record, or if empty, the Change group on the Service offering",
      "Support group on CI record, or if empty, the Support group on the Service",
      "Support group on CI record, or the default assignment group for the user",
      "Support group on CI record, or if empty, the Support group on the Service offering"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 46,
    questionEn: "In Change Management, an Assignment group is automatically set on a change request record because of a business rule. How is the group identified?",
    questionPt: "Na Gestão de Mudanças, um grupo de Atribuição é definido automaticamente em um registro de solicitação de mudança devido a uma regra de negócios. Como o grupo é identificado?",
    options: [
      "Change group on CI record, or if empty, the Change group on the Service offering",
      "Support group on CI record, or the default assignment group for the user",
      "Support group on CI record, or if empty, the Support group on the Service",
      "Support group on CI record, or if empty, the Support group on the Service offering"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 47,
    questionEn: "What is the Request lifecycle state when a user is entering details in a form?",
    questionPt: "Qual é o estado do ciclo de vida da solicitação quando um usuário está inserindo detalhes em um formulário?",
    options: [
      "Draft",
      "Requested",
      "Approved",
      "In Progress"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 48,
    questionEn: "Who accepts or approves Major Incidents in the Major Incident Management process?",
    questionPt: "Quem aceita ou aprova Incidentes Maiores no processo de Gerenciamento de Incidentes Maiores?",
    options: [
      "Incident Manager",
      "Assigned Group",
      "Problem Manager",
      "Change Manager"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 49,
    questionEn: "How are relationships between Portfolio > Service > Service Offering automatically reflected in the CMDB?",
    questionPt: "Como as relações entre Portfólio > Serviço > Oferta de Serviço são automaticamente refletidas no CMDB?",
    options: [
      "Relationships are created when the service is classified as a business service",
      "CMDB relationships are created manually via the CI Relationship Editor",
      "CMDB entries are created automatically when the service and offering are published",
      "The CMDB requires an integration script to reflect taxonomy relationships"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 50,
    questionEn: "Which of the following defines the approvals that should be applied to a change request?",
    questionPt: "Qual dos seguintes define as aprovações que devem ser aplicadas a um pedido de mudança?",
    options: [
      "Change approval UI actions",
      "Change approval policy",
      "Change approval script includes",
      "Change approval business rules"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 51,
    questionEn: "What do you use to identify who will have access to particular items in a service catalog?",
    questionPt: "O que você usa para identificar quem terá acesso a itens específicos em um catálogo de serviços?",
    options: [
      "User criteria",
      "Access criteria",
      "User access rules",
      "Availability rules",
      "Security rules"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 52,
    questionEn: "What is a core difference between an Incident and a Problem?",
    questionPt: "Qual é a diferença principal entre um Incidente e um Problema?",
    options: [
      "Incidents are focused on one individual having an issue; Problems are when you have many people having the same issue",
      "Incidents can be any priority; Problems are high or critical",
      "Incidents are the same as a Problem",
      "Incidents are focused on the quickest resolution; Problems are focused on root cause analysis"
    ],
    correctAnswers: [3],
    multipleChoice: false
  },
  {
    id: 53,
    questionEn: "Where can a change manager define the fields that must be populated before a change request can move from the state of New to Assess?",
    questionPt: "Onde um gerente de mudanças pode definir os campos que devem ser preenchidos antes que um pedido de mudança possa passar do estado Novo para Avaliar?",
    options: [
      "Choice conditions",
      "Model State Transition Conditions",
      "Dictionary Overrides",
      "State choice lists"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 54,
    questionEn: "Your company sells bicycles. They want to build a service catalog for current and prospective customers. What interface is suitable for these external users?",
    questionPt: "Sua empresa vende bicicletas. Eles querem construir um catálogo de serviços para clientes atuais e potenciais. Que interface é adequada para esses usuários externos?",
    options: [
      "Service Catalog Mobile App",
      "Portal",
      "Now Catalog App",
      "Google leads spoke",
      "Customer Service Catalog"
    ],
    correctAnswers: [1],
    multipleChoice: false
  },
  {
    id: 55,
    questionEn: "What happens when an existing service record is checked out in Service Builder for editing?",
    questionPt: "O que acontece quando um registro de serviço existente é dessinalizado no Service Builder para edição?",
    options: [
      "The service portfolio record is placed in a Work in progress state",
      "The service and offerings are temporarily unavailable for consumption",
      "A copy of the service is created and placed in a Draft state",
      "The original service record is placed in a Retired state"
    ],
    correctAnswers: [2],
    multipleChoice: false
  },
  {
    id: 56,
    questionEn: "Which Change request fields are used in conflict detection? (Choose three.)",
    questionPt: "Quais campos de solicitação de mudança são usados na detecção de conflitos? (Escolha três.)",
    options: [
      "CI Business criticality",
      "Planned end date",
      "Risk",
      "Planned start date",
      "Configuration item"
    ],
    correctAnswers: [1, 3, 4],
    multipleChoice: true
  },
  {
    id: 57,
    questionEn: "What types of Conflicts are detected automatically on the Change request? (Choose three.)",
    questionPt: "Quais tipos de conflitos são detectados automaticamente na solicitação de mudança? (Escolha três.)",
    options: [
      "Conflict with Assignee Shift Schedule",
      "Conflict with Blackout Schedule",
      "Conflict with the Company Holiday Schedule",
      "Another change for the same CI, at the same time",
      "Conflict with Maintenance Window"
    ],
    correctAnswers: [1, 3, 4],
    multipleChoice: true
  },
  {
    id: 58,
    questionEn: "How are Releases related to Changes?",
    questionPt: "Como as Releases estão relacionadas às Mudanças?",
    options: [
      "Releases are comprised of one or more Changes",
      "Changes are comprised of one or more Releases",
      "Releases are implemented before Changes",
      "Changes are implemented before Releases"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 59,
    questionEn: "Which workflow is defined as Requests for approval from a manager of the knowledge base before moving the article to the retired state?",
    questionPt: "Qual fluxo de trabalho é definido como Solicitações de aprovação de um gerente da base de conhecimento antes de mover o artigo para o estado aposentado?",
    options: [
      "Knowledge – Article Retire",
      "Knowledge – Retire Authorize",
      "Knowledge – Approval Retire",
      "Knowledge – Retire-Approval Required",
      "Knowledge – Instant Retire"
    ],
    correctAnswers: [0],
    multipleChoice: false
  },
  {
    id: 60,
    questionEn: "What Knowledge base feature can you use to standardize the sections and fonts on a knowledge article?",
    questionPt: "Qual recurso da base de conhecimento você pode usar para padronizar as seções e fontes em um artigo de conhecimento?",
    options: [
      "Article designer",
      "Coaching loops",
      "Templates",
      "Article layout"
    ],
    correctAnswers: [2],
    multipleChoice: false
  }
];

// Função para pegar um subconjunto aleatório de questões
export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, allQuestions.length));
}
