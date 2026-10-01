const botaoMusica = document.getElementById('musica');

botaoMusica.addEventListener('click', () => {

    const escolha = window.prompt('Escolha uma música de 1 a 10:');

    if (escolha == null || escolha < 1 || escolha > 10 ){
        window.alert('Valor inválido, por favor escolha um número entre 1 e 10')
    }
    else if (escolha == 1) {
        window.alert('Você escolheu a música Gods and Monsters!');
    }else if (escolha == 2 ){
        window.alert('Você escolheu a música Summertime Sadness!')
    }else if (escolha == 3){
        window.alert('Você escolheu a musica Cinnamon Girl!')
    }else if (escolha == 4){
        window.alert('Você escolheu a musica Tomorrow Never Came!')
    }else if (escolha == 5){
        window.alert('Você escolheu a musica Video Games!')
    }else if (escolha == 6){
        window.alert('Você escolheu a musica Queen of Disaster!')
    }else if (escolha == 7){
        window.alert('Você escolheu a musica Let The Ligth In!')
    }else if (escolha == 8){
        window.alert('Você escolheu a musica Beautiful Player!')
    }else if (escolha == 9){
        window.alert('Você escolheu a musica Get Free!')
    }else {
        window.alert('Você escolheu a musica Say Yes to Heaven')
    }
});