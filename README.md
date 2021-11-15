# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Los usuarios deben poder:

- Ver el diseño óptimo para el sitio según el tamaño de la pantalla de su dispositivo

### Screenshot

![](images/375px.png)
![](images/1440px.png)

### Links

- Solution URL: [github](https://github.com/moimu/reto_fourCard)
- Live Site URL: [Vercel](https://reto-four-card-moimuretos.vercel.app/)
(https://reto-four-card-git-master-moimuretos.vercel.app/)
(https://reto-four-card-lljoo64s9-moimuretos.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid and Flexbox
- Desktop-first workflow
- Javascript
- templates HTML5

### What I learned

```html
  <template id="template">
    <article class="article" id="">
      <h2></h2>
      <p></p>
      <img src="" alt=""/>
    </article>
  </template>
```
```css
  .main{
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-areas: "header header header"
                        "section1 sectioncentral section2";
    grid-template-columns: auto auto auto;
    grid-template-rows: 30vh 70vh;
  }
  @media (max-width:1140px){
  .main{
          grid-template-areas: "header"
                              "section1"
                              "sectioncentral"
                              "section2";
          grid-template-columns: auto;
          grid-template-rows: 35vh auto auto auto;
      }
  }
```
```js
  const template = document.querySelector('template');
  const clontemplate1 = template.content.cloneNode(true);
```

### Continued development

- CSS grid
- RWD

## Author

- Website - [Moisés](https://moimu.github.io/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)