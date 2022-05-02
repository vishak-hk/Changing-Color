let num = ["Green","Red","Yellow","Blue","Orange","Aqua","Navy","Lavender","White","Purple","Pink"]
let i = 0

num.innerHTML=i

function change() {
    document.body.style.backgroundColor = num[i]
    console.log(num[i])
    //var randomnum = Math.floor(Math.random() * col.length)
    document.getElementById("text").innerHTML = num[i]
    i= i+1 
    num.innerHTML = i
}