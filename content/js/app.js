// const $ = document
// const searchBox = document.querySelector(".search-box");

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// let mainUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

// searchBox.addEventListener("keypress", (event) => {
//     let mainCity = searchBox.value
//     if (event.code === 'Enter') {
//         fetchApi(mainCity);
//     }
// })
// function fetchApi(city) {
//     fetch(`${mainUrl}${city}&appid=0439fe6570d7e749dbc69cea40cfa554`)
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
//{city name}&appid={API key}






 
// |  \/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _
// | |\/| | / _| || / _ \ || | '_| ' \/ -_) || |
// |_|  |_|_\__,_|/ \___/\_,_|_| |_||_\___|\_, |
//              | __ /                       | __ /


class Car{

    constructor(name, speed, since, compony) {

        this.name = name
        this.speed = speed
        this.since = since
        this.compony = compony

    }

}
class Electric extends Car {

    constructor(name, speed, since, compony, energy, polution) {
        super(name, speed, since, compony);

        this.energy = energy;
        this.polution = polution;
    }
    moved = () => {
        console.log(this.name,"moved");
    }
    
}

let Tesla = new Electric("tesla", 350, 2010, "Tesla Motors", "200w",0)
Tesla.moved()























