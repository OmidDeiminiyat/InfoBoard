

const url = "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed";


fetch(url)
  .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    console.log(data);



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


  function secondRepeat() {

  }





// Create a new Date object
var currentDate = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
var dayOfWeek = currentDate.getDay();

// Define an array of days of the week
var daysOfWeek = ['Sunday', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'Saturday'];

// Get the name of the day using the day of the week index
var today = daysOfWeek[dayOfWeek];

// Output the name of the day
console.log("Today is " + today);






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
        console.log(SecondData.Days[test]);
        const neewDish = SecondData.Days[test];
        console.log(neewDish.Dish);
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

