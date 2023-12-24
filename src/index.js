function handleSearchSubmit(event){
    event.preventDefault();

    input = document.querySelector("#input-field");
    console.log(input.value);

    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = input.value;
}

let searchForm= document.querySelector("#search-form");
searchForm.addEventListener("submit",handleSearchSubmit)