# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Use esLint on app to analyzes and quickly find problems

### `npm run format`

Use prettier to format code

### `npm run isready`

Format code, find problems, run tests and builds the app for production to the `build` folder


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


***


# Install

### creating project :

`npx create-react-app my-app --template typescript`







### add project to git repo :

    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/pleleu-dev/mix-and-match.git







### setting up vs code :

PLugins : ESLint / Prettier / Babel Javascript

settings.json :

    {
        "css.lint.unknownAtRules": "ignore",
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "[json]": {
            "editor.quickSuggestions": {
            "strings": true
            },
            "editor.suggest.insertMode": "replace"
        },
        "editor.formatOnSave": false,
        // turn it off for JS and JSX, we will do this via eslint
        "[typescript]": {
            "editor.formatOnSave": false
        },
        "[typescriptreact]": {
            "editor.formatOnSave": false
        },
        "eslint.workingDirectories": [
            {
            "mode": "auto"
            }
        ],
        "eslint.validate": ["typescript", "typescriptreact"],
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    }







### setting up eslint /prettier :

eslint :

`npm i -D --save-exact eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-config-react-app eslint-import-resolver-typescript eslint-loader eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks babel-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

prettier :

`npm i -D --save-exact prettier prettier-eslint prettier-eslint-cli eslint-plugin-prettier`


.eslintrc

    // .eslintrc
    {
        "plugins": ["prettier", "@typescript-eslint"],
        "extends": ["airbnb-typescript", "react-app", "prettier"],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "project": "./tsconfig.json"
        },
        "settings": {
            "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
            }
        },
        "rules": {
            "object-curly-spacing": ["warn", "always"],
            "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "none"
            }
            ],
            "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "none"
            }
            ],
            "@typescript-eslint/no-explicit-any": [
            "error",
            {
                "ignoreRestArgs": true
            }
            ],
            "max-len": [
            "warn",
            {
                "code": 80,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreComments": true
            }
            ],
            "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
            ],
            "react/jsx-key": "error",
            "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                "**/*.test.js",
                "**/*.test.jsx",
                "**/*.test.ts",
                "**/*.test.tsx",
                "src/tests/**/*"
                ]
            }
            ],
            "react/jsx-props-no-spreading": "off",
            "import/prefer-default-export": "off",
            "react/jsx-boolean-value": "off",
            "react/prop-types": "off",
            "react/no-unescaped-entities": "off",
            "react/jsx-one-expression-per-line": "off",
            "react/jsx-wrap-multilines": "off",
            "react/destructuring-assignment": "off",
            "@typescript-eslint/comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "only-multiline",
            "exports": "only-multiline",
            "functions": "never"
            }]
        }
    }

.eslintignore

    // .eslintignore
    build/*
    public/*
    src/react-app-env.d.ts
    src/serviceWorker.ts


.prettierrc

    // .prettierrc
    {
        "printWidth": 80,
        "singleQuote": true,
        "trailingComma": "es5",
        "tabWidth": 2
    }

package.json add script :

    + "lint": "eslint --ext .js,.jsx,.ts,.tsx src --color",
    + "format": "prettier --write 'src/**/*.{ts,tsx,scss,css,json}'",
    + "isready": "npm run format && npm run lint && npm run build"








### pre-Commit hooks check using Husky:

`npm i -D --save-exact husky lint-staged`


package.json add :

    "husky": {
        "hooks": {
        "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
        "prettier --write"
        ]
    },








### add react material ui:

`npm install @material-ui/core`


add to index.html :
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


optional :

`npm install @material-ui/icons`

add to index.html :
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


### or instead add tailwind :

`npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`

`npm install @craco/craco`


package.json update scripts :

    - "start": "react-scripts start",
    - "build": "react-scripts build",
    - "test": "react-scripts test",
    + "start": "craco start",
    + "build": "craco build",
    + "test": "craco test",
      "eject": "react-scripts eject"


add craco config file :

    // craco.config.js
    module.exports = {
    style: {
        postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
        },
    },
    }


add tailwind config file :

    // tailwind.config.js
    module.exports = {
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        darkMode: false, // or 'media' or 'class'
        theme: {
            extend: {},
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }

change index.css :

    /* ./src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


### add test with with jest and enzyme:

`npm i -D ts-jest jest-fetch-mock enzyme enzyme-adapter-react-16 enzyme-to-json @types/enzyme @types/enzyme-adapter-react-16 --save-exact`

package.json

    "jest": {
        "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/index.tsx",
        "!src/serviceWorker.ts",
        "!src/reportWebVitals.ts"
        ],
        "coveragePathIgnorePatterns": [
        "./src/*/*.types.{ts,tsx}",
        "./src/index.tsx",
        "./src/serviceWorker.ts"
        ],
        "coverageReporters": [
        "json",
        "lcov",
        "text-summary",
        "clover"
        ],
        "coverageThreshold": {
        "global": {
            "statements": 95,
            "branches": 95,
            "lines": 95,
            "functions": 95
        }
        },
        "snapshotSerializers": [
        "enzyme-to-json/serializer"
        ],
        "transform": {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"
        },
        "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
        ],
        "moduleNameMapper": {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "src/(.*)$": "<rootDir>/src/$1"
        }
    }

    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "`test:coverage": "react-scripts test --coverage --runInBand --watchAll=false`",
        "eject": "react-scripts eject",
        "lint": "eslint --ext .js,.jsx,.ts,.tsx src --color",
        "format": "prettier --write src/**/*.{ts,tsx,scss,css,json}",
        "isready": "npm run format && npm run lint `&& npm run test:coverage && npm run build`"
    },

src/setupTests.ts

    /* eslint-disable import/no-extraneous-dependencies */
    import Enzyme from 'enzyme';
    import ReactSixteenAdapter from 'enzyme-adapter-react-16';
    Enzyme.configure({ adapter: new ReactSixteenAdapter() });

app.test.tsx

    import React from 'react';
    import { shallow } from 'enzyme';
    import App from '../App';
    test('renders the component', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });