import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactCompiler from 'eslint-plugin-react-compiler'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
  {
    // Ignorar artefatos de build e pastas de cache
    ignores: ['dist', 'node_modules', '.next', 'out'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,   // Regras mais rigorosas de TS
      ...tseslint.configs.stylisticTypeChecked, // Melhora a consistência do código
      jsxA11y.flatConfigs.recommended,         // Acessibilidade (Essencial para Senior)
    ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'import': importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      
      // React Compiler (Como você já usa no Vite, o ESLint deve validar)
      'react-compiler/react-compiler': 'error',

      // Fast Refresh - Permitindo constantes de variantes (Shadcn UI)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Qualidade do Código e Clean Code
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error', // Força import type { ... }
      '@typescript-eslint/no-explicit-any': 'error',         // Proíbe o uso de 'any'
      
      // Organização de Imports (Crucial para times grandes)
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Desativar regras que conflitam com o novo React 19 / Compiler
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  }
)