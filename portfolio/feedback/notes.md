# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working portfolio:

    - For a working portfolio, I think you are close to reaching this.
    - You design is very modular so I think adding sections should be relatively straight forward
    - Consider adding a landing page and completing your contact me section.

2.  Practice using Git / Github Flow:

    - You got good practice but I think you will want to either create a new repo for the project or make the current repo solely for the portfolio. I will add more on improvements at the end.

3.  Application of morning topics
    - Yes you are close to achieving this but you haven't been able to implement BEM.

---

## Specification

1. README - done

- If you are adding links in a md file you can do it like this [example link](https://www.markdownguide.org/basic-syntax/#links) rather than a URL.

2. BRANCHING - done

   - Try a focus on what you are doing once you are done add commit etc then move onto the next part.

3. SCSS - done / to work on

   - Keep on exploring SCSS, look at mixins and other features the pre processor will give you.
   - You have broken down your SCSS files which is great.
   - You will need to delete all the CSS files you have, bar the main.css. At some point you would have clicked auto compile and it has basically saved it as a setting. If you go into portfolio and delete the vscode folder it will remove this setting.

4. Mobile First - done

5. 25 commits - done

   - Towards the end the commits get a little bit vague

6. BEM - to work on

---

## Overall

As I said during the demo I think you have relished the chance to apply what we covered in the morning into your project. You did jump ahead which may be why you skipped BEM. I am sure you will be aware of this when you work on your next project. I am going to give you some constructive feedback to take on to this project and to take forward to your next projects.

---

## To work on

I think you just need to work naming with BEM, your project structure, using GIT and Updating your JS.

For BEM:

- Have a read of the [BEM docs](http://getbem.com/naming/).
- Do a little refresher with [Kevin Powell](https://www.youtube.com/watch?v=SLjHSVwXYq4)

Your code below.

```html
<article>
  <p>
    I am Morris, a junior web developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim, assumenda,
    fugit, cupiditate sapiente rem reiciendis voluptatem quas modi perferendis amet porro ducimus. Ab delectus hic alias
    illum eaque perspiciatis.
    <img class="portrait" src="./images/picture of morris.jpg" alt="morris" />
  </p>
</article>
```

Could be.

```html
<article class="about">
  <p class="about__text">
    I am Morris, a junior web developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim, assumenda,
    fugit, cupiditate sapiente rem reiciendis voluptatem quas modi perferendis amet porro ducimus. Ab delectus hic alias
    illum eaque perspiciatis.
    <img class="about__portrait" src="./images/picture of morris.jpg" alt="morris" />
  </p>
</article>
```

With GIT:

- Break your jobs down and Write a list of todo's
- Treat each one as a commit, you go in do that one thing commit and then move onto the next.

Portfolio Structure:

- Either set it up as its own repo on github or update the current repo so it is just everything from the portfolio folder.

- When we go to hosting you need everything to be on the root folder

With JS:

- Update your JS so it is ES6,
- Rename the x variable to something with more meaning.
- Could you re write your function to take a parameter?

```js
const revealProject = projectName => {
  // ???
};

revelProject("project-one");
```
