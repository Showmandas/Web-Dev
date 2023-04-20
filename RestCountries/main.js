const loadCountries=()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res=>res.json())
    .then(data=>displayCountryData(data))
}

const displayCountryData=country=>{
// console.log(country);
const countryhtml=country.map(countries=>getAllCountry(countries))
// console.log(countryhtml);
const countryContainer=document.getElementById('countryContainer');
countryContainer.innerHTML=countryhtml.join(" ");
}
// const getAllCountry=country=>{
//     return `
//     <div class="countryDiv">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}" />
//     </div>
//     `
// }
const getAllCountry=({name,flags,area,region})=>{
    return `
    <div class="countryDiv">
    <h2>${name.common}</h2>
    <p>${area}</p>
    <p>${region}</p>
    <img src="${flags.png}" />
    </div>
    `
}

loadCountries()

