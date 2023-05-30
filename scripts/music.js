
async function getKanyeQuote() {
    const response = await fetch('https://api.kanye.rest/');
    const data = await response.json();
    return(data.quote);
}

let quoteDiv = document.getElementById("kanye-quote");

async function kanyeClick() {
    let quote = await getKanyeQuote();
    quoteDiv.innerHTML = '"' + quote + '"';
    quoteDiv.style.backgroundColor = generateColor();
}

kanyeClick();