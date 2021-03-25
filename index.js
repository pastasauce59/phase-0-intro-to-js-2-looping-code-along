 
const names = []

function writeCards(name, surprise){
    for (let i = 0; i < name.length; i++) {
        names.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
}

    return names;
}

function countDown(){
    let countdown = 10;
    while (0 <= countdown) {
        console.log(countdown--);
    
    }

  return countDown
}





