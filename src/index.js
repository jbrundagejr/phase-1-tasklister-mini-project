let createTaskForm = document.querySelector("#create-task-form")
let taskList = document.querySelector("#tasks")
createTaskForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let newTask = evt.target["new-task-description"].value
  let newLi = document.createElement("li")
  let newButton = document.createElement("button")
  newButton.innerText = "X"
  newButton.addEventListener("click", () => {
    newLi.remove()
  })
  newLi.innerText = newTask
  taskList.append(newLi)
  newLi.append(newButton)
});
