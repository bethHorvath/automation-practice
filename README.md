This app has been created with the sole purpose of helping others learn how to write automation tests. The app is a basic react app and has an playwright automation suite set up to test.

If you'd like to practice writing automation tests, please follow the instructions below.
# Getting Started 
First you'll need to clone this repo to your local machine using `git clone` 
The navigate to the root directory in your terminal
Run `npm i` to install all the necessary packages

To run the app, use `npm start`
This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## For automation testing
The config is set up to run the app locally when you run the tests so you don't need to worry about starting the application.
To run all the tests in a headless state use:
`npx playwright test`

To run the tests in a headed manner, in the browser, run `npx playwright test --headed`

To run a specific test file, copy the relative path of that file (right click on the file and `copy relative path`) and run: 
`npx playwright test <your test file path>`. 
e.g. `npx playwright test automation-practice/tests/app.spec.ts`

To see the report after running a test, run `npx playwright show-report`

## Other commands 
(for the purpose of practicing automation testing you can ignore these)
### `npm test`
(for unit tests)
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
