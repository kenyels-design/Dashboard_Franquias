export enum StatusDemanda {
  NAO_INICIADA = 'Não Iniciada',
  ANDAMENTO = 'Em Andamento',
  AGUARDANDO = 'Aguardando',
  ACOMPANHAMENTO = 'Acompanhamento',
  CONCLUIDA = 'Concluída'
}

export enum Prioridade {
  ALTA = 'Alta',
  MEDIA = 'Média',
  BAIXA = 'Baixa'
}

export interface Demanda {
  id: string;
  wl: string;
  unidade: string;
  tipo: string;
  descricao: string;
  responsavel: string;
  prazo: string;
  status: StatusDemanda;
  prioridade: Prioridade;
  observacao?: string;
}

export interface UnidadeMetric {
  wl: string;
  nome: string;
  cidade: string;
  uf: string;
  modelo: 'Colaborativo' | 'Governamental' | 'Misto';
  cameras: number;
  usuarios: number;
  faturamento: number;
  status: 'Ativa' | 'Implantação' | 'Risco' | 'Churn';
  cs: string;
}

export interface Pagamento {
  id: string;
  mes: string;
  wl: string;
  unidade: string;
  valor: number;
  vencimento: string;
  status: 'Aberto' | 'Pago' | 'Negociado' | 'Atrasado';
  obs?: string;
}

export interface ChartData {
  name: string;
  franquias: number;
  canais: number;
}