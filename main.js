document.querySelector("#add").addEventListener("click", () => {
  window.open("./addTodo.html", "_self")
})

function showData() {
  if (localStorage.length > 0) {
    let arr = JSON.parse(localStorage.getItem("todos"))
    const newArr = arr.forEach(element => {
      return document.querySelector("#todo").innerHTML += `
      <li id="list" class="list">
        <button id="done"><ion-icon name="checkmark-done-outline"></ion-icon></button>
        ${element}
        <button id="edit"><ion-icon name="create-outline"></ion-icon></button>
        <button id="delete"><ion-icon name="close-outline"></ion-icon></button>
    </li>
      `
    })
  }
}

window.document.addEventListener("DOMContentLoaded", () => {
  showData()
})