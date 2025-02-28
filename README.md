# exchange-rates 

This project allows for the user to check exchange rates on several popular currencies, using Uphold API and its sandbox environment. 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

You must run this in order to install all dependencies and run the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. Some unit tests were performed but due to lack of time, they are barely worth mentioning.

### `npm run lint`

Run ESLint on the project. Check eslint.config.mjs in order to tweak the settings.

### `npm run format`

Run Prettier's format on the project.

## Notes

In order to run the project without CORS issues, I recommend using a browser extension (after a lot of trying I was unable to fix CORS with Uphold's API). I recommend the following: https://chromewebstore.google.com/detail/moesif-origincors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=pt-BR

## Design choices

The app uses TanStack's React Query, in order to cache the request response from the API. The stale time limit is the default (5 minutes) - this means that if the user comes back the page within 5 minutes,  the cached results will be used. 

The app uses Tailwind, scss syntax and the HeroUI library. It's the setup I've used for a while now and I feel like it brings out the best of both Tailwind and classic scss files: you get to write very simple and compreensive CSS with Tailwind, while also making sure that you components don't become unreadable, due to all the inline styles.
Right now, all the styles are in App.scss, but if the project kept growing or the styles were more complex, it would obviously be necessary to separate everything into different files.
Finally, the scss files follow the BEM naming conventions: https://getbem.com/.

## Further improvements

On a future occasion, I would like to:

- Fix CORS. If I had to take an educated guess, maybe the endpoints aren't "protected" in the sense they don't need a token to be accessed, but still need some sort of authentication in order to be accessed without having to use a browser extension. I tried several things, such as defining the API base url as a proxy, for my React app - which should work in theory, but was flagged as suspicious by the API, and all responses were 403 Forbidden.

    I tried to expose my local port using ngrok, and configure the authentication properly in the Sandbox environment (using the clientId and clientSecret on the request), but as expected that didn't make a difference. The next thing I would try would be to create a proxy Node.js app with express.js. I would also try to deploy the app to Github Pages, for instances, and configure that link in the Sandbox environment, although I doubt that would work.

    If I'm right and we do need a little more configuration to the request in order to access the API, we would probably have to create a custom Client (https://uphold.github.io/uphold-sdk-javascript/client.html). Finally, I'm very curious to know what's the CORS policy for the API!

- Improve styles. This wasn't the focus of the project and I think it looks quite nice and follows the mockup, but could look more like the actual application.
- Add tests. I hate to deliver a project with this ammount of tests but unfortunately there's only so much time in a day and this had to be delivered. I especially hate that I haven't developed any UI tests (render component, check buttons, check inputs...)

