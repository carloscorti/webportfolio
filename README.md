Available Scripts
In the project directory, you can run:

DEVELOPMENT
npm run webpack / yarn webpack
starts webpack watching file for development

npm run dev / yarn dev
Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

DEPLOYMENT (follow the order below)
1- npm run build-node / yarn build-node
Builds the node server with ES6 features.
It builds server aplication on ./build

2- npm run build-webpack / yarn build-webpack
Builds the app for production to the ./public/build folder.
The build is minified and the filenames include the hashes.

3- npm run start-prod / yarn start-prod
(on windows npm run start-windows-prod / yarn start-windows-prod)
Starts app for production (uses pm2 for core load optimization)
