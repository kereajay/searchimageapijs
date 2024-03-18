let two = document.getElementById('two');
let three = document.getElementById('three');
let search = document.getElementById('search')
let input1 = document.getElementById('enter1');
let page = 1;
let append2="";
async function ajay() {
    let appenda = "";

    let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${input1.value}&client_id=sZtWySsoMxqHMq0IwOyrf_f5ZH8qc-60eXn2q-C1N6A`
    // console.log(URL);

    let res = await fetch(URL);

    let data = await res.json();
    if (page === 1) {
        appenda.innerHTML = "";
    }

    let results1 = data.results;


    results1.map((element) => {
        appenda += `<div class="card ajay2" style="width: 22rem; margin-top:5%; height:270px ">
        <a href="${element.links.html}" target="_blank" style="text-decoration:none"><img src="${element.urls.small}" alt="${element.alt_description}" width="400px"   height="200px ></a>
        <div class="card-body">
         
          <p  class="card-text ajay" style="color:black;  margin-top:10px; ">${element.alt_description}</p>
          
        </div>
      </div>
      `
        two.innerHTML = appenda;
        // two.innerHTML = append2;
    });
    three.innerHTML = ` <button id="showmore" style="width: 130px; height: 35px; background-color: rgb(237, 177, 65);border: 2px solid rgb(237, 177, 65) ; border-radius: 10px; font-weight: bold;">Showmore</button>`

    page++;


}
let appenda2 = "";
async function second() {

    let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${input1.value}&client_id=sZtWySsoMxqHMq0IwOyrf_f5ZH8qc-60eXn2q-C1N6A`
    // console.log(URL);

    let res = await fetch(URL);

    let data = await res.json();
    if (page === 1) {
        appenda.innerHTML = "";
    }

    let results1 = data.results;


    results1.map((element) => {
        appenda2 += `<div class="card ajay2" style="width: 22rem; margin-top:5%; height:270px ">
        <a href="${element.links.html}" target="_blank" style="text-decoration:none"><img src="${element.urls.small}" alt="${element.alt_description}" width="400px"   height="200px ></a>
        <div class="card-body">
         
          <p  class="card-text ajay" style="color:black;  margin-top:10px; ">${element.alt_description}</p>
          
        </div>
      </div>
      `
        two.innerHTML = appenda2;
        // two.innerHTML = append2;
    });
    three.innerHTML = ` <button id="showmore" style="width: 130px; height: 35px; background-color: rgb(237, 177, 65);border: 2px solid rgb(237, 177, 65) ; border-radius: 10px; font-weight: bold;">Showmore</button>`

    page++;


}

search.addEventListener('click', (ev) => {
    ev.preventDefault();
    page = 1;
    ajay();
});

three.addEventListener('click', () => {
    second();
});
;