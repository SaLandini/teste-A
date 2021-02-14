/* * =seting the background image by the result
 of the random number */

// vars
button = document.getElementById('button');
image = document.getElementById('image');
sub = document.getElementById('subtitle');
pe = document.getElementById('pebut');
image2 = document.getElementById('image-dois');
sub2 = document.getElementById('subtitle-dois')

// set the init background
imag = "assets/init.png"
image.src = imag
image2.src = imag

// adding the function on the button
button.addEventListener('click', () => {
    
    // personalidade 1
    perso1 = Math.floor(Math.random() * 10);
    
    // 1*

    if (perso1 === 0 || perso1 === 7){
        imag = "assets/person1/eren.png"
        image.src = imag
        sub.innerHTML = "Eren Tirica Cabeludo"
        pe.innerHTML = "Aperte Novamente"
    } else if (perso1 === 1 || perso1 === 4 ){
        imag = "assets/person1/shinji.png"
        image.src = imag
        sub.innerHTML = "Shinji"
        pe.innerHTML = "Aperte Novamente"
    } else if (perso1 === 2 || perso1 === 5){
        imag = "assets/person1/anthony.png"
        image.src = imag
        sub.innerHTML = "Anthony"
        pe.innerHTML = "Aperte Novamente"
    } else if (perso1 === 3 || perso1 === 6){
        imag = "assets/person1/sandler.png"
        image.src = imag
        sub.innerHTML = "Adam Sandler"
        pe.innerHTML = "Aperte Novamente"
    } else if (perso1 === 8 || perso1 === 9){
        imag = "assets/person1/hulk.png"
        image.src = imag
        sub.innerHTML = "Hulk Agiota"
        pe.innerHTML = "Aperte Novamente"
    } else {
        imag = "assets/init.png"
        image.src = imag
        sub.innerHTML = null
        pe.innerHTML = "Aperte"
    }

    // personalidade 2
    perso2 = Math.floor(Math.random()*10);
    console.log(perso2)
    // 2 *

    if (perso2 === 0 || perso2 === 9){
        imag2 = "assets/person2/thomasshelba.png"
        image2.src = imag2
        sub2.innerHTML = "Thomas Geladeira e Calculadora"
    } else if (perso2 === 1 || perso2 === 4){
        imag2 = "assets/person2/chaves.png"
        image2.src = imag2
        sub2.innerHTML = "Chaves Metaleiro"
    } else if (perso2 === 2 || perso2 === 5){
        imag2 = "assets/person2/hackerdehtml.png"
        image2.src = imag2
        sub2.innerHTML = "Hacker Proficional de Html"
    } else if (perso2 === 3 || perso2 === 6){
        imag2 = "assets/person2/odev.png"
        image2.src = imag2
        sub2.innerHTML = "O Programador disso aqui"
    } else if (perso2 === 8 || perso2 === 7){
        imag2 = "assets/person2/ancap.png"
        image2.src = imag2
        sub2.innerHTML = "Ancap Magico"
    }
})