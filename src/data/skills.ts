import type { Translatable } from '../i18n';

export interface SkillGroup {
  /** Stable identifier, used for heading anchors. */
  id: string;
  name: Translatable;
  skills: Translatable[];
}

export interface SkillCategory {
  id: string;
  name: Translatable;
  groups: SkillGroup[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'engineering',
    name: { en: 'Software engineering', fr: 'Ingénierie logicielle' },
    groups: [
      {
        id: 'languages',
        name: { en: 'Languages', fr: 'Langages' },
        skills: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
      },
      {
        id: 'backend',
        name: 'Backend',
        skills: ['.NET / .NET Core', 'ASP.NET MVC', 'Node.js', { en: 'REST APIs', fr: 'API REST' }, 'Microservices'],
      },
      {
        id: 'frontend',
        name: 'Frontend',
        skills: [
          'React',
          'Angular',
          'Astro',
          { en: 'Progressive web apps (PWA)', fr: 'Applications web progressives (PWA)' },
          'HTML',
          'CSS',
        ],
      },
      {
        id: 'data',
        name: { en: 'Data & messaging', fr: 'Données & messagerie' },
        skills: ['SQL Server', 'Oracle', 'Apache Kafka', 'Apache Spark'],
      },
      {
        id: 'cloud-devops',
        name: 'Cloud & DevOps',
        skills: [
          'Microsoft Azure',
          'AWS',
          'Docker',
          'Kubernetes',
          'Azure DevOps',
          'GitLab',
          'CI/CD',
          'Git',
          'Vercel',
          // TODO: confirm with Sirous — name the observability tools you use (e.g. Application Insights, Grafana).
          { en: 'Observability', fr: 'Observabilité' },
        ],
      },
      {
        id: 'architecture-leadership',
        name: 'Architecture & leadership',
        skills: [
          { en: 'System design', fr: 'Conception de systèmes' },
          'Design patterns',
          { en: 'Technical leadership', fr: 'Leadership technique' },
          { en: 'Agile delivery (Scrum)', fr: 'Méthodes agiles (Scrum)' },
        ],
      },
    ],
  },
  // TODO: confirm with Sirous — only Claude Code and OpenAI Codex are confirmed. Keep the other AI skills
  // only if you have used them (in production or in substantial side projects) and can discuss them in an interview.
  {
    id: 'ai',
    name: { en: 'AI & Agentic Development', fr: 'IA & développement agentique' },
    groups: [
      {
        id: 'ai-assisted-development',
        name: { en: 'AI-assisted development', fr: 'Développement assisté par IA' },
        skills: [
          'Claude Code',
          'OpenAI Codex',
          'GitHub Copilot',
          'Cursor',
          { en: 'Spec-driven development', fr: 'Développement piloté par les spécifications' },
        ],
      },
      {
        id: 'agentic-ai',
        name: { en: 'Agentic AI', fr: 'IA agentique' },
        skills: [
          { en: 'AI agent design & orchestration', fr: 'Conception et orchestration d’agents IA' },
          { en: 'Tool / function calling', fr: 'Appel d’outils (function calling)' },
          { en: 'Multi-agent workflows', fr: 'Workflows multi-agents' },
          'Model Context Protocol (MCP)',
        ],
      },
      {
        id: 'llm-integration',
        name: { en: 'LLM integration', fr: 'Intégration de LLM' },
        skills: [
          { en: 'OpenAI & Anthropic APIs', fr: 'API OpenAI et Anthropic' },
          'Azure OpenAI',
          'Vercel AI SDK',
          { en: 'Streaming & structured outputs', fr: 'Streaming et sorties structurées' },
          { en: 'Prompt & context engineering', fr: 'Ingénierie de prompts et de contexte' },
        ],
      },
      {
        id: 'rag-evaluation',
        name: { en: 'RAG, evaluation & safety', fr: 'RAG, évaluation & sécurité' },
        skills: [
          { en: 'Retrieval-augmented generation (RAG)', fr: 'Génération augmentée par récupération (RAG)' },
          { en: 'Embeddings & vector databases', fr: 'Embeddings et bases de données vectorielles' },
          { en: 'LLM evaluation (evals)', fr: 'Évaluation de LLM (evals)' },
          { en: 'Guardrails & AI safety', fr: 'Garde-fous et sécurité de l’IA' },
          { en: 'LLM observability', fr: 'Observabilité des LLM' },
        ],
      },
    ],
  },
];
