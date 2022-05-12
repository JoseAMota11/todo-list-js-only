const textArea = document.querySelector("#addTextArea")
let todos = []

document.querySelector("#save").addEventListener("click", () => {
  
  todos = JSON.parse(localStorage.getItem("todos")) ?? []
  saveTodos(todos)
  window.open("./index.html", "_self")
})

function saveTodos(arr) {
  if (textArea.value !== "") {
    arr.push(textArea.value)
    localStorage.setItem("todos", JSON.stringify(arr))
  }
}

