let quotesDiv = document.getElementById('newQuote');
let authorDiv = document.getElementById('author');
fetch('https://strangerthings-quotes.vercel.app/api/quotes')
.then(result=> result.json())
.then(data=> {
    quotesDiv.innerHTML += `<p> ${data[0].quote} <p>`
    authorDiv.innerHTML += `<p> ${data[0].author} <p>`
});

let button = document.getElementById('image-finder');

button.addEventListener("click", evt=>{
    let newImage = document.getElementById("image");

    newImage.innerHTML = `<h3> cat image <333 </h3> 
    <img src="https://loremflickr.com/320/240" />`
});