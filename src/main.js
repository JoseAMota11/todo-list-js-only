const ul = document.querySelector("#todo")
const searchInput = document.querySelector("#searchInput")

document.querySelector("#add").addEventListener("click", (e) => {
  e.preventDefault()
  window.open("../public/addTodo.html", "_self")
})

function showData(key) {
  if (localStorage.length > 0) {
    let arr = JSON.parse(localStorage.getItem(key))
    arr.forEach(element => {
      createTodo(element)
    })
  }
}

function createTodo(element) {
  let li = document.createElement("li")
  li.id = "list"
  li.className = element.status === true ? "finished" : "list"
  li.append(
    createElement("done", "fa-regular fa-circle-check", doneItemEvent), 
    textHolder(element.todo), 
    createElement("edit", "fa-solid fa-pen-to-square", editItemEvent), 
    createElement("delete", "fa-solid fa-trash", deleteItemEvent), 
    createSpan(element.id))
  ul.append(li)
}

function createElement(id, className, func) {
  const item = document.createElement("i")
  item.id = id
  item.className = className
  item.addEventListener("click", func)
  return item
}

function textHolder(element) {
  const span = document.createElement("span")
  span.textContent = element
  return span
}

function createSpan(id) {
  const span = document.createElement("span")
  span.textContent = id
  span.setAttribute("hidden", "true")
  return span
}

function deleteItemEvent(e) {
  const id = Number.parseInt(e.composedPath()[1].childNodes[4].innerText)
  let arr = JSON.parse(localStorage.getItem("todos"))
  let newArr = arr.filter(element => {
    return element.id !== id
  })
  localStorage.setItem("todos", JSON.stringify(newArr))
  ul.innerHTML = ""
  showData("todos")
}

function doneItemEvent(e) {
  const id = Number.parseInt(e.composedPath()[1].childNodes[4].innerText)
  let arr = JSON.parse(localStorage.getItem("todos"))
  let newArr = arr.map(element => {
    if (element.id === id) {
      element.status = !element.status
    }
    return element
  })
  localStorage.setItem("todos", JSON.stringify(newArr))
  ul.innerHTML = ""
  showData("todos")
}

function editItemEvent(e) {
  const todoText = e.composedPath()[1].innerText
}

searchInput.addEventListener("keyup", () => {
  let { value } = searchInput
  value = value.toLowerCase()
  let arr = JSON.parse(localStorage.getItem("todos"))
  if (value) {
    let newArr = arr.filter(element => {
      return element.todo.toLowerCase().includes(value)
    })
    localStorage.setItem("search", JSON.stringify(newArr))
    ul.innerHTML = ""
    showData("search")
  } else {
    ul.innerHTML = ""
    showData("todos")
    localStorage.removeItem("search")
  }
})

window.document.addEventListener("DOMContentLoaded", () => {
  showData("todos")
})