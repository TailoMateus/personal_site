---
image: https://cdn-images-1.medium.com/max/1600/1*5ytPO1t6Dhz-RuN0NtBiJw.jpeg
titleImage: Image
date: 2018-03-07
title: Using ESlint and Git Hooks
description: How to handle commits well
---

How many times have you sent that push request full of errors or totally out of pattern? That commit sent 5 minutes before ending office hours. This can happen to anyone, regardless of whether you are a beginner or a senior. It's up to us to improve upon our limitations and lack of attention. The purpose of this article is to help you in this matter.

## Creating the package.json

Before we go any further, let's create the package.json file by running:
```
npm init –y
```
To know more:
[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)
[npm-init](https://docs.npmjs.com/cli/init)

## Installing ESlint

ESlint is a JavaScript code parser created in 2013 by Nicholas C. Zakas. Essentially, ESlint allows developers to find problems and create their own development rules and standards. It was written in Node.js and can easily be installed via npm.

```
npm install eslint --save-dev
```
Editing the configuration file:
```
./node_modules/.bin/eslint --init
```
Select the option: “Use a popular style guide” and then select the style guide of your company of choice.

Select the file format under "JavaScript". If everything goes well, the .eslintrc.js file will be created.. 

## Testing ESlint

Create a file named main.js and put the following code inside it:
```
a = 10
const b = 5;
b = 10
```

When reading the code, we can realize that some errors will happen. But let's test how ESlint behaves by executing:

```
./node_modules/.bin/eslint *.js
```

Now just fix the bugs :D

To know more:
[Documentation ESlint](https://eslint.org)
[Demo ESlint](https://eslint.org/demo/)
[Setting up ESLint on Sublime Text 3](https://medium.com/@junshengpierre/making-the-switch-from-jshint-to-eslint-5b6c4fa3c92a)

## Using npm Scripts

In the package.json file, replace this snippet:
```
“scripts”: {
	“lint”: “./node_modules/.bin/eslint *.js”
}
```
To run in terminal:
```
npm run lint
```

To know more:
[Why npm Scripts? ](https://css-tricks.com/why-npm-scripts/)

## Git Hooks

They are scripts that do something before or after a task, for example, before a commit does something.

Installing the Husky:
```
npm install husky@next --save-dev
```
To use let's add the prepush command in npm scripts:
```
“scripts”: {
	“lint”: “./node_modules/.bin/eslint *.js”,
	“prepush”: “lint”
}
```
Before we send the push, it will run the linter.

To know more:
[GitHub Repository](https://github.com/typicode/husky)

## Conclusion

I hope this was helpful. If you have any questions, throughout this article there are plenty of references for you to have a deeper understanding of the subjects. Do you have any tips? Leave a comment :D
