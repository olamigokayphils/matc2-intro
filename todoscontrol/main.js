let activityList = [
    {
        task: "Drive to the Cinema",
        completed: false
    },
    {
        task: "A movie tonight",
        completed: false
    },
    {
        task: "Take a nap",
        completed: false
    }
]

const activityListParentElement = document.querySelector(".activity-list")

function writeArrayToDom(){
    activityListParentElement.innerHTML = ""
    activityList.forEach(function(item, index){
        // CREATE CHILD ELEMENT
        const newActivityDom = document.createElement("div")
        newActivityDom.className = "activity-list-item"

        newActivityDom.setAttribute("data-id", index)

        //CREATE CHILD ELEMENTS WITH INNER HTML
        // 1st Child ==> Task Name
        newActivityDom.innerHTML = `
        <h5>${item.task}</h5>
        `

        // 2nd Child ==> CheckBox
        const checkboxForActivity = document.createElement("input")
        checkboxForActivity.className=`checkbox checkbox${index}`
        checkboxForActivity.setAttribute("type", "checkbox")
        // Add Strike Through Function
        checkboxForActivity.onclick = function(){
            let checkbox = document.querySelector(`.checkbox${index}`)
            if(checkbox.checked == true){
                // GET ITEM TASK
                document.querySelector(`[data-id="${index}"]`).classList.add("strike-through")
                // Update Activity List
                activityList[index].completed = true
            }else{
                document.querySelector(`[data-id="${index}"]`).className = "activity-list-item"
                // Update Activity List
                activityList[index].completed = false
            }
        }

        // Append CheckBox
        newActivityDom.appendChild(checkboxForActivity)

        // 3rd Child ==> Delete Button
        const deleteActivityButton = document.createElement("i")
        deleteActivityButton.className = "fas fa-trash-alt trash"
        // Add delete function
        deleteActivityButton.onclick = function(){
            if(confirm("Delete Activity?")){
                activityList.splice(index, 1)
                writeArrayToDom()
            }
        }

        //Append Delete Button
        newActivityDom.appendChild(deleteActivityButton)


        // APPEND LIST-ITEM CHILD TO OVERALL PARENT ELEMENT
        activityListParentElement.appendChild(newActivityDom)

    })
}

writeArrayToDom()

const submitButton = document.querySelector(".form-button")
submitButton.addEventListener("click", function(event){
    event.preventDefault()
   const textInput = document.querySelector(".form-input")
   const textInputValue = textInput.value;

   if(textInputValue == ""){
       alert("Activity/Task cannot be empty!")
   }else{
       activityList.push({
           task: textInputValue,
           completed: false
       })

       writeArrayToDom()
       document.querySelector("form").reset()
   }
})