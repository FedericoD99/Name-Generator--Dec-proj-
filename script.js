//Generate Prefix
function genPrefix (firstName){
    if(firstName.length > 5){
        return 'The Great'
    } else {
        return 'Master'
    }
}
//Generate first name
function genFirstName(firstName){
    const firstLetter = firstName.charAT(0).toLowerCase()
    if (firstLetter === 'a'){
        return 'Jeff'
    } else if (firstLetter ==='b'){
        return 'Pablo'
    } else{
          return 'Julian'
    }
}
//Generate middle name
function genMiddleName (roadType, favoriteColor){
    if(roadType === 'road'){
        return `${favoriteColor }ridge` // Ex: Blueridge
    }else if(roadType === 'street') {
        return
    }else {
        return `${favoriteColor }ridge`
    }
}

//generate last name
function genLastName (lastName){
const lastLetter = lastName.charAT(lastName.length-1)
if (lastLetter === 'a') {
    return 'Shadow'
} else if (lastLetter === 'e'){
    return 'Storm'
}else if (lastLetter === 'i'){
    return 'Storm'
} else if (lastLetter === 'o'){
    return 'Storm'
 }
  }
//generate suffix
function genSuffix(favoriteAnimal){
    return `of ${favoriteAnimal} clam.`
}

//Master name building function
function genFullName(){
    //get user's inputs from the html elements
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const roadType = document.getElementById('roadType').value.trim()
const favoriteColor = document.getElementById('favoriteColor').value.trim()
const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()
    //run name generating functions and store them in new variables
const prefix =genPrefix(firstName)
const newFirstName =genPrefix(firstName)
const middleName =genPrefix(roadType, favoriteColor)
const newLastName =genPrefix(lastName)
const suffix =genPrefix(favoriteAnimal)


    //Capitalized name variables when needed 
const capitalizedPrefix = capitalized(prefix)
const capitalizedFirstName = capitalized(newFirstName)
const capitalizedMiddleName = capitalized(middleName)
const capitalizedLastName = capitalized(newLastName)

    //Combine all of the name variables into a full new name

    //Display the new name
}

// Capitalization function
function capitalized(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase() 
}
