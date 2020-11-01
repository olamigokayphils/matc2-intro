const leaderBoardRank = ["Iroro", "Adesina", "Moshood", "Eniola", "Philip", "Michelle", "Olugbenga", "Uche", "Eze", "Mary", "Enitan", "Abike"]

let leaderBoard = document.querySelector(".main-board")
let shuffleButton = document.querySelector("#shuffleButton")

shuffleButton.addEventListener("click", shuffleStudentBoard)

function shuffleStudentBoard(){
    leaderBoard.innerHTML= ""

    let copiedList = [...leaderBoardRank]
    function filterNames(name){
        copiedList = copiedList.filter((item)=>{
            return item !== name
        })
    }

    for(let index = 0; index < 5; index++){
        //Create A New Element
        let newElement = document.createElement("div")
        newElement.className= "main-list-item"
        let firstRandom = copiedList[Math.floor(Math.random() * copiedList.length)]
        // REMOVE FROM LIST
        filterNames(firstRandom)

        let secondRandom = copiedList[Math.floor(Math.random() * copiedList.length)]
        // REMOVE FROM LIST
        filterNames(secondRandom)

        newElement.textContent = `${firstRandom} VS ${secondRandom}`

        //Append the New Element
        leaderBoard.appendChild(newElement)

    }
}