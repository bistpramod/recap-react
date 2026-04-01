React + TypeScript + Vite

This project template provides a minimal setup for running React with Vite using TypeScript, Hot Module Replacement (HMR), and ESLint.

Vite allows fast development and builds, while HMR updates components instantly in the browser without reloading the page.

Available React Plugins

Currently, two official plugins can be used with this template:

@vitejs/plugin-react
 – uses Oxc
 for transformation.
@vitejs/plugin-react-swc
 – uses SWC
 for faster compilation.

Both plugins enable React Fast Refresh and JSX support.

React Compiler

This template has the React Compiler enabled.

The React Compiler helps optimize React code automatically.
You can read more about it in the official documentation:

https://react.dev/learn/react-compiler

Note: Enabling the compiler may slightly affect development and build performance in Vite.

Expanding the ESLint Configuration

If you are building a production application, it is recommended to enable type-aware linting rules. These rules allow ESLint to use TypeScript type information to detect more issues.

Replace the default configuration with the following setup:


export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
