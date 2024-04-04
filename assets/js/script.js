

const url = "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed";


fetch(url)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
   // console.log(data);



    if (typeof data !== 'object' || data === null) {
      throw new Error('Data is not in the expected format (object)');
    }
    
    const container = document.getElementById("LessonInfo");

    const dataArray = Object.values(data.value);

   

    dataArray.slice(0, 8).forEach(item => {

    

     
   var myTest = document.createElement("div");
   myTest.classList.add("NewStyle");
    
    
  const ThirdParaf = document.createElement("p");
  if (item.Room == "P024") {
    ThirdParaf.classList.add("Red");
  } else if (item.Room == "P025") {
    ThirdParaf.classList.add("Yellow");
  } else if (item.Room == "N112b") {
    ThirdParaf.classList.add("Blue");
  } else if (item.Room == "P027-4") {
    ThirdParaf.classList.add("Orange");
  }

  ThirdParaf.textContent = JSON.stringify(item.Room);
  myTest.appendChild(ThirdParaf);

   const paraf = document.createElement("p");
   paraf.textContent = JSON.stringify(item.Team);
   myTest.appendChild(paraf);

   const SecondParaf = document.createElement("p");
   SecondParaf.textContent = JSON.stringify(item.Subject);
   myTest.appendChild(SecondParaf);

   const ForthParaf = document.createElement("p");
   ForthParaf.textContent = JSON.stringify(item.StartDate);
   myTest.appendChild(ForthParaf);

   container.appendChild(myTest);

        
       });

 
  })
  .catch(error => {
   
    console.error('Fetch failed:', error);
  });







// Create a new Date object
var currentDate = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
var dayOfWeek = currentDate.getDay();

// Define an array of days of the week
var daysOfWeek = ['Sunday', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'Saturday'];

// Get the name of the day using the day of the week index
var today = daysOfWeek[dayOfWeek];

// Output the name of the day
// console.log("Today is " + today);



// fetch second data from kontine


var Day = "Onsdag";

  const SecondUrl = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json";

  fetch(SecondUrl)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(SecondData => {
    if (today == "mandag") {
        const test = 0;
    } else if (today == "tirsdag") {
        const test = 1;
    } else if (today == "onsdag") {
        const test = 2;
     //   console.log(SecondData.Days[test]);
        const neewDish = SecondData.Days[test];
    //    console.log(neewDish.Dish);
        const OurFood = document.getElementById("Foods");
       OurFood.innerText= neewDish.Dish;



    } else if (today == "torsdag") {
        const test = 3;
    } else if (today == "fredag") {
        const test = 4;
    } 

    if (typeof SecondData !== 'object' || SecondData === null) {
      throw new Error('Data is not in the expected format (object)');
    }
    
})



// fetch third data from Rejseplanne

const ThirdUrl = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1";


fetch(ThirdUrl)
  .then(response => {
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   
    return response.json();
  })
  .then(data => {

    //console.log(data.MultiDepartureBoard);

    const container = document.getElementById("departureBoard");


    if (!data.MultiDepartureBoard.Departure) {
      throw new Error('MultiDepartureBoard data not found');
    }

    const firstFiveEntries = data.MultiDepartureBoard.Departure.slice(0, 5);




  //  const firstFiveEntries = data.MultiDepartureBoard.Departure.slice(0, 5);
    const BusContainer = document.getElementById("Bus");
    
    firstFiveEntries.forEach(entry => {
   

      var NewTest = document.createElement("div");
      NewTest.classList.add("ThirdStyle");
       

       if (entry.line == "18") {
        const ParafOne = document.createElement("p");
        ParafOne.classList.add("Red");
        ParafOne.textContent = JSON.stringify(entry.line);
        NewTest.appendChild(ParafOne);
       // console.log(entry.line);
       } else if (entry.line == "17") {
        const ParafOne = document.createElement("p");
        ParafOne.classList.add("Yellow");
        ParafOne.textContent = JSON.stringify(entry.line);
        NewTest.appendChild(ParafOne);
      //  console.log(entry.line);
       }
    
   
   
      const parafTwo = document.createElement("p");
      parafTwo.textContent = JSON.stringify(entry.stop);
      NewTest.appendChild(parafTwo);
   
      const ParafThree = document.createElement("p");
      ParafThree.textContent = JSON.stringify(entry.time);
      NewTest.appendChild(ParafThree);
   
   
      BusContainer.appendChild(NewTest);

    });
  })
  .catch(error => {
    console.error('Fetch failed:', error);
  });


// The Time


function OurTime() {

    const currentDate = new Date();


    const myMonth = currentDate.getDate();
    const MyHour = currentDate.getHours();
    const MyMinute = currentDate.getMinutes();
    const MyDay = currentDate.getDay();

   // console.log(myMonth);

const showTime = `${MyHour}`;
const ShowMinute = `${MyMinute}`;

const NewTime = document.getElementById("Hour");
const NewMinute = document.getElementById("Minute");

NewTime.innerText = showTime;
NewMinute.innerText = ShowMinute;


// console.log(myMonth);
const getWeekDay = [
   "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"
];
const NewWeekDay = getWeekDay[MyDay];
 // console.log(NewWeekDay);
 const getMonth = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli",
     "August", "September", "Oktober", "November", "December"
 ];

// console.log(getMonth);

 const DayByDay = getMonth[myMonth];

 // console.log(DayByDay);

const weekly = document.getElementById("getDataWeather");


const ApearData = `<h1>${NewWeekDay}<br>${myMonth}.${DayByDay}</h1>`;
const ApearWeek = `${myMonth}`;


weekly.innerHTML = ApearData;



}

OurTime()
setInterval(OurTime, 1000);



//Fetch data from weather

const WeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";

fetch(WeatherUrl)
.then(response => {
    if (!response.ok) {
    throw new Error("Problem with fetcha weather Data");
} 
return response.json();

})
.then(weatherData => {


// console.log(weatherData);

const MyWeather  = document.getElementById("Temprator");


var newTest = Math.round(weatherData.main.temp);
// console.log(newTest);


var showAll = `${newTest}&#8451;<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" >`;

MyWeather.innerHTML = showAll;

})



// Fetch data from TV2

// const tv2Url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fallenyheder%23";

// fetch(tv2Url) 

// .then(response => {

//  if (!response.ok) {
//     throw new Error("fail to fetch Data from TV2");
//  }
//  return response.json()

// })


// .then(TvData => {

//     console.log(TvData.items[1].title);


// })