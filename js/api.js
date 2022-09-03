

const searchForm = document.querySelector('.search');
const input = document.querySelector('.controll');
const newsList = document.querySelector('.news-list');


searchForm.addEventListener('submit' , retrieve)

function retrieve(e){
    
    e.preventDefault()

    const apiKey = '45ebe4791a804e92807445e4160e1981'
    let topic = input.value;
    let url = 'https://newsapi.org/v2/everything?q='+topic+'&apiKey='+apiKey+''

    fetch(url).then((res)=>{
        return res.json()
    }).then(data=>{
        console.log(data)

        document.getElementById('img-item1').src = data.articles[0].urlToImage
        document.getElementById('img-item2').src = data.articles[1].urlToImage
        document.getElementById('img-item3').src = data.articles[2].urlToImage
        document.getElementById('img-item4').src = data.articles[3].urlToImage
        document.getElementById('img-item5').src = data.articles[4].urlToImage
        document.getElementById('img-item6').src = data.articles[5].urlToImage
        document.getElementById('img-item7').src = data.articles[6].urlToImage
        document.getElementById('img-item8').src = data.articles[7].urlToImage

        document.getElementById('a-item1').innerHTML = data.articles[0].title
        document.getElementById('a-item2').innerHTML = data.articles[1].title
        document.getElementById('a-item3').innerHTML = data.articles[2].title
        document.getElementById('a-item4').innerHTML = data.articles[3].title
        document.getElementById('a-item5').innerHTML = data.articles[4].title
        document.getElementById('a-item6').innerHTML = data.articles[5].title
        document.getElementById('a-item7').innerHTML = data.articles[6].title
        document.getElementById('a-item8').innerHTML = data.articles[7].title

        document.getElementById('a-item1').href = data.articles[0].url
        document.getElementById('a-item2').href = data.articles[1].url
        document.getElementById('a-item3').href = data.articles[2].url
        document.getElementById('a-item4').href = data.articles[3].url
        document.getElementById('a-item5').href = data.articles[4].url
        document.getElementById('a-item6').href = data.articles[5].url
        document.getElementById('a-item7').href = data.articles[6].url
        document.getElementById('a-item8').href = data.articles[7].url




    })

    
}
