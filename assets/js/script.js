
// Fetch data from techCollege

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

    const filteredData = dataArray.filter(item => item.Room === "P024");
    

   filteredData.slice(0, 3).forEach(item => {

     // console.log(item);
     
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

  ThirdParaf.textContent = item.Room;
  myTest.appendChild(ThirdParaf);



   const paraf = document.createElement("p");
   paraf.textContent = item.Team;
   myTest.appendChild(paraf);

   const SecondParaf = document.createElement("p");
   SecondParaf.textContent = item.Subject;
   myTest.appendChild(SecondParaf);

   const ForthParaf = document.createElement("p");
   const startTime = new Date(item.StartDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   ForthParaf.textContent = startTime;
   myTest.appendChild(ForthParaf);

   container.appendChild(myTest);


 
    //    console.log(item);


       });
    
  })
  .catch(error => {
   
    console.error('Fetch failed:', error);
  });



//No 2
// Fetch data from techCollege

const GetUrl = "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed";


fetch(GetUrl)
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

    const filteredData = dataArray.filter(item => item.Room === "P025");
    

   filteredData.slice(0, 3).forEach(item => {

     // console.log(item);
     
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

  ThirdParaf.textContent = item.Room;
  myTest.appendChild(ThirdParaf);



   const paraf = document.createElement("p");
   paraf.textContent = item.Team;
   myTest.appendChild(paraf);

   const SecondParaf = document.createElement("p");
   SecondParaf.textContent = item.Subject;
   myTest.appendChild(SecondParaf);

   const ForthParaf = document.createElement("p");
   const startTime = new Date(item.StartDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   ForthParaf.textContent = startTime;
   myTest.appendChild(ForthParaf);

   container.appendChild(myTest);

 
    //    console.log(item);


       });
    
  })
  .catch(error => {
   
    console.error('Fetch failed:', error);
  });


//No3
// Fetch data from techCollege

const FetchThirdUrl = "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed";


fetch(FetchThirdUrl)
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
    const filteredData = dataArray.filter(item => item.Room === "N112b");

    filteredData.slice(0, 3).forEach(item => {

     // console.log(item);
     
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

  ThirdParaf.textContent = item.Room;
  myTest.appendChild(ThirdParaf);



   const paraf = document.createElement("p");
   paraf.textContent = item.Team;
   myTest.appendChild(paraf);

   const SecondParaf = document.createElement("p");
   SecondParaf.textContent = item.Subject;
   myTest.appendChild(SecondParaf);

   const ForthParaf = document.createElement("p");
   const startTime = new Date(item.StartDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   ForthParaf.textContent = startTime;
   myTest.appendChild(ForthParaf);

   container.appendChild(myTest);


 
    //    console.log(item);


       });
    
  })
  .catch(error => {
   
    console.error('Fetch failed:', error);
  });



// No 4

// Fetch data from techCollege

const FetchForthUrl = "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed";


fetch(FetchForthUrl)
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
    const filteredData = dataArray.filter(item => item.Room === "P027-4");

    filteredData.slice(0, 3).forEach(item => {

      console.log(item);
     
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

  ThirdParaf.textContent = item.Room;
  myTest.appendChild(ThirdParaf);



   const paraf = document.createElement("p");
   paraf.textContent = item.Team;
   myTest.appendChild(paraf);

   const SecondParaf = document.createElement("p");
   SecondParaf.textContent = item.Subject;
   myTest.appendChild(SecondParaf);

   const ForthParaf = document.createElement("p");
   const startTime = new Date(item.StartDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   ForthParaf.textContent = startTime;
   myTest.appendChild(ForthParaf);

   container.appendChild(myTest);


 
    //    console.log(item);


       });
    
  })
  .catch(error => {
   
    console.error('Fetch failed:', error);
  });




  

  //-----


var currentDate = new Date();

var dayOfWeek = currentDate.getDay();


var daysOfWeek = ['Sunday', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'Saturday'];


var today = daysOfWeek[dayOfWeek];

// Output the name of the day
// console.log("Today is " + today);



// Fetch Time to show on the top of the second section
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Add leading zero if hours/minutes is less than 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Display the formatted time
  const NewTime = document.getElementById("Hour");
  NewTime.innerText = hours;

  const NewMinute = document.getElementById("Minute");
  NewMinute.innerText = minutes;

 
}

// Call getCurrentTime function initially
getCurrentTime();

// Update time every second
setInterval(getCurrentTime, 1000);




// fetch second data from kontine


var Day = "mandag";

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
     
        //  console.log(SecondData.Days[test]);
          const neewDish = SecondData.Days[test];
      //    console.log(neewDish.Dish);
          const OurFood = document.getElementById("Foods");
         OurFood.innerText= neewDish.Dish;
    } else if (today == "tirsdag") {
        const test = 1;
      
        //  console.log(SecondData.Days[test]);
          const neewDish = SecondData.Days[test];
      //    console.log(neewDish.Dish);
          const OurFood = document.getElementById("Foods");
         OurFood.innerText= neewDish.Dish;
    } else if (today == "onsdag") {
        const test = 2;

     //   console.log(SecondData);
      //  console.log(SecondData.Days[test]);
        const neewDish = SecondData.Days[test];
    //    console.log(neewDish.Dish);
        const OurFood = document.getElementById("Foods");
       OurFood.innerText= neewDish.Dish;

    } else if (today == "torsdag") {
        const test = 3;
        console.log(SecondData);
        //  console.log(SecondData.Days[test]);
          const neewDish = SecondData.Days[test];
      //    console.log(neewDish.Dish);
          const OurFood = document.getElementById("Foods");
         OurFood.innerText= neewDish.Dish;
    } else if (today == "fredag") {
        const test = 4;
     //   console.log(SecondData);
        //  console.log(SecondData.Days[test]);
          const neewDish = SecondData.Days[test];
      //    console.log(neewDish.Dish);
          const OurFood = document.getElementById("Foods");
         OurFood.innerText= neewDish.Dish;
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

    const firstFiveEntries = data.MultiDepartureBoard.Departure.slice(0, 6);




  //  const firstFiveEntries = data.MultiDepartureBoard.Departure.slice(0, 5);
    const BusContainer = document.getElementById("Bus");
    
    firstFiveEntries.forEach(entry => {
   

      var NewTest = document.createElement("div");
      NewTest.classList.add("ThirdStyle");
       

       if (entry.line == "18") {
        const ParafOne = document.createElement("p");
        ParafOne.classList.add("Red");
        ParafOne.textContent = entry.line;
        NewTest.appendChild(ParafOne);
       // console.log(entry.line);
       } else if (entry.line == "17") {
        const ParafOne = document.createElement("p");
        ParafOne.classList.add("Yellow");
        ParafOne.textContent = entry.line;
        NewTest.appendChild(ParafOne);
      //  console.log(entry.line);
       }
    
   
   
      const parafTwo = document.createElement("p");
      parafTwo.textContent = entry.stop;
      NewTest.appendChild(parafTwo);
   
      const ParafThree = document.createElement("p");
      ParafThree.textContent = entry.time;
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

    var myMonth = currentDate.getMonth();
    const MyHour = currentDate.getHours();
    const MyMinute = currentDate.getMinutes();
    const MyDay = currentDate.getDay();
    const MyDate = currentDate.getDate();

  //  console.log(MyDate);







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


const ApearData = `<h1>${NewWeekDay}<br>${MyDate}.${DayByDay}</h1>`;
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



// Data From TV2

fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fallenyheder%23')
            .then(response => response.json())
            .then(data => {
                // Process the data and display it
                const feedItems = data.items;
                const rssFeedDiv = document.getElementById('getNews');

                // Loop through each item and create HTML elements to display them
                feedItems.forEach(item => {
                    const title = item.title;
                    const link = item.link;
                    const description = item.description;

                    // Create HTML elements for title, link, and description
                    const titleElement = document.createElement('p');
                    titleElement.textContent = title;

                    const linkElement = document.createElement('a');
                   
                    linkElement.href = link;
                    linkElement.target = '_blank';

                    const descriptionElement = document.createElement('p');
                    descriptionElement.textContent = description;

                    // Append elements to the RSS feed container
                    rssFeedDiv.appendChild(titleElement);
                    rssFeedDiv.appendChild(descriptionElement);
                    rssFeedDiv.appendChild(linkElement);

                    // Add some styling for better presentation (optional)
                    titleElement.style.marginBottom = '1px';
                    linkElement.style.marginBottom = '1px';
                    descriptionElement.style.marginBottom = '2px';
                    descriptionElement.style.fontStyle = 'italic';
                });
            })
            .catch(error => console.error('Error fetching RSS feed:', error));





  
// Display Kantine 
            fetch('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json')
            .then(response => response.json())
            .then(data => {
         
                const AllFoods = document.getElementById('Disp-1');
                const AllFoodsTwo = document.getElementById('Disp-2');
                const AllFoodsThree = document.getElementById('Disp-3');
                const AllFoodsFour = document.getElementById('Disp-4');
                const AllFoodsFive = document.getElementById('Disp-5');
         const AllDays = data.Days;
      
         console.log(AllDays);  
         console.log(AllDays[2].Dish);  

         AllFoods.innerText = AllDays[0].DayName + ' : ' + AllDays[0].Dish;
         AllFoodsTwo.innerText = AllDays[1].DayName + ' : ' + AllDays[1].Dish;   
         AllFoodsThree.innerText = AllDays[2].DayName + ' : ' + AllDays[2].Dish;
         AllFoodsFour.innerText = AllDays[3].DayName + ' : ' + AllDays[3].Dish;
         AllFoodsFive.innerText = AllDays[4].DayName + ' : ' + AllDays[4].Dish;
      
       
              })



