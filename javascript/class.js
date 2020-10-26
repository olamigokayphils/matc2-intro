const leaderBoardRank = ["Iroro", "Adesina", "Moshood", "Eniola", "Philip", "Olugbenga", "Uche", "Eze", "Mary", "Enitan", "Abike"]

let leaderBoard = document.querySelector(".main-board")
let shuffleButton = document.querySelector("#shuffleButton")

shuffleButton.addEventListener("click", shuffleStudentBoard)

function shuffleStudentBoard(){
    leaderBoard.innerHTML= ""
    for(let index = 0; index < 5; index++){
        //Create A New Element
        let newElement = document.createElement("div")
        newElement.className= "main-list-item"
        let firstRandom = leaderBoardRank[Math.floor(Math.random() * leaderBoardRank.length)]
        let secondRandom = leaderBoardRank[Math.floor(Math.random() * leaderBoardRank.length)]


        newElement.textContent = `${firstRandom} VS ${secondRandom}`

        //Append the New Element
        leaderBoard.appendChild(newElement)

    }
}