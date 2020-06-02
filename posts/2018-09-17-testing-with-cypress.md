---
image: https://i.imgur.com/3N55xi3.jpg
date: 2018-09-17
title: Testing applications with Cypress
description: Your headaches are over
---

**End-to-end tests are excellent because they reflect the actions of users.** This category of tests behaves like a real human, validating various parts of the application at the same time. *[Cypress](https://www.cypress.io/)* is a new *test runner* with the premise of being fast, easy and reliable for tests that runs in a browser.

**NOTE:** The ideal is to always make a test fail, then make it pass and finally refactor it. But for *Cypress* studies, most of the examples did not follow that order.

### What comes next
* *Cypress* instalation
* Configuring the test environment
* Making our first test
* Running our first test
* Checking a page element
* Testing the responsiveness of our elements
* How can we go deeper

### Installing Cypress

We can use *npm* install. Type in your terminal:

```
npm install --save-dev cypress
```
If everything goes well, we can now writer our first tests.

### Test configuration

I'll use [my personal website](https://tailomateus.github.io/) as an example. By default *Cypress* expects the integration tests to be inside the *cypress/integration* folders, so we'll have to create them.

If you do not want to use this default path, you can create a *cypress.json* [configuration file](https://docs.cypress.io/guides/references/configuration.html) at the root of your directory.

### Testing the page title

Our first test is very simple, we'll just check if the page title is working properly.

Inside the *cypress/integration* folder I created a file called *sample-spec.js*

```
describe('Personal website home page', () => {
  it('contains "Tailo Mateus Gonsalves" in the title', () => {
  })
})
```

The *describe* has two arguments, a string with the subject and a *callback function* that executes any code, within this function we can include several *it's* (several tests). The *it* function also expects two parameters. The return of the function should check our claim of the test against reality.

To test the homepage we will have to say where it is. As all our tests will be done on this page, so we can add it in a place that always runs before our tests:

```
describe('Personal Website home page', () => {
  beforeEach(() => {
    cy.visit('https://tailomateus.github.io/')
  })
  
  it('contains "Tailo Mateus Gonsalves" in the title', () => {
    cy.title().should('contain', 'Tailo Mateus Gonsalves)
  })
})
```


In the above example we added the *[cy.visit()](https://docs.cypress.io/api/commands/visit.html)* function in our *beforeEach*, so we ensure that before running a test, the code will know which page we are testing. We are claiming that the title of the page contains the name “Tailo Mateus Gonsalves”, [you can see other assertions supported here.](https://docs.cypress.io/guides/references/assertions.html#Chai)


### Running our first test

Since *Cypress* is not installed globally, we have to add the path of the *bin* folder  inside our folder *node_modules*. Use this command at the root of the project:

```
(npm bin)/cypress open
```

On my machine it was like that:

```
node_modules/cypress/bin/cypress open
```

If all goes well, this interface will open:

![](https://cdn-images-1.medium.com/max/800/1*LolhBhXNFHk0ne-Q1qIDRg.png)

The file we created is available, so we can run our test. We have an interface where we can see how our page is behaving and the results obtained.

![](https://cdn-images-1.medium.com/max/800/1*xb7WjOdjOUJe43hK3NhRYA.png)

### Checking an element on the page

Now let’s check if an element is actually present on the page. In this test we will validate if the profile image is visible.

As we are testing the same page, we can do in the same *describe*, just by adding a new *it*.

```
it('has a visible profile picture', () => {
  cy.get('.img_profile').should('be.visible')
})
```

This test uses *[cy.get()](https://docs.cypress.io/api/commands/get.html#Syntax)* to capture the element. If the element is being loaded asynchronously, this function will wait for *defaultCommandTimeout* to appear (the default value is 4 seconds and can be set to *[cypress.json](https://docs.cypress.io/guides/references/configuration.html#Timeouts)*).

Result of our tests:

![](https://cdn-images-1.medium.com/max/800/1*yZFX1NmJavGysMbeYntbUQ.png)

But if for some reason we made a mistake in the test, the result will be like that:

![](https://cdn-images-1.medium.com/max/800/1*YvE1hed6KvHJ7TBH1j-JOg.png)

### Testing responsiveness

Let’s do a slightly different test. I currently have to make sure the website will work in different dimensions. That way, all users will be able to use it correctly.

Since we are still testing the same page, we will only add another *describe* within the existing one. Here we test the width of 320px and check if the profile image is still visible. To change the width for this test, we can use *[cy.viewport()](https://docs.cypress.io/api/commands/viewport.html#Syntax)*.


```
describe('with a 320x568 viewport', () => {
  beforeEach(() => {
    cy.viewport(320, 568);
  })
   it('has a visible mobile profile picture', () => {
    cy.get('.img_profile').should('be.visible')
  })
})
```

By default the size is 1000×660, but we can change it in the configuration file, *cypress.json* mentioned earlier. You can test any screen size. see how our test was on mobile:

![](https://cdn-images-1.medium.com/max/800/1*TB71xoVOqBCoE26FHt3Vjg.png)

### I want to go deeper

[In the documentation](https://docs.cypress.io/api/introduction/api.html#Sections) itself you will find several examples. But if you want something visible, when you install *Cypress*, you will have a folder called "examples" with more than 100 tests to run.

![](https://cdn-images-1.medium.com/max/800/1*L2_GisT-XWYYqRDF8HLquA.png)

As you can see in the image, there are several types of functions. One cool thing that has not been explored in this article is how *Cypress* ranks between the *ajax* and *front-end* responses. We can control the results we get from the server.

**As your project gains new features, the chances of errors occurring increase dramatically.** And I know you do not want that. So just test and start implementing it in your projects.

**The codes of the examples are in [GitHub](https://github.com/TailoMateus/testing_personal_site_cypress).**

**Acknowledgments:** *This text was reviewed by [Marcos Gobbi](https://github.com/macpardo)* 

### Credits and References:

[Cypress Documentation](https://docs.cypress.io/api/introduction/api.html#Sections)

[An Intro to Web Site Testing with Cypress](https://css-tricks.com/an-intro-to-web-app-testing-with-cypress-io/)
