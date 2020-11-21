// vars
button = document.getElementById('button');
image = document.getElementById('image');
sub = document.getElementById('subtitle');
pe = document.getElementById('pebut');

imag = "assets/init.png"
image.src = imag

button.addEventListener('click', () => {
    anjo = Math.floor(Math.random() * 10);
    console.log(anjo)
    if (anjo === 0 || anjo === 7){
        imag = "assets/anjos/adam.png"
        image.src = imag
        sub.innerHTML = "Adam"
        pe.innerHTML = "Aperte Novamente"
    } else if (anjo === 1 || anjo === 4 ){
        imag = "assets/anjos/lilith.png"
        image.src = imag
        sub.innerHTML = "Lilith"
        pe.innerHTML = "Aperte Novamente"
    } else if (anjo === 2 || anjo === 5){
        imag = "assets/anjos/Sachiel.png"
        image.src = imag
        sub.innerHTML = "Sachiel"
        pe.innerHTML = "Aperte Novamente"
    } else if (anjo === 3 || anjo === 6){
        imag = "assets/anjos/sandler.png"
        image.src = imag
        sub.innerHTML = "Adam Sandler"
        pe.innerHTML = "Aperte Novamente"
    } else if (anjo === 8 || anjo === 9){
        imag = "assets/anjos/hulk.png"
        image.src = imag
        sub.innerHTML = "Hulk Agiota"
        pe.innerHTML = "Aperte Novamente"
    } else {
        imag = "assets/init.png"
        image.src = imag
        sub.innerHTML = null
        pe.innerHTML = "Aperte"
    }
})