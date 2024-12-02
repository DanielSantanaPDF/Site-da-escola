function scrollRight() {
    const bloco = document.getElementById('bloco');
    if (bloco.scrollLeft + bloco.clientWidth >= bloco.scrollWidth) {
        bloco.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        bloco.scrollBy({
            top: 0,
            left: 20,
            behavior: 'smooth'
        });
    }
}

setInterval(scrollRight, 500);




function fechar(){ 
    var modal = document.getElementById('id01');
        modal.style.display = "none";
}


            function mudar(){
                window.scrollTo(0,100000);
            }


