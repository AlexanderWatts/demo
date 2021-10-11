# Demo

Demo application for co600 team

# Getting started

You will need to install nodejs from:

https://nodejs.org/en/download/

Nodejs is needed for most modern javascript applications and also comes with `npm`.

`npm` is a package manager that allows you to install javascript libraries in your application.

See all `npm` packages at https://www.npmjs.com/

Once installed check node and npm are on your computer by typing the following in a terminal: 

```
node -v && npm -v
```

## Clone this repo

Install `git` from https://git-scm.com/downloads if needed

In a terminal change directory (`cd`) into your documents or desktop for example:

```
cd Documents
```

Clone this repository via:

```
git clone git@github.com:AlexanderWatts/demo.git
```

This will download this repository from github to your computer

## Running the application

To install required packages and start the api server

```
cd demo/api
npm install
npm start
```

api runs on http://localhost:9000/

To install required packages and start the frontend service

```
cd demo/frontend
npm install
npm start
```

frontend runs on http://localhost:8080/
