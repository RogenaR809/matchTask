const APIKEY =`9a9e150f50923c7727a5f0d43fa7a3cf`
const APIURL =`https://gnews.io/api/v4/top-headlines?category=business&lang=en&token=9a9e150f50923c7727a5f0d43fa7a3cf`
async function loadNews() {
    const response = await fetch(APIURL)
    const data = await response.json()
    console.log(data.articles[0].title)
    const title = document.querySelector("#news-list .news h3")
    title.textContent=data.articles[0].title
    const desc = document.querySelector("#news-list .news p")
    desc.textContent=data.articles[0].description
    const time = document.querySelector("#news-list .news time");
time.textContent = new Date(data.articles[0].publishedAt).toLocaleDateString(); //new date بتحول النص الطويل لتاريخ يفهمه الكود 
//toLocaleDateString() بتكتبه بالشكل المعتاد يوم/شهر/سنة.
const img = document.querySelector("#news-list .news .img");
img.style.backgroundImage = `url(${data.articles[0].image})`;
const card = document.querySelector("#news-list .news");
card.href = data.articles[0].url;
// الكارت 2
const title2 = document.querySelector("#news-list .news:nth-child(2) h3");
title2.textContent = data.articles[1].title;

const desc2 = document.querySelector("#news-list .news:nth-child(2) p");
desc2.textContent = data.articles[1].description;

const time2 = document.querySelector("#news-list .news:nth-child(2) time");
time2.textContent = new Date(data.articles[1].publishedAt).toLocaleDateString();

const img2 = document.querySelector("#news-list .news:nth-child(2) .img");
img2.style.backgroundImage = `url(${data.articles[1].image})`;

const card2 = document.querySelector("#news-list .news:nth-child(2)");
card2.href = data.articles[1].url;
// الكارت 3 
const title3 = document.querySelector("#news-list .news:nth-child(3) h3");
title3.textContent = data.articles[2].title;

const desc3 = document.querySelector("#news-list .news:nth-child(3) p");
desc3.textContent = data.articles[2].description;

const time3 = document.querySelector("#news-list .news:nth-child(3) time");
time3.textContent = new Date(data.articles[2].publishedAt).toLocaleDateString();

const img3 = document.querySelector("#news-list .news:nth-child(3) .img");
img3.style.backgroundImage = `url(${data.articles[2].image})`;

const card3 = document.querySelector("#news-list .news:nth-child(3)");
card3.href = data.articles[2].url;
 
}
console.log(APIURL)
loadNews();