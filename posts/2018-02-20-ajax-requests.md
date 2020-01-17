---
image: https://cdn-images-1.medium.com/max/1200/1*X4f9MUJG2O2ufvjW2tSjlg.png
titleImage: Image
date: 2018-02-20
title: How to make ajax requests
description: Ajax requests with Fetch API and Axios
---

Some time ago (not that long ago), people added the JQuery library to their projects. In some (still frequent) cases, only to use the ajax() function.

```
$.ajax({
    url:"https://api.github.com/users/tailomateus/repos",
    dataType: 'json',
    success: function(response){
  console.log(response);
    }
});
```

In addition to this function, JavaScript has a method, [XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest) that also makes requests. However, it takes many steps to achieve what is expected. This issue led to the creation of the Fetch and Axios APIs, which has more flexible features, including request and response concepts.

The Fetch and Axios APIs use the concept of promises. You can read more about it in the following links:

[JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)

[Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Fetch API - How it works

Below is an example of the Github API.

```
fetch('https://api.github.com/users/tailomateus/repos')
  .then(response => response.json())
  .then(data => console.log('data is', data))
  .catch(error => console.log('error is', error));
```

If you want to go deeper into the subject, I suggest:

[Introduction to fetch](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

[Using fetch - CSS Tricks](https://css-tricks.com/using-fetch/)

[Using fetch - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### SUPPORT

Personally I think the biggest problem is not having support in IE 11.

![Support Fetch API](https://tailomateus.github.io/images/support_fetch.png)


## Axios - How to use

The API is basically an http client, it works on browsers and nodejs servers. 

If you want to use in the browser, import the cdn:

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Or install it using npm:

```
npm install axios
```

Import the package:

```
ES5: var axios = require('axios'); 
ES6: import axios from 'axios';
```

After the installation, the code below is able to simulate a get request to the Github API.


```
axios.get('https://api.github.com/users/tailomateus/repos').then(function(response){
    console.log(response.data); 
}); 
```

To use the post method you need one more parameter, indicating the data sent to the server:

```
axios.post('/save', { firstName: 'Teste', lastName: 'Testes' })
  .then(function(response){
    console.log('Saved successfully')
});
```

### SUPPORT

It is supported by the most used browsers.

![Support Fetch API](https://tailomateus.github.io/images/support_axios.png)

To learn more about Axios API:

[Axios NPM](https://www.npmjs.com/package/axios)

[Getting Started With Axios](https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237)

## CONCLUSION

In this article we have demonstrated ways to make requests (JQuery, Fetch API, Axios). There are many other ways, neither being the single best one for every situation. The important thing is to always choose the best fit for each project.
