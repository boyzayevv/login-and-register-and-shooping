const name = document.querySelector("#name")
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const form = document.getElementById("searchForm");
const resultsContainer = document.getElementById("resultsContainer");
const ShowMoreBtn = document.getElementById("showmore");

ShowMoreBtn.style.display = "none";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    performSearch();
});
let page = 5;

ShowMoreBtn.addEventListener("click", function(){
    page +=5;
    performSearch();
});

async function performSearch(){
    const query = searchInput.value.trim();
    if (query == '') return;
    console.log(query);
    const Key = 'ZjgiSGjgx128ooVqm2Igy3zxk9eZZrCKv_0tRa5PR0Q';
    
    const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=${page}&client_id=${Key}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Api ni olishda Xatolik yuz berdi!");
        }
        const data = await response.json();
        showCardImages(data.results);
    }catch (error){
        console.log("Xatolik yuz berdi error =>", error)
    }
}

function showCardImages(data){
    resultsContainer.innerHTML = ''
    data.forEach((item)=>{
        console.log(item);
        const imgCard = document.createElement("div");
        imgCard.classList.add("col-lg-4", "col-sm-6", "my-3", "shadow");
        imgCard.innerHTML = `
        <div>
        <div> <img class="card-img-top w-100 h-100" src="${item.urls.small}" alt="">
        <div class="card-body">
        <p class="card-text"><h4>${item.alt_description}</h4></p>
        </div>
        </div>
        `;
        resultsContainer.appendChild(imgCard);
        ShowMoreBtn.style.display = "block";
    });
}
let AuthName = localStorage.getItem("user")
name.textContent = `Salom ${AuthName}`;
console.log(AuthName)