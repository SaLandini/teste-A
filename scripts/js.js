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
    if (anjo === 0){
        imag = "https://static.wikia.nocookie.net/neongenesisevangelion/images/5/53/15_C280A_giant-of-light.jpg/revision/latest/scale-to-width-down/340?cb=20120321165331&path-prefix=pt-br"
        image.src = imag
        sub.innerHTML = "Adam"
        pe.innerHTML = "Aperte Novamente"
    } else if (anjo === 1 || anjo === 4 || anjo === 7){
        imag = "https://static.zerochan.net/Lilith.%28Evangelion%29.full.2929932.png"
        image.src = imag
        sub.innerHTML = "Lilith"
        pe.innerHTML = "Aperte Novamente"
    } else if (anjo === 2 || anjo === 5 || anjo === 8){
        imag = "https://static.zerochan.net/Sachiel.%28Evangelion%29.full.2921624.png"
        image.src = imag
        sub.innerHTML = "Sachiel"
        pe.innerHTML = "Aperte Novamente"
    } else if (anjo === 3 || anjo === 6|| anjo === 9){
        imag = "https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2014/01/15/408060/20140115175017763159i.jpg"
        image.src = imag
        sub.innerHTML = "Adam Sandler"
        pe.innerHTML = "Aperte Novamente"
    } else {
        imag = "https://static.wikia.nocookie.net/neongenesisevangelion/images/1/19/Adams.jpg/revision/latest/scale-to-width-down/340?cb=20120314210415&path-prefix=pt-br"
        image.src = imag
        sub.innerHTML = null
        pe.innerHTML = "Aperte"
    }
})