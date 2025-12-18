import { Demanda, UnidadeMetric, Pagamento, StatusDemanda, Prioridade, ChartData } from './types';

export const MOCK_DEMANDAS: Demanda[] = [
  {
    id: '1',
    wl: '7828',
    unidade: 'Pontes e Lacerda',
    tipo: 'Implantação',
    descricao: 'Finalizar alinhamento com a PM e validar pontos.',
    responsavel: 'Keny',
    prazo: '2023-12-15',
    status: StatusDemanda.ANDAMENTO,
    prioridade: Prioridade.ALTA,
    observacao: 'Aguardando retorno do Major.'
  },
  {
    id: '2',
    wl: '7871',
    unidade: 'Ubatuba',
    tipo: 'Recuperação',
    descricao: 'Reunião sobre baixa adesão.',
    responsavel: 'Keny',
    prazo: '2023-12-10',
    status: StatusDemanda.NAO_INICIADA,
    prioridade: Prioridade.ALTA,
    observacao: 'Cliente insatisfeito com suporte.'
  },
  {
    id: '3',
    wl: '7910',
    unidade: 'Sto Antônio da Platina',
    tipo: 'Expansão',
    descricao: 'Propor pacote de câmeras.',
    responsavel: 'Keny',
    prazo: '2024-01-05',
    status: StatusDemanda.AGUARDANDO,
    prioridade: Prioridade.MEDIA,
    observacao: ''
  },
];

// Dados para os 4 gráficos de barras
export const MOCK_GRAPH_B2C = [
  { name: 'Jan', valor: 120 }, { name: 'Fev', valor: 132 }, { name: 'Mar', valor: 101 }, 
  { name: 'Abr', valor: 134 }, { name: 'Mai', valor: 190 }, { name: 'Jun', valor: 230 }
];
export const MOCK_GRAPH_B2B = [
  { name: 'Jan', valor: 40 }, { name: 'Fev', valor: 30 }, { name: 'Mar', valor: 55 }, 
  { name: 'Abr', valor: 60 }, { name: 'Mai', valor: 80 }, { name: 'Jun', valor: 95 }
];
export const MOCK_GRAPH_FATURADO = [
  { name: 'Jan', valor: 4000 }, { name: 'Fev', valor: 3500 }, { name: 'Mar', valor: 5000 }, 
  { name: 'Abr', valor: 4800 }, { name: 'Mai', valor: 6000 }, { name: 'Jun', valor: 7500 }
];
export const MOCK_GRAPH_NOVAS_CAMERAS = [
  { name: 'Jan', valor: 15 }, { name: 'Fev', valor: 22 }, { name: 'Mar', valor: 10 }, 
  { name: 'Abr', valor: 35 }, { name: 'Mai', valor: 20 }, { name: 'Jun', valor: 45 }
];

// Dados para as tabelas Top 5
export const TOP5_SALDO_CAMERAS = [
  { nome: 'Pontes e Lacerda (7828)', valor: 120 },
  { nome: 'Recife Centro (8100)', valor: 115 },
  { nome: 'Ubatuba (7871)', valor: 98 },
  { nome: 'Vitória (8205)', valor: 85 },
  { nome: 'Sto Antônio (7910)', valor: 72 },
];
export const TOP5_ASSINANTES = [
  { nome: 'Recife Centro (8100)', valor: 1500 },
  { nome: 'Pontes e Lacerda (7828)', valor: 450 },
  { nome: 'Sto Antônio (7910)', valor: 300 },
  { nome: 'Ubatuba (7871)', valor: 120 },
  { nome: 'Vitória (8205)', valor: 40 },
];
export const TOP5_NOVAS_CAMERAS = [
  { nome: 'Ubatuba (7871)', valor: 15 },
  { nome: 'Pontes e Lacerda (7828)', valor: 12 },
  { nome: 'Recife Centro (8100)', valor: 8 },
  { nome: 'Vitória (8205)', valor: 5 },
  { nome: 'Sto Antônio (7910)', valor: 3 },
];
export const TOP5_FATURAMENTO = [
  { nome: 'Recife Centro (8100)', valor: 22000 },
  { nome: 'Pontes e Lacerda (7828)', valor: 12500 },
  { nome: 'Sto Antônio (7910)', valor: 8900 },
  { nome: 'Ubatuba (7871)', valor: 4200 },
  { nome: 'Vitória (8205)', valor: 1500 },
];

export const MOCK_PAGAMENTOS: Pagamento[] = [
  { id: '101', mes: 'Dez/25', wl: '7828', unidade: 'Pontes e Lacerda', valor: 1250.00, vencimento: '2025-12-10', status: 'Aberto', obs: 'Enviar lembrete' },
  { id: '102', mes: 'Dez/25', wl: '7871', unidade: 'Ubatuba', valor: 850.00, vencimento: '2025-12-05', status: 'Negociado', obs: 'Paga dia 20' },
  { id: '103', mes: 'Nov/25', wl: '7910', unidade: 'Sto Antônio', valor: 1100.00, vencimento: '2025-11-10', status: 'Pago', obs: 'Pago em dia' },
  { id: '104', mes: 'Nov/25', wl: '8100', unidade: 'Recife Centro', valor: 2500.00, vencimento: '2025-11-15', status: 'Atrasado', obs: 'Cobrança via WhatsApp' },
];

// Placeholder for removed constants to avoid breakages if referenced elsewhere
export const MOCK_UNIDADES: UnidadeMetric[] = [];
export const MOCK_CHART_DATA: ChartData[] = [];
export const CAMERAS_USERS_DATA = [];