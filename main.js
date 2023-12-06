function openModal(contentId) {
    let modalTitleModal = document.querySelector('.modal-title');
    let modalTitleContentEnglish = document.getElementById('NameEnglish')
    let modalTitleContentPortugues = document.getElementById('NomePortugues')
    let modalParagraphEnglish = document.getElementById('paragraphEnglish')
    let modalParagraphPortugues = document.getElementById('paragraphPortugues')
    let modalTitleWord = document.getElementById('NomePalavra')
    let modalContentDescrition = document.getElementById('descritionWord')


    // Defina o conteúdo do título do modal com base no botão clicado
    if (contentId === 'Conteudo 1') {
        modalTitleModal.innerText = 'Modal 1';
        modalTitleContentEnglish.innerHTML = 'Lethologica'
        modalParagraphEnglish.textContent = 'Definition: The inability to remember a particular word or name. ';
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Letologia'
        modalParagraphPortugues.textContent = 'A incapacidade de lembrar uma palavra ou nome específico.'
        // conteudo da seta 
        modalTitleWord.innerHTML = 'letologia'
        modalContentDescrition.innerHTML = 'Agora, no entrelaçar das notas, exploraremos a Lacuna da memória(letologia) musical'
        
    } else if (contentId === 'Conteudo 2') {
        modalTitleModal.innerText = 'Modal 2';
        modalTitleContentEnglish.innerHTML = 'Quixotic'
        modalParagraphEnglish.textContent = 'Definition: Extremely idealistic, unrealistic, and impractical. ';
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Quixotesco'
        modalParagraphPortugues.textContent = ' Extremamente idealista, irrealista e impraticável ou Pessoa que tem intenções e ideais nobres, mas é sonhadora e afastada da realidade.'
        // conteudo da seta 
        modalTitleWord.innerHTML = 'Quixotesco'
        modalContentDescrition.innerHTML = 'Sábio, eu adoraria desfrutar de novos conhecimentos ancestrais e perdidos da música (quixotesco está em sinonimo de conhecimento perdidos da música) '
        
    } else if (contentId === 'Conteudo 3') {
        modalTitleModal.innerText = 'Modal 3';
        modalTitleContentEnglish.innerHTML = 'Discombobulate'
        modalParagraphEnglish.textContent = 'Definition: To confuse or disconcert; upset the normal operation or function of something. ';
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Desconcertar'
        modalParagraphPortugues.textContent = 'Confundir ou desconcertar; perturbar o funcionamento normal ou a função de algo.'
         // conteudo da seta
        modalTitleWord.innerHTML = 'Desconcertar'
        modalContentDescrition.innerHTML = 'Assim como as complexas melodias podem desconcertar( Discombobulate ) até o músico mais habilidoso, com perseverança, aprenderás a transformar o caos em harmonia.'

    }
    else if (contentId === 'Conteudo 4'){
        modalTitleModal.innerHTML = 'Modal 4'
        modalTitleContentEnglish.innerHTML = 'Entrepreneur'
        modalParagraphEnglish.innerHTML = 'Definition: A person who starts a business, taking on financial risks in the hope of profit. '
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Empreendedor'
        modalParagraphPortugues.textContent = 'Uma pessoa que inicia um negócio, assumindo riscos financeiros na esperança de lucro ou pessoa quer investir na sua vida não so no ramo financeiro'

        // conteudo da seta
        modalTitleWord.innerHTML = 'Empreendedor'
        modalContentDescrition.innerHTML = 'O cronograma meticulosamente estruturado exemplificava uma dedicação à descoberta de segredos esquecidos, enquanto o impulso empreendedor(Entrepreneur) de De Roses o incentivava a se aventurar em territórios musicais desconhecidos.'

        
    }
    else if (contentId === 'Conteudo 5') {
        modalTitleModal.innerHTML = 'Modal 5'
        modalTitleContentEnglish.innerHTML = 'Phenomenon'
        modalParagraphEnglish.innerHTML = 'Definition: A fact or event that can be observed and/or documented. '
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Fenômeno'
        modalParagraphPortugues.textContent = ' Um fato ou evento que pode ser observado e/ou documentado. '

         // conteudo da seta
        modalTitleWord.innerHTML = 'Fenômeno'
        modalContentDescrition.innerHTML = 'A guitarra, agora cheia da energia ancestral, tornar-se-á um farol de inspiração(sinonimo pode dar a ideia de se tornar um Fenômeno) para os amantes da música em todas as eras.'
        
    }
    else if (contentId === 'Conteudo 6') {
        modalTitleModal.innerHTML = 'Modal 6'
        modalTitleContentEnglish.innerHTML = 'Asthma'
        modalParagraphEnglish.innerHTML = 'Definition: A respiratory condition marked by spasms in the bronchi, causing difficulty in breathing. '
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Asma'
        modalParagraphPortugues.textContent = 'Uma condição respiratória marcada por espasmos nos brônquios, causando dificuldade em respirar.'

         // conteudo da seta
        modalTitleWord.innerHTML = 'Asma'
        modalContentDescrition.innerHTML = 'A respiração, às vezes me atrapalha causada pela asma da emoção, e se tornará uma parte inseparável da narrativa musical que estou tecendo.'

        
    }
    else if (contentId === 'Conteudo 7') {
        modalTitleModal.innerHTML = 'Modal 7'
        modalTitleContentEnglish.innerHTML = 'Bureaucracy'
        modalParagraphEnglish.innerHTML = 'Definition: A system of government or management in which decisions are made by state officials. '
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Burocracia'
        modalParagraphPortugues.textContent = 'Um sistema de governo ou gestão no qual as decisões são tomadas por funcionários do estado.'

         // conteudo da seta
        modalTitleWord.innerHTML = 'Burocracia'
        modalContentDescrition.innerHTML = 'Embora o sistema burocrático do rank dos melhores guitarristas possa parecer assustador, lembre-se de que a paixão é o que supera os obstáculos.'

        
    }
    else if (contentId === 'Conteudo 8') {
        modalTitleModal.innerHTML = 'Modal 8'
        modalTitleContentEnglish.innerHTML = 'Synchronize'
        modalParagraphEnglish.innerHTML = 'Definition: To cause to occur or operate at the same time or rate. '
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Sincronizar'
        modalParagraphPortugues.textContent = 'Ato de colocar duas ou mais coisas para interagirem com perfeita interação ou conexão e ao mesmo tempo.'

         // conteudo da seta
        modalTitleWord.innerHTML = 'Sincronizar'
        modalContentDescrition.innerHTML = 'No ápice da jornada, revelarei a verdadeira destreza das cordas. Em uma performance única, uniremos( sinonimo ) passado e presente, fazendo uma sinfonia que ressoará nos corações daqueles que a ouvirem.'

    }
    
    else if (contentId === 'Conteudo 9') {
        modalTitleModal.innerHTML = 'Modal 9'
        modalTitleContentEnglish.innerHTML = 'Schedule'
        modalParagraphEnglish.innerHTML = 'Definition: A plan that gives expected times for different things to happen; to plan for a particular time. '
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Agenda'
        modalParagraphPortugues.textContent = ' Um plano que estabelece tempos esperados para diferentes coisas acontecerem; planejar para um momento específico.'

         // conteudo da seta
        modalTitleWord.innerHTML = 'Agenda'
        modalContentDescrition.innerHTML = 'Cada aula será um ritual cuidadosamente programado, onde o tempo se curvará à nossa vontade de desenterrar segredos musicais perdidos.'

        
        
    }
    else if (contentId === 'Conteudo 10') {
        modalTitleModal.innerHTML = 'Conteudo 10'
        modalTitleContentEnglish.innerHTML = 'Knowledge'
        modalParagraphEnglish.innerHTML = 'Definition: Facts, information, and skills acquired through experience or education. '
        // content portugues
        modalTitleContentPortugues.innerHTML = 'Conhecimento'
        modalParagraphPortugues.textContent = 'Fatos, informações e habilidades adquiridas por meio de experiência ou educação.'

         // conteudo da seta
        modalTitleWord.innerHTML = 'Conhecimento'
        modalContentDescrition.innerHTML = 'A busca pelo conhecimento musical continuará, uma sinfonia eterna em constante evolução'

    }

}

 
// Áudio para PronunciaEnglish

// Exibir o conteudo do botao e nao exibir
let div_botao = document.getElementById('botao-div');
let content = document.getElementById('conteudo');

div_botao.addEventListener('click', function() {
    if (content.style.visibility === 'visible'){
        content.style.visibility = 'hidden'
    }else {
        content.style.visibility = 'visible'
    }
});

// exibir o audio dos significados das palavras
