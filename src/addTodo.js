const textArea = document.querySelector("#addTextArea")
let todos = []

const obj = {
  id: Date.now(),
  todo: "",
  status: false
}

document.querySelector("#save").addEventListener("click", () => {
  todos = JSON.parse(localStorage.getItem("todos")) ?? []
  saveTodos(todos)
  window.open("../public/index.html", "_self")
})

function saveTodos(arr) {
  if (textArea.value !== "") {
    obj.todo = textArea.value.trim()
    arr.unshift(obj)
    localStorage.setItem("todos", JSON.stringify(arr))
  }
}

document.querySelector("#addTextArea").addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    document.querySelector("#save").click()
  }
})