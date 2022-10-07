`Example App COMPLETE Version` for Google Developer Student Club Workshop `React` Series

# Section 0: Environment Set-up
Refer to [`Set-up guide`](https://github.com/daqichen/SETUP)

## Instructions

Follow the appropriate directions below relative to your operating system. 

If you are a Windows user, you will becom a Linux user by installing the Windows Subsystem for Linux (WSL)!

### Mac users

1. Open a Terminal

2. Check to see if you have software installed or not.

You should already have VIM and CURL installed.
To check this, type `which vim` and `which curl`, respectively.

The output should look something like:

```
$ which vim
/usr/bin/vim
$ which curl
/usr/bin/curl
```

This works for all the software you are installing.

3. Install Git.

Follow the directions here to install Git if it is not already installed:

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#_installing_on_macos

4. Check SHELL.

To determine which shell you are using, type: `echo $SHELL`.

If it is not `/bin/bash`, then change the shell to bash with the `chsh` command:

```
chsh -s /bin/bash
```

## Windows users

1. Windows users must install the Windows Subsystem for Linux. 

Follow the instructions here to install it:

https://docs.microsoft.com/en-us/windows/wsl/install

2. Once you have installed WSL, you can start it by opening either a Command Shell or Powershell and typing `wsl`.

Now you will be able to follow the instructions for installing the rest of the software on Linux below.

### Linux users

1. You can install most everything you need all at once:

```
$ sudo apt install vim git curl
```

You can also check to see if something is installed (and see its full path) by typing `which` followed by whatever program you are looking for.

### EVERYONE

1. Install NVM.

The Node Version Manager (NVM) is package that helps you install, update, and switch between multiple versions of Node.js.

To install it, follow these directions:

https://github.com/nvm-sh/nvm#install--update-script

Since you have `curl` installed, you can run that entire first command:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. Install Node.js.

We will be using the Long Term Support (LTS) version of Node.
This is the version that GitHub Actions (autograder) uses by default.

```
$ nvm install --lts
```

3. Check what version is installed:

```
nvm ls
->     v16.17.0
default -> lts/* (-> v16.17.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v16.17.0) (default)
stable -> 16.17 (-> v16.17.0) (default)
lts/* -> lts/gallium (-> v16.17.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.20.0 (-> N/A)
lts/gallium -> v16.17.0
```

You should see a v16 installed.

## Review

You should now have the following commands available on your system:

1. `vim`
2. `curl`
3. `git`
4. `nvm`
5. `node`

---
# Section 1: Frontend Crash Course & Dynamic Styling
Refer to [`react-bootstrap docs`](https://react-bootstrap.github.io/getting-started/introduction)

Refer to [`bootstrap docs`](https://getbootstrap.com/docs/4.4/getting-started/theming/)

Refer to [`create-react-app docs`](https://create-react-app.dev/docs/getting-started)

Refer to [`React docs`](https://beta.reactjs.org/)

## Create React App

Open up a Terminal, `cd` into a workspace directory of your choosing:

```bash
pwd // check your current directory
mkdir dscWorkspace // create a new directory

npx create-react-app myfirstapp // or name it anything your heart desires
cd my-app
npm start
```

## Install dependencies

|Package|Ver.|Description|
|---|---|---|
|`react-bootstrap`|"^2.5.0"|a component-based library that provides native Bootstrap components as pure React components.|
|`bootstrap`|"^5.2.2"|popular CSS Framework for developing responsive and mobile-first websites.|
|`sass`|"^1.55.0"|offers a way to write styles for websites with more enhanced CSS syntax.|

To Install them, use the following command:

```bash
npm i sass
// Ignore the other two for now, we will do a deep dive into SASS in Section 1
```


## Light & Dark Mode, In `SCSS`


A good example is [`create-react-app docs`](https://create-react-app.dev/docs/getting-started)

We will be following this [`medium article`](https://javascript.plainenglish.io/the-best-way-to-add-dark-mode-to-your-react-sass-project-ce3ae3bd8616) closely in today's demo!

Going from `VANILLA` -> `NOVICE` -> `JEDI`, each with added difficulty, by the end you will have a cool UI that get "toggle" between "Light" and "Dark" mode!


### 1. `VANILLA` -> `NOVICE`: Introduce SCSS Variables to Stylesheets

Modify the project structure like so:

```
your_project/
├── src/
│   ├── styles/ //ADD this folder and a file for color variables
│   │   └── _colors.scss
│   ├── App.js
│   ├── App.scss // CHANGE file type to "scss"
│   └── ...
└── node_modules/
    └── packages_of_dependencies/
```

#### In `_colors.scss`, you want to add your GLOBAL color variables. They should be colors that represent all aspects of your UI, so keep in mind the contrast and versatility of the colors you choose.

```scss
// Your global color variables
$blue-purple: #4A44F2;
$purple: #7D79F2;
$blue-green: #04D9C4;
$green: #05F2AF;
$yellow: #F2CA50;
$red: #ff4136;
$dark-blue: #2c2c66;
$black: #000;
$pale-grey: #efefef;
```

#### Now you need to import `_colors.scss` into the main stylesheet, so in `App.scss`, add:

```scss
@import './styles/_themes.scss';

```

From there, you are able to utilize the global color variables you have selected in `App.scss`, like this:

```scss
/*
VANILLA
*/
background-color: #282c34;
color: white;

/*
NOVICE (SCSS properties)
*/
background-color: $purple;
color: $blue-green;
```

#### Specifically, we want to modify the color and background-color for _.App-header_ and _.App-link_:
```scss
.App-header {
    ... // other css properties
    background-color: $purple;
    color: $blue-green;
}

.App-link {
    color: $yellow;
}
```

### 2. `NOVICE` -> `JEDI`: In order to achieve toggling between modes, introduce & implement the concept of "Themes" to our scss.

Modify the project structure like so:

```
your_project/
├── src/
│   ├── styles/ 
│   │   ├── _colors.scss
│   │   └── _themes.scss // ADD this file
│   └── ...
└── node_modules/
    └── packages_of_dependencies/
```

#### In `_themes.scss`, you want to define "the relationship between style properties and the Theme they correspond to".

```scss
@import '_colors.scss';

$themes: (
  light: (
    primary-color: $dark-blue,
    accent-color: $purple,
    primary-text-color: $dark-blue,
    secondary-text-color: $black,
    general-background: $pale-grey,
  ),
  dark: (
    primary-color: $blue-green,
    accent-color: $green,
    primary-text-color: $blue-green,
    secondary-text-color: $pale-grey,
    general-background: $dark-blue,
  )
);
```

As you can see here, background color is grey when it's "Light" but dark blue when it's "Dark".

#### Introducing @mixin and @function with Maps in SCSS

"Map" in SCSS is able to populate CSS properties easily:

```scss
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}
```
...WHICH compiles to the following CSS properties:
```css
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}
```

_"Mixins allow you to define styles that can be re-used throughout your stylesheet. Mixins are included into the current context using the @include"_

#### Now we need to utilize these advanced SCSS notations in `_themes.scss`:

```scss
@mixin themed() {
  @each $theme, $map in $themes {
    .theme--#{$theme} & {
      $theme-map: () !global;
      @each $key, $submap in $map {
        $value: map-get(map-get($themes, $theme), '#{$key}');
        $theme-map: map-merge($theme-map, ($key: $value)) !global;
      }
      @content;
      $theme-map: null !global;
    }
  }
}

@function themedStyle($key) {
  @return map-get($theme-map, $key);
}
```

Here’s what’s happening here: ([Read More](https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995))

1.  The `themed` mixin iterates through all of your `$themes` and for that theme defines a global Sass map called `$theme-map`

2.  It takes the blurb of code you entered and outputs it with the theme-defined values in the place where you used the `themedStyle` function.

3. It outputs the themed blurb using @content

#### Now you need to import `_themes.scss` into the main stylesheet, so in `App.scss`, add:

```scss
@import './styles/_themes.scss';
// You can get rid of the import statement for _colors.scss now since you have defined the usage of colors in themes definition 
```

#### We want to define "Dark" and "Light" mode-specific properties in _.App-header_ and _.App-link_:

```scss
.App-header {
    ... // other css properties
    @include themed() {
        color: themedStyle('primary-color');
        background-color: themedStyle('general-background');
      }
}

.App-link {
    @include themed() {
        color: themedStyle('accent-color');
      }
}
```

### BUT not quite! Because we haven't modified `.js` but only the stylesheets

## Light and Dark Mode, In `Javascript`

#### Update import and Introduce `useContext` and `useState` in `App.js`

```js
import React, {useContext, useState} from 'react';
import './App.scss';

const initialThemeState = {
  theme: "light",
  setTheme: () => null
};

const ThemeContext = React.createContext(initialThemeState);

const App = () => {
  const [theme, setTheme] = useState(initialThemeState.theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme--${theme}`}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div> 
        </div>
    </ThemeContext.Provider>
  );
}

```

There's quite a bit to unpack here:

1. Functions starting with use are called `Hooks`. `useState` is a built-in Hook provided by React. It allows for data sharing across components and data updating. ([React Doc](https://beta.reactjs.org/learn#using-hooks))

2. `Context` lets components pass information deep down without explicitly passing props. ([React Doc](https://beta.reactjs.org/apis/react/createContext#creating-context))

3. `<ThemeContext.Provider>` wraps the entirety of the Application so you can expose the `Context` variables `theme` and `setTheme` throughout the application.


You might be confused as to why it is `setTheme: () => null` and how do we plan on update between the two themes. We are actually one final component, which is the actual "Toggle" for the user to select between Light and Dark. 

#### The Dropdown for "Light" and "Dark" Mode in `App.js`

```js
const App = () => {
  const [theme, setTheme] = useState(initialThemeState.theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme--${theme}`}>
         ...
              <ThemeSetter /> // RENDER the component
         ...
        </div>
    </ThemeContext.Provider>
  );
}

const themeOptions = [{ value: "light" }, { value: "dark" }];

export const ThemeSetter = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

```

## CONGRATS 🎉🎊🥂! Refresh and you should see a webpage that supports "Light" and "Dark" mode!

The FINAL file structure should look something like this: 
```
your_project/
├── src/
│   ├── styles/
│   │   ├── _colors.scss
│   │   └── _themes.scss
│   ├── App.js
│   ├── App.scss
│   └── ...
└── node_modules/
    └── packages_of_dependencies/
```

#### If you feel so inclined to follow "Modular" design practices, you can follow the sourcecode along and break the code into smaller modular components. I hope this gave you a glimpse into the potential of React Web Apps! 

The FINAL file structure should look something like this (`Modular` approach): 
```
your_project/
├── src/
│   ├── styles/
│   │   ├── _colors.scss
│   │   └── _themes.scss
│   ├── components/
│   │   ├── ThemeSetter.scss
│   │   └── ThemeContext.scss
│   ├── App.js
│   ├── App.scss
│   └── ...
└── node_modules/
    └── packages_of_dependencies/
```


Here's also an [article](https://www.toptal.com/sass/theming-scss-tutorial) on advanced theming with SASS/SCSS!

---
# Section 2: Backend ExpressJS


---
Below are the standard default documentations on React

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
