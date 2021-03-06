This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Setting up the project
```
export NPM_TOKEN=<your github token with read/write package permission>
npm install
```
## Available Scripts

In the project directory, you can run:

### `PORT=4000 npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Connecting to server

Use this variable before starting the server to set the hostname of the API server (will default to 127.0.0.1 unless set)
`set REACT_APP_SERVER_URL=<> npm start`

by default on the heroku instance it's set to our heroku deployed server
set REACT_APP_SERVER_URL=https://barbers-hill-woc-server.herokuapp.com/api

## Deploy to Heroku for testing

```~~~bash
heroku login
heroku git:remote -a barbers-hill-woc-library
npm run deploy
heroku config:set REACT_APP_SERVER_URL=https://barbers-hill-woc-server.herokuapp.com/api
heroku config:set NPM_TOKEN=<your github packages token>


Open a browser to this URL for testing
https://barbers-hill-woc-library.herokuapp.com/

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
```
