let techos = [
    'anacmas',
    'anaclaracoelho',
    'beatrizresteves',
    'obrenoms',
    'andradebru',
    'cainlucas',
    'caiopeternela',
    'clarasantosmf',
    'inczdan',
    'danidanis',
    'davidsatag',
    'edinaildo',
    'elielclementino',
    'evandropcs',
    'fbc00',
    'felipesoaresfl',
    'fernandalizs',
    'gabriels999',
    'gabyvictoria0122',
    'gf-nunes',
    'globrito',
    'carolineingrid',
    'joaoprocopio',
    'launasci',
    'lorrananeves',
    'lukemariano',
    'luccaribeiro',
    'marcelavie',
    'mhenrique94',
    '129-ornellas',
    'marcosgrandesso',
    'marilia-borgo',
    'rafaelleone',
    'rdemora2',
    'ronald-ps',
    'sarabrangioni',
    'tabataf',
    'victoriuo',
    'ovictorprata'
]

let containerTechos = document.getElementById('containerTechos')

for (let techo of techos){
    fetch(`https://api.github.com/users/${techo}`).then((resp) => resp.json())
        .then((response) => {
            let article = document.createElement('article')
            let titleArticle = document.createElement('h3')
            let title = document.createTextNode(response[name])
            let userArticle = document.createElement('a')
            let user = document.createTextNode(response[login])
            let avatarArticle = document.createElement('img')
            let starsArticle = document.createElement('div')
            let star = document.createElement('img')
            let starCount = document.createTextNode(response[followers])
            avatarArticle.setAttribute('src', response[avatar_url]);
            avatarArticle.classList.add('avatar')
            userArticle.setAttribute('href', response[html_url]);
            userArticle.classList.add('special')
            userArticle.appendChild(user)
            titleArticle.classList.add('major')
            star.setAttribute('src', 'https://i.ibb.co/xgTWmpF/star.png')
            starsArticle.classList.add('stars_bar')
            starsArticle.appendChild(star)
            starsArticle.appendChild(starCount)
            titleArticle.appendChild(title)
            article.appendChild(avatarArticle)
            article.appendChild(starsArticle)
            article.appendChild(titleArticle)
            article.appendChild(userArticle)
            containerTechos.appendChild(article)
    })
}

