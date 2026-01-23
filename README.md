# About Cryptical

Cryptical is a web-based crypto tracking application built as a school project, designed for regular users who want a clear and interactive way to explore cryptocurrency data.

The project allows users to browse live cryptocurrency information, select up to five coins for comparison, and view real-time price updates and visual reports. A key focus of the application is providing a smooth user experience while enforcing clear business rules, such as the five-coin selection limit, which is handled through an interactive dialog rather than blocking the user silently.

Cryptical was developed with an emphasis on clean architecture, separation of concerns, and proper state management, following modern frontend development practices.

---

## Technologies Used
*   React
*   TypeScript
*   Redux Toolkit
*   Material UI (MUI)
*   CoinGecko API
*   Real-time data handling
*   LocalStorage for persistence

---

## Key Features
*   Live cryptocurrency market data
*   Selection and comparison of up to 5 coins
*   Real-time price reports and charts
*   Persistent user selections using localStorage
*   Clear UX feedback when limits are reached
*   Modular and scalable component structure

---

## Challenges

One of the main challenges in this project was handling the five-coin selection limit in a way that felt natural to the user. Instead of simply blocking the action, the application allows the user to choose which coin to replace, maintaining a smooth and intuitive flow while keeping the business logic clean and predictable.

---

## Future Improvements

If more time were available, the next features I would like to add include:
*   Price alerts that notify users when a coin reaches a specific value
*   A portfolio feature that allows users to track how much of each coin they own
*   Automatic calculation of total asset value based on live prices

---

## About the Developer

My name is Daniel Machluf, I am 21 years old and currently learning full-stack development at John Bryce Academy in Tel Aviv.
This project was built as part of my learning process, with a strong focus on writing understandable, maintainable code while applying real-world frontend concepts.

GitHub:
[https://github.com/DanielMachluf](https://github.com/DanielMachluf)

GitHub project link:
[https://github.com/DanielMachluf/Cryptical](https://github.com/DanielMachluf/Cryptical)

Firebase project link:
[https://crypticalmac.web.app/](https://crypticalmac.web.app/) 

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
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
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
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
```
