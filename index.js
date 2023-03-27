const neewwDiv = document.getElementById('newest-divvv')
const detailsId = document.getElementById('userDetails')
const newCont = document.getElementById("cont");
const formEl1 = document.getElementById("form-el1");
const newInfo = document.getElementById("newInfo");
const secondContainer = document.getElementById('second-container')
let firstDetails = {};
let trains = {"SERENE":3, "High Economy":5, "Peers":10, "My Space":2, "Cargo":10, "Meet Luxury":2}


// event listener for first form
formEl1.addEventListener('submit', (e) => {
  e.preventDefault();
  submitDetails()

})

// event listener for second form
// formEl2.addEventListener('submit', (e) => {
//   e.preventDefault();
//   submitAge()
//   console.log("click")


// })


// function for sumbitDetails
function submitDetails() {

  const typeTrip = document.getElementById("type-trip");
  const inputEl1 = document.getElementById("input-el1");
  const inputEl2 = document.getElementById("input-el2");
  const inputEl3 = document.getElementById("input-el3");
  const inputEl4 = document.getElementById("input-el4");
  const inputEl5 = document.getElementById("input-el5");
  const inputEl6 = document.getElementById("input-el6");
  const inputEl7 = document.getElementById('input-el7')
  const inputEl8 = document.getElementById('input-el8')
  // const inputEl7 = document.getElementById("input-el7");
  // const formEl1 = document.getElementById("form-el1");
  // const formEl2 = document.getElementById("form-el2");
  const ageCheck = document.getElementById("age-check");
  const adultInpt = document.getElementById("adult-inpt");


  if (inputEl7.value < 18 && inputEl8.value === "") {
    ageCheck.innerHTML = "This is a Minor(Please Input an Adult Companion below)!"
    ageCheck.style.color = "red"
    return false;


  } else if (inputEl7.value < 18 && inputEl8.value !== "") {
    ageCheck.innerHTML = ""

  }


 

  firstDetails = { "type": typeTrip.value, "passengers": inputEl1.value, "from": inputEl2.value, "to": inputEl3.value, "date": inputEl4.value, "class": inputEl5.value, "fullname": inputEl6.value, "age": inputEl7.value, "adult": inputEl8.value }
  toToggle()
  console.log(firstDetails)


}


function toToggle() {
  neewwDiv.classList.toggle("hidden")
  newCont.classList.toggle("hidden")
  detailsId.classList.toggle("hidden")
  secondContainer.classList.toggle("hidden")


  let newDiv = document.createElement('div')
  let newP1 = document.createElement('p')
  newP1.innerHTML = "Trip Type: " + firstDetails.type


  let newP2 = document.createElement('p')
  newP2.innerHTML = "passengers:" + firstDetails.passengers

  let newP3 = document.createElement('p')
  newP3.innerHTML = "from:" + firstDetails.from

  let newP4 = document.createElement('p')
  newP4.innerHTML = "To:" + firstDetails.to


  let newP5 = document.createElement('p')
  newP2.innerHTML = "Date:" + firstDetails.date

  let newP6 = document.createElement('p')
  newP2.innerHTML = "Class:" + firstDetails.class

  newDiv.append(newP1, newP2, newP3, newP4, newP5, newP6)
  newInfo.innerHTML = "";
  newInfo.appendChild(newDiv)

}


function selectTrain(type, time, price) {
  firstDetails.trainType = type;
  firstDetails.time = time;
  firstDetails.price = price;
  console.log(firstDetails)
  const inputEl1 = document.getElementById("input-el1");


  if(inputEl1.value > trains[type]){
    alert('No Train Available')
    return false
  }
  // convert date to jason.strigify
  let dataJason = JSON.stringify(firstDetails);

  // create the form
  let newForm = document.createElement("form");
  newForm.setAttribute('method', 'get');
  newForm.setAttribute('action', "receipt.html");

  // create hidden input containing Json and add to form
  let hiddenField = document.createElement("input")
  hiddenField.setAttribute("type", "hidden");
  hiddenField.setAttribute("name", "info")
  hiddenField.setAttribute("value", dataJason)
  newForm.appendChild(hiddenField)

  // add form to body and sumit
  document.body.appendChild(newForm)
  newForm.submit();
}

