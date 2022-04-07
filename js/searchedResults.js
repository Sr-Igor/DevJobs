function AvailableSearchItens(){
    let searchButton = document.querySelector(".search")
    searchButton.addEventListener("click", callSearchBoxes)
}

function searchJobs(vacanciesArray){
    event.preventDefault()

    //Field of elements
    let findJobInput = document.querySelector(".find-job")
    let states = document.querySelector(".states");
    let state = states.options[states.selectedIndex].value;
    let checkboxFullTime = document.querySelector(".checkbox-full-time").checked

    //Words written in the search field
    let wordsWritten = findJobInput.value.toLowerCase().split(" ")

    //Array with the vacancies that meet the conditions
    let filtersArray = []

    // Search conditions
    if(findJobInput.value == "" && state == 0 && checkboxFullTime == false){
        //This is a default condition with all search items empty
        fillboxes(vacanciesArray, currentPage)
        
    }else if(findJobInput.value == "" && state !== 0 || findJobInput.value == "" && checkboxFullTime == true){
        //If the text box is empty
        verifyFields(vacanciesArray, state, checkboxFullTime)     
         
    }else if(findJobInput.value !== "" || state !== 0 || checkboxFullTime == true){ 
        // If the text box is filled
        for (let i in vacanciesArray){
            //Breaks the vacancies title into individual words
            let vacancyWords =  vacanciesArray[i].vacancyName.toLowerCase().split(" ")
            //Checks if any of these words is the same as typed
            vacancyWords.some(function(item){
                if(wordsWritten.includes(item)){
                    //If equal, add the vacancy to the array
                    filtersArray.push(vacanciesArray[i])
                }
             })
             //Calls the function that checks the fields, passing the collected parameters
             verifyFields(filtersArray, state, checkboxFullTime)
         }
    }
}
 
function verifyFields(filtersArray, state, checkboxFullTime){

    /*Checks if state and checkbox are selected
     and calls the function that fills the screen
     with the corresponding vacancies*/
    if(state == 0 && checkboxFullTime == false){
        fillboxesSearch(filtersArray)

    }else if(state !== 0 && checkboxFullTime == false){
        let stateArray = []
        for (let i in filtersArray){
            if(filtersArray[i].uf == state){
                stateArray.push(filtersArray[i])
            }
        }
        fillboxesSearch(stateArray)
    }else if(state == 0 && checkboxFullTime == true){
        let stateArray = []
        for (let i in filtersArray){
            if(filtersArray[i].time == "Full Time"){
                stateArray.push(filtersArray[i])
            }
        }
        fillboxesSearch(stateArray)
    }else if(state !== 0 && checkboxFullTime == true){
        let stateArray = []
        for (let i in filtersArray){
            if(filtersArray[i].uf == state && filtersArray[i].time == "Full Time"){
                stateArray.push(filtersArray[i])
            }
        }
        fillboxesSearch(stateArray)
    }
}

function fillboxesSearch(resultsArray){
    // Filling the page with the corresponding vacancies

    //checks if any vacancies were found and if empty writes in the HTML
    if(resultsArray.length == 0){
        let boxContainer = document.querySelector(".box-jobs")
        let findJobInput = document.querySelector(".find-job").value
        let searchedTerm = findJobInput == "" ? "found" : `"${findJobInput}"`
        boxContainer.innerHTML = `<span style="font-size: 30px;">No Results ${searchedTerm}</span>`
        return
    }else{
        //Calls the function that fills the main page, passing the result array as a parameter
        fillboxes(resultsArray, resultsArray.length)
    }
}
AvailableSearchItens()

