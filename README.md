# AI Capstone

A hands-on capstone project exploring AI-assisted software development workflows, from planning and implementation to version control and documentation.

## Project Goals

- Practice building software with AI-assisted development tools
- Learn effective prompting and collaboration patterns with Cursor IDE
- Apply Git workflows for branching, committing, and project history
- Deliver a small, working Node.js application with clean, readable code
- Document decisions, setup steps, and project structure for future reference

## Technology Stack

- **Node.js** — runtime and application logic
- **Git** — version control and collaboration
- **Cursor IDE** — AI-assisted development environment

## AI-Assisted Development Workflow

This capstone uses Cursor IDE as a development partner, not a code generator. The workflow follows these practices:

1. **Define guidelines first** — Project conventions live in `CLAUDE.md` so the AI assistant follows consistent language, commit, and code-quality rules.
2. **Plan before implementing** — Important changes are explained and agreed on before code is written or modified.
3. **Keep scope focused** — Prompts target specific tasks; unrelated files are left unchanged to preserve reviewability.
4. **Review all AI output** — Generated code is read, tested, and refined before it is committed.
5. **Use Conventional Commits** — Commit messages (e.g. `feat:`, `fix:`, `docs:`) document what changed and why.

This approach keeps human judgment in the loop while using AI to speed up routine work and explore alternatives.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)
- [Cursor IDE](https://cursor.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ai-capstone
   ```

2. Install dependencies (when a `package.json` is added):

   ```bash
   npm install
   ```

3. Copy environment variables if needed:

   ```bash
   cp .env.example .env
   ```

4. Run the project (when scripts are defined):

   ```bash
   npm start
   ```

## Project Structure

```
ai-capstone/
├── src/              # Application source code
├── tests/            # Test files
├── .gitignore        # Git ignore rules
├── CLAUDE.md         # AI assistant guidelines
├── LICENSE           # MIT License
├── package.json      # Node.js dependencies and scripts
└── README.md         # Project documentation
```
