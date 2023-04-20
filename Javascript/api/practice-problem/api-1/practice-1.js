const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const  personStr=JSON.stringify(person);
// console.log(personStr);
const personObj=JSON.parse(personStr);
// console.log(personObj);

const showInfo=document.getElementById('showInfo');
const div=document.createElement('div');
div.classList.add('d-flex','justify-content-center','gap-4','p-4','align-items-center','my-5','mt-5','flex-column','flex-sm-row');
div.innerHTML=`
<div class="card p-4 shadow">
<h5 class="card-title border-bottom p-2">Person name: ${personObj.result[0].name.common}</h5>
  <div class="card-body">
  <p class="card-title">age: ${personObj.result[0].age}</p>
    <p class="card-text">Street: ${personObj.result[0].address.street},House No.: ${personObj.result[0].address.house}</p>
  </div>
</div>
<div class="card p-4 shadow">
<h5 class="card-title border-bottom p-2">Person name: ${personObj.result[1].name.common}</h5>
  <div class="card-body">
  <p class="card-title">age: ${personObj.result[1].age}</p>
    <p class="card-text">Street: ${personObj.result[1].address.street},House No.: ${personObj.result[0].address.house}</p>
  </div>
</div>
`
showInfo.appendChild(div);
