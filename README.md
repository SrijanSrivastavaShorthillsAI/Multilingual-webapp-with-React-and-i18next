# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## i18n

- now all these translation files are added from backend
- n these files are present on server translated by different people
- install i18next-http-backend
- add translation.json in public/locales/{en, hi, ar, de, fr}
- since, now these file will coming from server, so the process will be asynchronous, add suspense in app
