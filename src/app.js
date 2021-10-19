let konutKredileri=["konut kredisi"]
let html=""
html+="<ul>"
console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++){
    html+="<li>"+konutKredileri[i]+"</li>"
    console.log("<li>"+konutKredileri[i]+"</li>")
}
html+="</ul>"
console.log("</ul>")
document.getElementById("h1").outerHTML=html
console.log(html)
