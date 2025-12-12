import { ArgumentDefinition } from './types';

export const PREDEFINED_ARGUMENTS: ArgumentDefinition[] = [
  {
    id: 'value',
    title: 'Valor / Custo-benefício',
    template: 'Compreendo sua questão sobre o valor, {name}. Mas analisando o custo diário, o jornal sai por menos de um cafezinho. É um investimento pequeno para garantir acesso a informações confiáveis e verificadas, essenciais nos dias de hoje.'
  },
  {
    id: 'benefits',
    title: 'Benefícios Exclusivos',
    template: '{name}, além do conteúdo jornalístico, lembre-se que sua assinatura inclui o nosso Clube de Vantagens. Os descontos em farmácias, cinemas e parceiros muitas vezes superam o próprio valor da mensalidade. Já verificou seus pontos hoje?'
  },
  {
    id: 'history',
    title: 'Histórico do Cliente',
    template: 'Sr(a). {name}, valorizamos imensamente o tempo que o(a) senhor(a) está conosco. Não gostaríamos de perder uma parceria de longa data por um detalhe que podemos resolver. Podemos rever sua assinatura para honrar essa fidelidade?'
  },
  {
    id: 'offer',
    title: 'Oferta Especial',
    template: 'Tenho uma condição especial autorizada apenas para clientes do seu perfil, {name}. Consigo aplicar um desconto de 30% nos próximos 3 meses para que continue aproveitando nosso conteúdo. O que acha?'
  },
  {
    id: 'empathy',
    title: 'Empatia / Humanizado',
    template: 'Entendo perfeitamente seu ponto, {name}. Agradeço muito sua sinceridade em compartilhar isso. Meu objetivo não é apenas manter um número, mas garantir que o jornal continue sendo útil para você. Se ajustarmos a frequência, ajudaria?'
  },
  {
    id: 'digital',
    title: 'Migração Digital',
    template: '{name}, se o impresso está acumulando, que tal focarmos no Digital? Você terá acesso ilimitado ao site e app, com notícias em tempo real, podcasts e colunistas, por um valor bem mais acessível.'
  }
];