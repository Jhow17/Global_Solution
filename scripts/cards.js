const paises = ['Estados Unidos','França','China','Rússia','Coreia do Sul','Índia','Canadá']
const reatores = [93,56,55,37,25,19,19]
const bandeiras = [
    '/src/images/bandeiras/estados.jfif',
    '/src/images/bandeiras/franca.jfif',  // Atualizado para seguir o mesmo padrão
    '/src/images/bandeiras/china.jfif',
    '/src/images/bandeiras/russia.jfif',
    '/src/images/bandeiras/coreia.jfif',
    '/src/images/bandeiras/india.jfif',
    '/src/images/bandeiras/canada.jfif'
];


function transMaiusculos(paises) {
    return paises.map(pais => pais.toUpperCase());
}


function criarCards(paisMaiusculo){
    const container = document.querySelector('#container')
    paisMaiusculo.forEach((nacao,index) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.createElement('img')
        imagem.src = bandeiras[index]
        imagem.style.width = '100px';
        card.appendChild(imagem)

        const titulo = document.createElement('h3')
        titulo.innerText = nacao
        card.appendChild(titulo)

        const info = document.createElement('p')
        info.innerText = `Numero de reatores: ${reatores[index]}`
        card.appendChild(info)


        
        container.appendChild(card)
    });
}

const paisMaiusculo = transMaiusculos(paises)
criarCards(paisMaiusculo)
