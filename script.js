//Generate Prefix
function genPrefix (firstName) {
    if (firstName.length > 5) {
      return 'The Goat'
    } else {
      return 'Leader'
    }
  }
  //generate first name
  function genFirstName (firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
      return 'Jeff'
    } else if (firstLetter === 'b') {
      return 'Pablo'
    } else {
      return 'Julian'
    }
  }
  
  //generate middle name
  function genMiddleName (roadType, favoriteColor) {
    if (roadType === 'road' && favoriteColor ==='Blue') {
      return `Yellowstone` //EX:  blueridge
    } else if (roadType === 'street' || favoriteColor ==='red') {
      return `Gradio` //EX: blueson
    } else {
      return `${favoriteColor}stone` //EX: bluestone
    }
  }
  
  //generate Last Name
  function genLastName (lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a') {
      return 'Shadow'
    } else if (lastLetter === 'e') {
      return 'Storm'
    } else if (lastLetter === 'i') {
      return 'Blaze'
    } else if (lastLetter === 'o') {
      return 'Mist'
    } else if (lastLetter === 'u') {
      return 'Ice'
    } else {
      return 'Shade' // Default last name for letters not matched
    }
  }

  
  
  //generate Suffix
  function genSuffix(favoriteAnimal) {
    switch(favoriteAnimal) {
      case 'dog':
        return "black clan";  // Removed the unnecessary break here
      case 'cat':
        return "white clan";
      case 'Fox':
        return "Yellow clan";
      case 'snow lion':
        return "White clan";
      case 'Salvatore':
        return "Indian clan";
      case 'federico':
        return "Italian clan";
      default:
        return "greek clan";  
    }
  }
  
  //MAster Name Building Function
  function genFullName () {
    //Get the Users Inputs from HTML Elements
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()
  
    //Run Name Generating Functions & store them in new variables
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favoriteAnimal)
  
    //Capitalize Name Variables when needed
    const capitalizedPrefix = capitalize(prefix)
    const capitalizedFirstName = capitalize(newFirstName)
    const capitalizedMiddleName = capitalize(middleName)
    const capitalizedLastName = capitalize(newLastName)
  
    //Combine all of the Name variables in a new name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`
    console.log(fullName)
    //Display the new name
    document.getElementById('result').textContent = fullName
  }
  
  //Capitalization Function
  function capitalize (input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  }