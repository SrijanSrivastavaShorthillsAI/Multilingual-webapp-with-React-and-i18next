# Multi-Language React App with i18n Integration

This project is a React application with multi-language support, utilizing the `i18next` library and its plugins to provide seamless language detection, translation management, and locale-based loading. The application automatically detects the user's preferred language and updates content accordingly. Users can also manually switch languages using a language selector component.

## Features

- **Automatic Language Detection**: Detects user location and preferred browser language.
- **Manual Language Switch**: Allows users to select a language via a Language Selector.
- **Dynamic Loading of Translations**: Loads translation files dynamically based on the selected language.
- **Local Storage for Language Preference**: Saves the user's selected language to persist across sessions.
- **Fallback Language Support**: Defaults to English if no matching language is found.
- **Right-to-Left (RTL) Support**: Supports languages like Arabic, with automatic direction switching.

## Project Structure

```markdown
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── locales
│   │   ├── ar
│   │   │   └── translation.json
│   │   ├── de
│   │   │   └── translation.json
│   │   ├── en
│   │   │   └── translation.json
│   │   ├── fr
│   │   │   └── translation.json
│   │   └── hi
│   │       └── translation.json
│   └── vite.svg
├── README.md
├── constant.js
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── language-selector.jsx
│   ├── i18n.js
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## Project Setup

### Key Files

- **App.jsx**: Main application component that sets up language detection and includes the content with translations.
- **i18n.js**: Configures i18next, setting up the necessary plugins for language detection, bindings, and backend support.
- **LanguageSelector.jsx**: Component that displays buttons for language switching, allowing users to select a preferred language.
- **constant.js**: Maps country codes to language codes to determine the default language based on IP information.

### Language Detection Logic

The language detection logic is set up in the `App.jsx` file using the following priority order:

1. **Local Storage**: Checks for a saved language setting from previous visits.
2. **Browser Language**: Detects and uses the default language of the user's browser.
3. **IP Location**: Falls back to IP-based location to determine language if other options aren't available.
4. **Default Language**: Defaults to English (`en`) if none of the above criteria apply.

### Language Support

- English (en)
- French (fr)
- Hindi (hi)
- German (de)
- Arabic (ar)

- Each language has its own translation file under the public/locales directory, and the app dynamically loads the correct translation based on user selection or automatic detection.

## Usage

- **Changing Language**: Click any button in the language selector to change the language.
- **Saving Language Preference**: The selected language will be saved in local storage, so on returning visits, the site will load in the saved language.
- **Automatic Language Detection**: The site will attempt to set the language automatically based on user settings, browser language, or IP location if no manual selection is made.

## Dependencies

- **react-i18next**: For integrating i18n into the React app.
- **i18next**: Core library for internationalization.
- **i18next-browser-languagedetector**: Detects the user's language based on browser settings and IP.
- **i18next-http-backend**: Backend support for loading translations.