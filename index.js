const key = "6fglbg8jKYW5S1boI0FnPFBpVckkP77iu9Z5kl66UtY";

const searchBox = document.querySelector(".search-box");
const box = document.querySelector(".box");
const searchResult = document.querySelector(".result");
const more = document.getElementById("showBtn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = box.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = '';
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })

    more.style.display = "block";
}
searchBox.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

more.addEventListener("click", ()=>{
    page++;
    searchImages();
})