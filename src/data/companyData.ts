export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  requiresConfirmation?: boolean;
  confirmationNote?: string;
  highlightTag?: string;
  imagePath: string;
  defaultPriceNote?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'economia' | 'instalacao' | 'reteste' | 'manutencao';
}

export const COMPANY_INFO = {
  name: 'NOVAGÁS',
  brandNameFormatted: 'NOVAGÁS',
  fullName: 'NOVAGÁS — Conversão de Veículos para GNV',
  segment: 'Conversão de veículos para GNV e serviços especializados',
  yearsOfExperience: '30 anos de experiência',
  address: {
    street: 'Rodovia Presidente Dutra, nº 12.500',
    neighborhood: 'Nova Iguaçu',
    city: 'Nova Iguaçu',
    state: 'RJ',
    reference: 'Dentro do Posto Austral',
    fullFormatted: 'Rodovia Presidente Dutra, nº 12.500 — Dentro do Posto Austral, Nova Iguaçu – RJ',
  },
  phone: {
    raw: '+5521993791003',
    formatted: '+55 21 99379-1003',
    displayFormatted: '(21) 99379-1003',
    link: 'tel:+5521993791003',
  },
  whatsapp: {
    raw: '5521993791003',
    formatted: '(21) 99379-1003',
    directLink: 'https://wa.me/5521993791003',
    defaultMessage: 'Olá! Conheci a NOVAGÁS pelo site e gostaria de solicitar um orçamento para GNV.',
  },
  hours: {
    weekdays: 'Segunda a Sexta: 08:00 às 18:00',
    saturday: 'Sábado: 08:00 às 13:00',
    sunday: 'Domingo: Fechado',
    note: 'Horários sujeitos a confirmação em feriados e datas especiais.',
  },
  maps: {
    // Exact location for Rodovia Presidente Dutra 12500, Posto Austral, Nova Iguaçu
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.9664560792196!2d-43.4603417!3d-22.7558315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99671d43eb685b%3A0x6b0931d866a42a78!2sRod.%20Pres.%20Dutra%2C%20Nova%20Igua%C3%A7u%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    googleMapsRouteUrl: 'https://www.google.com/maps/search/?api=1&query=Posto+Austral+Rodovia+Presidente+Dutra+12500+Nova+Iguaçu+RJ',
    wazeRouteUrl: 'https://waze.com/ul?q=Posto+Austral+Rodovia+Presidente+Dutra+12500+Nova+Iguaçu',
    googleReviewsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=NOVAGAS+GNV+Rodovia+Presidente+Dutra+Nova+Iguaçu',
  },
  images: {
    mechanicWork: '/assets/aistudio/file_00000000b848820e8a3c318f99ac9b82_99944734.png',
    workshopFloor: '/assets/aistudio/file_000000009310820e97b28c058d30f0c0_28749c1a.png',
    baysBanner: '/assets/aistudio/file_000000006f50820eb8c691b7b00f93c9_9bbe90e8.png',
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'conversao-gnv',
    name: 'Conversão de Veículos para GNV',
    shortDesc: 'Instalação completa e sob medida de sistemas GNV para carros particulares, motoristas de app e frotas.',
    fullDesc: 'Transforme seu veículo para rodar no Gás Natural Veicular com a máxima segurança e eficiência energética. Trabalhamos com kit 5ª Geração (injeção sequencial positiva) e 3ª Geração, calibrados especificamente para a curva de potência do seu motor, garantindo economia real de até 60% e preservando a vida útil do veículo.',
    benefits: [
      'Economia de até 60% no custo por quilômetro rodado',
      'Desconto significativo no IPVA no Estado do Rio de Janeiro',
      'Transição suave e imperceptível entre gasolina/etanol e GNV',
      'Calibração e mapeamento eletrônico individualizado por modelo',
    ],
    highlightTag: 'Mais Procurado',
    imagePath: COMPANY_INFO.images.mechanicWork,
    defaultPriceNote: 'Valores sob consulta conforme modelo do veículo e capacidade do cilindro.',
  },
  {
    id: 'instalacao-kits-gnv',
    name: 'Instalação de Kits GNV Novos',
    shortDesc: 'Kits homologados de 3ª e 5ª geração com cilindros certificados e instalação profissional de precisão.',
    fullDesc: 'Instalação minuciosa com fixação reforçada de cilindro no porta-malas ou sob o assoalho (para utilitários e pick-ups), chicote elétrico protegido com conduíte automotivo e tubulação de aço de alta pressão. Tudo montado seguindo rigorosamente as boas práticas da engenharia veicular.',
    benefits: [
      'Componentes e redutores de pressão de primeira linha',
      'Fixação com berço metálico e cinta reforçada conforme norma',
      'Instalação limpa com fiação organizada e isolada',
      'Orientações completas de uso e boas práticas para o condutor',
    ],
    imagePath: COMPANY_INFO.images.workshopFloor,
    defaultPriceNote: 'Opções em cilindros de 8m³, 10m³, 15m³ e 16m³.',
  },
  {
    id: 'reteste-cilindros',
    name: 'Reteste de Cilindros GNV',
    shortDesc: 'Ensaio hidrostático obrigatório a cada 5 anos para renovação de vistoria e segurança total.',
    fullDesc: 'Serviço essencial para garantir a integridade estrutural do cilindro de alta pressão e permitir a aprovação na vistoria anual do Inmetro. Na NOVAGÁS, seu cilindro é inspecionado com rigor para identificar microfissuras, corrosão ou desgaste mecânico.',
    benefits: [
      'Promoção especial: A partir de R$ 90,00',
      'Verificação rigorosa de válvulas de segurança e estanqueidade',
      'Item obrigatório para aprovação da vistoria periódica',
      'Atendimento ágil com o menor tempo de parada para o motorista',
    ],
    highlightTag: 'A partir de R$ 90,00 Promoção',
    imagePath: COMPANY_INFO.images.baysBanner,
    defaultPriceNote: 'Consulte condições e prazos para o tamanho do seu cilindro.',
  },
  {
    id: 'manutencao-gnv',
    name: 'Manutenção de Sistemas GNV',
    shortDesc: 'Diagnóstico e reparo de vazamentos, falhas de aceleração, engasgos e troca de componentes desgastados.',
    fullDesc: 'Manutenção preventiva e corretiva para manter seu carro sempre com o consumo correto e sem falhar em marcha lenta ou retomadas. Troca de reparos do redutor, emuladores de bico, variadores de avanço, mangueiras e filtros.',
    benefits: [
      'Eliminação de cheiro de gás e microvazamentos',
      'Fim de falhas, estouros e perda anormal de potência',
      'Substituição de filtros do GNV para proteger os bicos injetores',
      'Prevenção de danos a velas, cabos e bobinas de ignição',
    ],
    imagePath: COMPANY_INFO.images.mechanicWork,
  },
  {
    id: 'regulagem-diagnostico',
    name: 'Regulagem e Diagnóstico Computadorizado',
    shortDesc: 'Mapeamento eletrônico de injeção GNV via scanner e software automotivo para ajuste de queima ideal.',
    fullDesc: 'Ajuste computadorizado da central do kit GNV (ECU de gás) conectado via scanner em tempo real. Ajustamos a mistura ar/gás para obter o melhor equilíbrio entre potência, resposta no pedal do acelerador e o menor consumo de combustível por metro cúbico.',
    benefits: [
      'Mapeamento eletrônico de ponto e tempo de injeção do gás',
      'Ajuste fino de marcha lenta com ar-condicionado ligado',
      'Leitura de erros na injeção original do veículo',
      'Maior suavidade nas trocas de marcha e arrancadas',
    ],
    imagePath: COMPANY_INFO.images.workshopFloor,
  },
  {
    id: 'revisao-sistema-gnv',
    name: 'Revisão Periódica do Sistema GNV',
    shortDesc: 'Check-up completo de segurança para motoristas que rodam muitos quilômetros todos os dias.',
    fullDesc: 'Revisão preventiva recomendada a cada 10.000 ou 20.000 km, ideal para motoristas de aplicativo e táxi. Inspeciona mangueiras de pressão, abraçadeiras, aterramentos, estado das velas de ignição e pressão de trabalho do redutor.',
    benefits: [
      'Economia contínua sem aumento repentino do consumo',
      'Segurança preventiva contra vazamentos',
      'Inspeção do sistema de arrefecimento e aquecimento do redutor',
      'Check-up visual dos suportes e cintas do cilindro',
    ],
    imagePath: COMPANY_INFO.images.baysBanner,
  },
  {
    id: 'venda-pecas-equipamentos',
    name: 'Venda de Peças e Equipamentos GNV',
    shortDesc: 'Bicos injetores, redutores, válvulas de abastecimento, filtros, mangueiras e manômetros de qualidade.',
    fullDesc: 'Disponibilizamos peças originais e de reposição confiável para manutenção e upgrades de sistemas GNV. Trabalhamos com itens certificados para garantir durabilidade e compatibilidade com seu kit.',
    benefits: [
      'Peças com procedência e garantia',
      'Redutores de pressão para diferentes potências de motor',
      'Válvulas externas e internas de abastecimento',
      'Filtros de fase líquida e gasosa de alto rendimento',
    ],
    imagePath: COMPANY_INFO.images.workshopFloor,
  },
  {
    id: 'preparacao-vistoria',
    name: 'Preparação para Inspeção e Vistoria',
    shortDesc: 'Checklist técnico preparatório para seu veículo passar sem dor de cabeça no posto de inspeção do Inmetro.',
    fullDesc: 'Antes de levar seu veículo para o posto de inspeção veicular (para emissão ou renovação do Certificado de Segurança Veicular - CSV), fazemos a revisão de todos os itens exigidos pelos fiscais: fixação, tubulação, emissão de gases, válvula de alívio e estanqueidade.',
    benefits: [
      'Evita reprovações e pagamento de novas taxas de inspeção',
      'Verificação completa de todos os pontos exigidos pela vistoria',
      'Ajuste dos níveis de emissão de poluentes',
      'Orientações sobre documentos necessários e agendamento',
    ],
    requiresConfirmation: true,
    confirmationNote: 'Preparação mecânica realizada na oficina; a inspeção e emissão do CSV são feitas por Organismos de Inspeção Veicular acreditados (OIA).',
    imagePath: COMPANY_INFO.images.mechanicWork,
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Quanto posso economizar convertendo meu carro para GNV?',
    answer: 'A economia média varia entre 50% e 60% em relação à gasolina e ao etanol. Além disso, no Estado do Rio de Janeiro, veículos convertidos para GNV contam com um desconto expressivo na alíquota do IPVA (redução de 4% para 1,5%), o que gera uma economia de centenas ou milhares de reais a cada ano apenas no imposto.',
    category: 'economia',
  },
  {
    question: 'Qual é a diferença entre o kit GNV de 3ª e 5ª Geração?',
    answer: 'O kit de 3ª Geração (aspirado) possui um misturador único no duto de ar e é mais comum em carros com injeção monoponto ou motores mais antigos. Já o kit de 5ª Geração (G5) possui bicos injetores dedicados para cada cilindro do motor e uma central eletrônica inteligente própria (ECU), que replica com precisão o tempo de injeção original do veículo, proporcionando maior suavidade, economia e mínima perda de potência.',
    category: 'instalacao',
  },
  {
    question: 'De quanto em quanto tempo devo fazer o Reteste de Cilindro?',
    answer: 'O reteste hidrostático do cilindro de GNV deve ser realizado obrigatoriamente a cada 5 anos, ou antes caso o cilindro sofra algum impacto, colisão traseira ou corrosão aparente. Na NOVAGÁS, temos ampla estrutura para reteste a partir de R$ 90,00.',
    category: 'reteste',
  },
  {
    question: 'O motor do meu carro vai perder potência com o GNV?',
    answer: 'Nos kits modernos de 5ª Geração bem instalados e com mapeamento eletrônico calibrado, a perda de potência é quase imperceptível para o motorista no dia a dia (em média entre 3% e 5%). Para ultrapassagens rápidas, basta alternar para o combustível líquido com um clique no botão do painel.',
    category: 'instalacao',
  },
  {
    question: 'Qual é a localização da NOVAGÁS na Rodovia Presidente Dutra?',
    answer: 'Estamos localizados na Rodovia Presidente Dutra, nº 12.500, em Nova Iguaçu – RJ, estrategicamente posicionados dentro do Posto Austral. O acesso é fácil, seguro, com amplo espaço para manobra e estacionamento tanto para carros particulares quanto para utilitários e táxis.',
    category: 'manutencao',
  },
  {
    question: 'Como funciona a garantia e o suporte pós-instalação?',
    answer: 'Oferecemos garantia de instalação e suporte técnico dedicado para revisões e calibrações. Nossa equipe está sempre disponível pelo WhatsApp para esclarecer dúvidas e agendar seus atendimentos preventivos.',
    category: 'manutencao',
  },
];

// Helper to build pre-filled WhatsApp link
export function getWhatsAppUrl(serviceName?: string, vehicleDetails?: string, savingsInfo?: string): string {
  let message = COMPANY_INFO.whatsapp.defaultMessage;

  if (serviceName) {
    message = `Olá! Conheci a NOVAGÁS pelo site e gostaria de solicitar um orçamento para o serviço de *${serviceName}*.`;
  }

  if (vehicleDetails) {
    message += `\n🚗 *Veículo:* ${vehicleDetails}`;
  }

  if (savingsInfo) {
    message += `\n💰 *Estimativa de economia calculada no site:* ${savingsInfo}`;
  }

  message += `\n\nPoderiam me passar mais informações sobre valores, formas de pagamento e disponibilidade? Obrigado!`;

  return `https://wa.me/${COMPANY_INFO.whatsapp.raw}?text=${encodeURIComponent(message)}`;
}

// Transparent checklist for corporate confirmation
export const CORPORATE_CONFIRMATION_CHECKLIST = [
  {
    item: 'Horários exatos de atendimento em feriados e plantões',
    status: 'Aguardando validação com a administração',
    recommendation: 'Definir se a oficina atende em feriados nacionais ou municipais de Nova Iguaçu.',
  },
  {
    item: 'Número de registro e homologação oficial Inmetro / OIA parceiro',
    status: 'Espaço reservado no rodapé e sobre',
    recommendation: 'Cadastrar o número de registro oficial para reforçar a credibilidade técnica no site.',
  },
  {
    item: 'Condições de parcelamento no cartão de crédito',
    status: 'Sob consulta com o cliente',
    recommendation: 'Informar se parcela em até 10x ou 12x no cartão para inclusão nos banners de conversão.',
  },
  {
    item: 'Link direto do Perfil da Empresa no Google (Google Meu Negócio)',
    status: 'Configurado com busca direta de rota e avaliações',
    recommendation: 'Substituir pelo link curto oficial do Perfil do Google Meu Negócio assim que fornecido.',
  },
];
