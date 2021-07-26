function formatCash(str) {
    // console.log(str);
    let result = str.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    console.log(result);
    // return str.trim().split('').reverse().reduce((prev, next, index) => {
    //     return ((index % 3) ? next : (next + '.')) + prev
    // })
}
const PDelement = document.querySelectorAll('#formatPrice');
for (const element of PDelement) {
    const priceVND = formatCash(element.textContent);
    element.innerHTML = `${priceVND}`;

}

function parseNumberPrice(number)
{
    number = Math.round(number);
    const results = [];
    while(number > 1000)        
    {
        let div = number % 1000;
        results.push(number % 1000 < 10 ? number % 1000 + '00' : number % 1000 < 100?  number % 1000 + '0' : number % 1000 );
        number = Math.floor(number / 1000);
    }
    results.push(number);
    results.reverse();
    // return results;
    return results.join(',');
}

export{
    formatCash,
    parseNumberPrice
}