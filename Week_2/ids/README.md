# DOM Example - IDs

We're going to practice DOM manipulation for elements with IDs.

- Look at `ids.html` to see the HTML I have written for you.
- Open `ids.html` in Chrome and open up the Chrome Developer Tools.
- Do the following in the console:

## Part 1
- Use `.getElementById` to grab the element with the ID of `main-heading`.
- Use `.innerHTML` to change the contents of `main-heading` to be "Fun
  DOM Example".

## Part 2

I think the diagram of the DOM is slightly too big. I could open it in
an image editor and shrink it, but I can also change its size with
HTML, CSS, and JavaScript.

- Use `.getElementById` grab the image.
- Change the `.style.height` property of the image to be `5000px`.
- Hmm, that's too big. Try `300px`.  I like that better.

## Part 3

Is this image really the best illustration of the DOM we can come up
with? I want to change it to a different image.  How can we do that
using the techniques we've already learned?

- Use `.getElementById` to grab the image.
- Use `.setAttibute` to change the `src` attribute to be `img/dom_basic.png`.
- Perhaps that's better.
- Change it back to `img/dom_model.svg` for comparison's sake.

## Questions

- Why do we use `.innerHTML` to change the heading but `.setAttribute`
  to change the diagram?
- What was different about the way we changed the `style` of the image
  from the way we changed its `src`?
