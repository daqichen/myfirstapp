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
# Section 1: Frontend Crashcourse & Dynamic Styling
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
npm i react-bootstrap sass bootstrap
```


## Dark Mode


A good example is [`create-react-app docs`](https://create-react-app.dev/docs/getting-started)

The file structure should look something like this: 
```
your_project/
├── src/
│   ├── styles/
│   │   └── _color.scss
│   ├── App.js
│   └── App.scss
└── node_modules/
    └── packages_of_dependencies/
```

In `_colors.scss`:
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

Here's also an [article](https://www.toptal.com/sass/theming-scss-tutorial) on advanced theming with SASS/SCSS!

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
