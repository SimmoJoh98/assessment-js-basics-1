const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

//Prompt user with greeting and get the input
//Check to see if it's at least 10 characters long, with a success or fail message
//BONUS: Check for more conditions on the password, and output ASCII 'art'. I'm just going to use an emoji :^)

reader.question(`Welcome to the Password-Validator 900! Enter your password:`, (password) =>{
    let regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*_]{6,16}$/);

    switch(password !== null){
        //If the password is acceptable, check additional requirements against regex, THEN log success message.
        //otherwise, the password fails. It is POSSIBLE to have a success if the password meets at least 10 chars...
        case password.length > 9:{
            if(regex.test(password)){
                console.log(`Nice Password! Great Success!` + '☻')
            }else{
                console.log(`Success, however, the password could be better...`)
            }
            break;
        }
        default:{
            console.log(`Your password isn't very strong...(failure)` + '☹')
            break;
        }
    }
    reader.close()
})