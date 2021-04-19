import { h, app, text } from "./js/hyperapp.js"

app({
  init: 0,
  view: state =>
    h('div', { class: ``}, [
      text("Hello world!")
    ]),
  node: document.getElementById("app")
})