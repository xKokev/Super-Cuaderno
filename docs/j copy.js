const lista = document.getElementById("lista-dinamica")

const arrayItem = ["item 1", "item 2", "item 3"]

const fragment = document.createDocumentFragment()

arrayItem.forEach((item) => {
  const li = document.createElement("li")
  li.textContent = item
  fragment.appendChild(li)
})
