# [FreeCodeCamp.com React TempLate](https://turtlewolfe.github.io/fccTempLate/ "Introduction to the Front End Libraries Projects It's now time to test out the frontend skills learned. This will help to bolster your skills, so don't hesitate to showcase your frontend skills in these projects. In this section you will complete the following projects with Bootstrap, jQuery, Sass, React and Redux:")

## to create from scratch

```bash
npx create-react-app . --use-npm
npm i gh-pages --save-dev
```

---

### or install from this repo

```bash
npm i
// to edit package.json
npm init
```

```json
{
  "name": "project name",
  "scripts": {
    "start": "react-scripts start",
    "deploy": "npm run build && gh-pages -d build",
    "build": "react-scripts build"
  },
  "homepage": "https://UserName.github.io/projectName"
}
```

```bash
// npm run build
npm run deploy
```

---

1. [Random Quote Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine 'Random Quote Machine')
1. [Markdown Previewer](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer 'Markdown Previewer')
1. [Drum Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine 'Drum Machine')
1. [JavaScript Calculator](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator 'JavaScript Calculator')
1. [25 + 5 Clock](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock '25 + 5 Clock')
   <!-- 1. [I'm an inline-style link with title](https://www.google.com "Google's Homepage") -->
   <!-- 1. [I'm an inline-style link with title](https://www.google.com "Google's Homepage") -->
   <!-- 1. [I'm an inline-style link with title](https://www.google.com "Google's Homepage") -->
   <!-- 1. [I'm an inline-style link with title](https://www.google.com "Google's Homepage") -->

---

1. [This Episode on Twitch](https://www.twitch.tv/videos/836894977 'This Episode of The Code Must Go On, I build a template for my freeCodeCamp projects, with FontAwesome & Analytics')
1. [FreeCodeCamp.com Front End Projects](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects "Introduction to the Front End Libraries ProjectsIt's now time to test out the frontend skills learned. This will help to bolster your skills, so don't hesitate to showcase your frontend skills in these projects. In this section you will complete the following projects with Bootstrap, jQuery, Sass, React and Redux:")
1. [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links 'Markdown Cheatsheet')
1. [The Essential Meta Tags for Social Media](https://css-tricks.com/essential-meta-tags-social-media/ 'These days, almost every website encourages visitors to share its pages on social media. We’ve all seen the ubiquitous Facebook and Twitter icons, among others, just begging to be clicked. This comes as no surprise as sharing via social media, the internet incarnation of word-of-mouth, is one of the most effective ways for businesses and individuals to gain awareness. ')
1. [GitHub Pages](https://youtu.be/SKXkC4SqtRk 'GitHub Pages Deploy & Domain')

[GitHub Pages Deploy & Domain: TraversyMedia  
![https://youtu.be/SKXkC4SqtRk][traversypages]](https://youtu.be/SKXkC4SqtRk')

[traversypages]: src/images/traversyPages.png 'GitHub Pages Deploy & Domain'

1. [@ScriptHammer on Twitter](https://twitter.com/ScriptHammer 'Contact me on Twitter')
1. [LinkedIn](https://www.linkedin.com/in/jonathan-pohlner-87796377/ 'FreeLance Web Developer')

[ScriptHammer.com  
![https://ScriptHammer.com][logo]](https://ScriptHammer.com 'Tech Journal')

[logo]: src/images/ScriptHammer.gif 'Tech Journal: ScriptHammer.com'

## [React CookBook](https://subscription.packtpub.com/book/web_development/9781783980727/2/ch02lvl1sec08/creating-our-first-react-component 'By Carlos Santana Roldán August 2018 Over 66 recipes that cover UI development, animations, component architecture, routing, and testing with React')

```bash
touch src/Home.js
mkdir src/components
mkdir src/components/Home
mkdir src/shared
mkdir src/shared/components
mkdir src/shared/images
mv src/App.js src/components
mv src/App.css src/components
mv src/App.test.js src/components
mv src/logo.svg src/shared/images
mv src/Home.js src/componets/Home
touch src/components/Home/Home.css
mkdir src/shared/components/layout
touch src/shared/components/layout/NavBar.js
# touch src/shared/components/layout/NavBar.css
touch src/shared/components/layout/Header.js
touch src/shared/components/layout/Footer.js
touch src/shared/components/layout/Content.js
npm i prop-types
# Ch02 Section 09
mkdir src/components/ToDo
touch src/components/ToDo/Todo.js
touch src/components/ToDo/List.js
touch src/components/ToDo/Todo.css
npm i uuid
# npm i typescript
npm i source-map-explorer
# pomodoro Timer
mkdir src/components/Pomodoro
touch src/components/Pomodoro/Timer.js
touch src/components/Pomodoro/Timer.css
# Rourter
npm i react-router-dom
```

## [Check Mark as Completed or Not: SitePoint Forums](https://www.sitepoint.com/community/t/react-cookbook-check-mark-as-completed-or-not/337875/2 'However, this way you would append the modified item to the list, not modify it in place; And either way, you’re still mutating the original item and only making a copy afterwards So try this instead:')

<!-- ```bash
npm install --save source-map-explorer
``` -->

## FCC projects

```bash
# Quote Machine
mkdir src/components/Quote
touch src/components/Quote/Machine.js
touch src/components/Quote/Machine.css
```

```bash
# MarkDown PreViewer
mkdir src/components/MarkDown
touch src/components/MarkDown/PreViewer.js
touch src/components/MarkDown/PreViewer.css
```

```bash
# Calculator Calculator
mkdir src/components/Calculator
touch src/components/Calculator/Calculator.js
touch src/components/Calculator/Calculator.css
```

```bash
# Drum DrumMachine
mkdir src/components/Drum
touch src/components/Drum/DrumMachine.js
touch src/components/Drum/DrumMachine.css
```

```bash
# pomodoro StopWatch
mkdir src/components/Pomodoro
touch src/components/Pomodoro/StopWatch.js
touch src/components/Pomodoro/StopWatch.css
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
