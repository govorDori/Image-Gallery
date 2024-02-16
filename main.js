import { getData } from "./utils.js";
import { apiKey } from "./apiKey.js";
let page=1
const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=`
//let qString='&query=dodge'
//console.log(url+page+qString);
//getData(url+page+qString,renderImages)

let qString

function renderImages(data){
    document.querySelector('.loading').style.display='none'
    console.log(data);
    data.results.forEach(obj => {
        const imageElement = document.createElement('img')
        imageElement.src = obj.urls.small
        imageElement.alt = obj.alt_description
        document.querySelector('.image-gallery').appendChild(imageElement)
    })
    console.log(page);
    page++;
}

window.addEventListener('scroll', handleScroll)
document.querySelector('button').addEventListener('click',btnSearch)

function handleScroll(){
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200){
        document.querySelector('.loading').style.display='none'
        getData(url+page+qString,renderImages)
    }
}

function btnSearch(){
    let str = document.getElementById('typeSearch').value 
    qString=`&query=${str}`
    getData(url+page+qString,renderImages)

}