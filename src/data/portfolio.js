export const jogador = {
  nome: 'GABRIEL LACERDA',
  classe: 'Desenvolvedor Full Stack | Estudante de Sistemas de Informação',
  nivel: 22,
}

export const projetos = [
  {
    id: 'barbearia',
    nome: 'Barbershop Do Zé',
    descricao: 'Web app completo de agendamentos para barbearia. Sistema responsivo com integração de agenda em tempo real.',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'CSS'],
    nivel: 'LEGENDARY',
    status: 'COMPLETO',
    xp: 100,
    github: 'https://github.com/gabriel-freitas96/BarbeariaCerta',
  },
  {
    id: 'taskflow',
    nome: 'TaskFlow',
    descricao: 'Aplicação de gerenciamento de projetos acadêmicos. Permite criar, organizar e acompanhar tarefas de equipe.',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    nivel: 'EPIC',
    status: 'COMPLETO',
    xp: 100,
    github: 'https://github.com/gabriel-freitas96/Taskflow-Integracao',
  },
  {
    id: 'libritech',
    nome: 'LibriTech',
    descricao: 'Sistema de gerenciamento de biblioteca com CRUD completo. Backend em Java com MySQL.',
    tecnologias: ['Java', 'MySQL', 'Spring Boot'],
    nivel: 'EPIC',
    status: 'COMPLETO',
    xp: 100,
    github: 'https://github.com/gabriel-freitas96/LibriTech',
  },
  {
    id: 'mercado',
    nome: 'Mercado Condomínio 24h',
    descricao: 'Sistema de autoatendimento para mercadinho 24h de condomínio: o morador usa um totem touch, escolhe os produtos e paga sozinho.',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    nivel: 'LEGENDARY',
    status: 'COMPLETO',
    xp: 95,
    github: 'https://github.com/gabriel-freitas96/Mini-Mercado24hrs',
  },
  {
    id: 'clinica',
    nome: 'ClinicaFisio',
    descricao: 'Sistema para clínica de fisioterapia com painel administrativo: agenda, cadastro de pacientes, avaliações, pagamentos e relatórios. Projeto integrador da faculdade.',
    tecnologias: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
    nivel: 'LEGENDARY',
    status: 'COMPLETO',
    xp: 80,
    github: 'https://github.com/gabriel-freitas96/ClinicaFisioterapia.git',
  },
  {
    id: 'robo',
    nome: 'Robô de WhatsApp',
    descricao: 'Robô que responde automaticamente os clientes da minha loja online no WhatsApp Business assim que eles entram em contato.',
    tecnologias: ['Node.js', 'JavaScript'],
    nivel: 'RARE',
    status: 'EM ANDAMENTO',
    xp: 50,
    github: '',
  },
]

export const habilidades = [
  { categoria: 'Frontend', itens: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3','Python','Docker'] },
  { categoria: 'Backend', itens: ['Node.js', 'Java', 'Spring Boot', 'REST APIs','Python','Docker'] },
  { categoria: 'Banco de dados', itens: ['MongoDB', 'MySQL','PostgreSQL','Oracle'] },
  { categoria: 'Ferramentas', itens: ['Git', 'GitHub', 'Vite', 'Docker',] },
]

export const fases = [
  { id: 'origem', titulo: 'A ORIGEM', subtitulo: 'Sobre mim', tipo: 'sobre' },
  { id: 'inventario', titulo: 'INVENTÁRIO', subtitulo: 'Habilidades', tipo: 'habilidades' },
  ...projetos.map((projeto) => ({
    id: projeto.id,
    titulo: projeto.nome.toUpperCase(),
    subtitulo: 'Missão',
    tipo: 'projeto',
    projeto,
  })),
  { id: 'chefao', titulo: 'CHEFÃO FINAL', subtitulo: 'Contato', tipo: 'contato' },
]
export const contatos = [
  { rotulo: 'Email', texto: 'gabrieldevlacerda@gmail.com', link: 'mailto:gabrieldevlacerda@gmail.com' },
  { rotulo: 'LinkedIn', texto: 'in/gabriellacerda22', link: 'https://www.linkedin.com/in/gabriellacerda22/' },
  { rotulo: 'GitHub', texto: 'github.com/gabriel-freitas96', link: 'https://github.com/gabriel-freitas96' },
  { rotulo: 'WhatsApp', texto: '(83) 98141-4556', link: 'https://wa.me/5583981414556' },
]