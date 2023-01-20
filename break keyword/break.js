  let input = prompt("Hey enter something")

  while (true){
    input = prompt(input);
    if(input === "stop copying me") {
      break;
    }
  }
  console.log("you won")