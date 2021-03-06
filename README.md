# FINAL PROJECT - The InCRUDibles

It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing. (video creation disabled)

## Card wall

https://trello.com/b/ZlpSd7LV/checity

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `12.14.1`.
    ```
    nvm install 12.14.1
    ```

### Set up your project

1. Fork this repository
1. Rename your fork to `checity-<team name>`
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```

### Start

1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)

### Test

* Run all tests
    ```
    npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.
```
npm run start:test
```
This starts the server on port `3030` and uses the `checity_test` MongoDB database,
so that integration tests do not interact with the development server.

### Packages used:
-faker 
-dotenv
-passport
-passport-local
-express-sessions
-connect-flash
-connect-mongo

### Password Authentication 
-reeCodeCamp tutorial https://www.youtube.com/watch?v=F-sFp_AvHc8
-zachgoll tutorial repository: https://github.com/zachgoll/express-session-authentication-starter/tree/final


### API's
Mapbox API used



### Deployed Web Page
https://checity.herokuapp.com/

Database hosted using MongoDB Atlas.
Webpage hosted using Heroku.
Auto deploy turned on for updated to the master branch.
Procfile contains the server start up command.