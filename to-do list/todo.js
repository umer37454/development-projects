let input = prompt('What would you like to do: new, list, delete & quit')
const newArray = []

while (input !== 'quit' && input !== 'q') {

  if (input === 'list') {
    console.log('**************')
    for (let i = 0; i < newArray.length; i++) {
      console.log(`${i} : ${newArray[i]}`)
    }
    console.log('**************')
  } else if (input === 'new') {
    const newIndex = prompt('Enter what to add')
    newArray.push(newIndex)
    console.log(`${newIndex} added`)
  } else if (input === 'delete') {
    const index = parseInt(prompt('Enter index number to delete to do'))
    if (!Number.isNaN(index)) {
      const delIndex = newArray.splice(index, 1)
      console.log(`${delIndex[0]} deleted`)
    } else {
      console.log('Invalid index number')
    }
  }

  input = prompt("What would u like to do")
}

console.log('Ok you Quit')
