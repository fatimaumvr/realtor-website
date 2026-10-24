import { arr } from "./contents.js";
import { other } from "./contents.js";


function render(arr=other){
return arr.map((e)=>{
    const {name,price,des,size,img}=e
    const cal=size.reduce((val,next)=>{
       return val+next
    })
    return `<div class='div'><img src='${img}'/><div>
    <h1>${name}</h1><h4>${price}</h4><p>${des}</p><h3>${cal*cal}m²</h3></div></div>`
}).join('')
}

document.getElementById('main').innerHTML=render(arr)