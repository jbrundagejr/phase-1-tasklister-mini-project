let createTaskForm = document.querySelector("#create-task-form")
let taskList = document.querySelector("#tasks")

let select = document.createElement("select")
let hi = document.createElement("option")
let med = document.createElement("option")
let low = document.createElement("option")

select.id = "selection"
hi.innerText = "Hi priority" 
hi.value = "high"
med.innerText = "Medium priority"
med.value = "medium"
low.innerText = "Low priority"
low.value = "low"

createTaskForm.append(select)
select.append(hi, med, low)



createTaskForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let newTask = evt.target["new-task-description"].value
  let newLi = document.createElement("li")
  let newButton = document.createElement("button")
  let selection = evt.target.querySelector("#selection")
  newButton.innerText = "X"
  newButton.addEventListener("click", () => {
    newLi.remove()
  })
  newLi.innerText = newTask + " " +selection.value
  taskList.append(newLi)
  newLi.append(newButton)
});
