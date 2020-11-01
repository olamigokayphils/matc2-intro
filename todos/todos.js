let activityList = [
    {
        task: "Drive to the Cinema",
        completed:false
    },
    {
        task: "Finish client's project",
        completed: false
    },
    {
        task: "Take a nap",
        completed: false
    }
]

const activityListParentElement = document.querySelector(".activity-list");
console.log(activityListParentElement)
function writeArrayToDOM(){
    activityListParentElement.innerHTML = ""
    activityList.forEach(function(activity, index){
        // CREATE CHILD ELEMENT
        const newActivityDom = document.createElement("div")
        newActivityDom.className = "activity-list-item"
        newActivityDom.setAttribute("data-id", index)

        // CREATE CHILD ELEMENTS WITH INNERHTML
        newActivityDom.innerHTML = `
        <div>
            <h5 color: grey">
              ${activity.task}
            </h5>
        </div>
        `
        // CREATE CHECKBOX
        const checkboxForActivity = document.createElement("input")
        checkboxForActivity.className=`checkbox checkbox${index}`
        checkboxForActivity.setAttribute("type", "checkbox")
        checkboxForActivity.onclick = function(){
            let checkbox = document.querySelector(`.checkbox${index}`)
            if(checkbox.checked == true){
                document.querySelector(`[data-id="${index}"]`).className = "activity-list-item strike-through"
            }else{
                document.querySelector(`[data-id="${index}"]`).className = "activity-list-item"
            }

        }

        // APPEND CHECK BOX
        newActivityDom.appendChild(checkboxForActivity)


        //CREATE DELETE ICON + BUTTON
        const deleteActivityButton = document.createElement("i")
        
        deleteActivityButton.className="far fa-trash-alt trash"
        deleteActivityButton.onclick = function(){
            alert("Delete Activity?")
        }

        // APPEND DELETE BUTTON
        newActivityDom.appendChild(deleteActivityButton)


        //APPEND CHILD TO PARENT ELEMENT
        activityListParentElement.appendChild(newActivityDom)
    })
}

writeArrayToDOM()


const submitButton = document.querySelector(".form-button")
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    const textInput = document.querySelector(".form-input")
    const textInputValue = textInput.value

    if(textInputValue == ""){
        alert("Activity/Task cannot be empty")
    }else{
        activityList.push({
            task: textInputValue,
            completed: false
        });

        writeArrayToDOM()
        document.querySelector("form").reset()
    }
})