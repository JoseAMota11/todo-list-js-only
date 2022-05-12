const ul = document.querySelector("#todo")

document.querySelector("#add").addEventListener("click", (e) => {
  e.preventDefault()
  window.open("../public/addTodo.html", "_self")
})

function showData() {
  if (localStorage.length > 0) {
    let arr = JSON.parse(localStorage.getItem("todos"))
    arr.forEach(element => {
      let li = document.createElement("li")
      li.id = "list"
      li.className = "list"
      li.append(createDoneItem(), element.todo, createEditItem(), createDeleteItem())
      ul.append(li)
    })
  }
}

function createDeleteItem() {
  const deleteItem = document.createElement("i")
  deleteItem.id = "delete"
  deleteItem.className = "fa-solid fa-trash"
  deleteItem.addEventListener("click", deleteItemEvent)
  return deleteItem
}

function createDoneItem() {
  const doneItem = document.createElement("i")
  doneItem.id = "done"
  doneItem.className = "fa-regular fa-circle-check"
  doneItem.addEventListener("click", doneItemEvent)
  return doneItem
}

function createEditItem() {
  const editItem = document.createElement("i")
  editItem.id = "edit"
  editItem.className = "fa-solid fa-pen-to-square"
  editItem.addEventListener("click", editItemEvent)
  return editItem
}

function deleteItemEvent(e) {
  const todoText = e.composedPath()[1].innerText
  let arr = JSON.parse(localStorage.getItem("todos"))
  arr.forEach(element => console.log(element.id))
}

function doneItemEvent(e) {
  const todoText = e.composedPath()[1].innerText
}

function editItemEvent(e) {
  const todoText = e.composedPath()[1].innerText
}

window.document.addEventListener("DOMContentLoaded", () => {
  showData()
})