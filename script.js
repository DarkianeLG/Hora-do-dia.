function carregar() {
    let msg = window.document.getElementById('msg');
    let imge = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`;

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        imge.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora < 18) {
        //BOM TARDE!    
        imge.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } 

    else {
        //BOA NOITE!
        imge.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }

}
setInterval(carregar, 1000);