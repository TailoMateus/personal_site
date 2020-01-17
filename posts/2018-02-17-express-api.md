---
image: https://i.imgur.com/nfwlTfm.png
titleImage: Image
date: 2018-02-17
title: Creating an Express API 
description: Or just venturing into the Back End
---

First of all, the Front-end always gets my attention and I think I’m better at it. However, I ventured into the dark side of the force (Back-end) and I can say that in many cases it wasn't a good thing.

My goal is not to tell which language or framework is good or bad, but each person has a preference, you're not wrong if you don't like some technology.

During the last five years, I’ve studied or worked with Java, C#, Zend Framework. I confess I’ve been disappointed with how many time it takes to configure the environment and build something visible.

Besides that technologies, I ventured into something more agile, so I tried to learn Ruby on Rails and Laravel, although I appreciate it so much, I realized, in that moment, I still didn't found the appropriate framework and lan ideal for me. In spite of the frustrations I have not stopped participating in some project or learning something new, all the knowledge acquired I will be reused in other time. While I didn't find the backend language and framework I'll continued to study on the front end.

For some time I started studying about [Node.js](https://nodejs.org/en/) and the [Express](https://expressjs.com/) framework and how in a few steps I can create an API. According to Express’s own website is a fast, flexible and minimalist web framework for Node.js.

NOTE: If you do not know NPM, start with the link below:

[Your first Node.js package](http://nodesource.com/blog/your-first-nodejs-package/)

**STEP 1 — Install Express**

```
npm install express –-save
```

**STEP 2- Create the server.js file**

At the beginning of the code is imported the `express` module and created an `app`. After it creates a route based on the HTTP method. The `res` and `req` objects are provided by the Node, equivalent to an HTTP request and a response. To finish I’m telling the created instance to listen on port 8080.


```
const express = require('express');
const app = express();

app.get('/', function (req, res) {
 return res.send('Hello world');
});

app.listen(process.env.PORT || 8080);
```

**STEP 3 — Start the Express server**

If everything went well, just go to localhost: 8080.


```
node server.js 
```

Or if you prefer, use [nodemon](https://github.com/remy/nodemon) to automate this process.

Obviously, with Node.Js and Express you can do several cool things, the introduction of this subject is precisely for you to research more and not be afraid to learn something new :D

**CONCLUSION**

As I mentioned at the beginning of the article, people have different preferences, and in my case it is essential to get a quick start with a technology, small rewards motivate me to continue studying.

Also, make sure to test something new or to participate in some project for what they are using. There are good things for somethings and bad things for others. Simple!

**READ MORE**

[Build Node.js RESTful APIs in 10 Minutes](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)

[Building a Node.js REST API with Express](https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6)
