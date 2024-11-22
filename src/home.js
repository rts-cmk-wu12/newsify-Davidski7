require('../style/main-home.scss');

const API_URL = "https://api.nytimes.com/svc/topstories/v2/";
const API_KEY = "BPr1RsV6kGYlgT7Asq5GJodrZtkFbKUV";


async function fetchNews(category) {
    try {
        const response = await fetch(`${API_URL}${category}.json?api-key=${API_KEY}`);
        if (!response.ok) {
            console.error(`Fejl ved API-kald: ${response.status} - ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Fetch fejlede:", error);
        return [];
    }
}


function toggleCategory(event) {
    const categorySection = event.currentTarget.closest(".category-section");
    const newsList = categorySection.querySelector(".news-list");

    if (!newsList) {
        console.error("Nyhedslisten blev ikke fundet.");
        return;
    }

    if (newsList.style.display === "block") {
        newsList.style.display = "none";
        event.currentTarget.textContent = "▶"; 
    } else {
        newsList.style.display = "block";
        event.currentTarget.textContent = "▼"; 
    }
}


function addSwipeFeature(newsItem) {
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;

    newsItem.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
        newsItem.style.transition = "none"; 
    });

    newsItem.addEventListener("touchmove", (e) => {
        if (!isSwiping) return;

        currentX = e.touches[0].clientX - startX;
        newsItem.style.transform = `translateX(${currentX}px)`;
    });

    newsItem.addEventListener("touchend", () => {
        isSwiping = false;
        newsItem.style.transition = "transform 0.3s ease"; 

        if (currentX < -100) {
            
            archiveNews(newsItem);
        } else {
            newsItem.style.transform = "translateX(0)";
        }
    });
}


function archiveNews(newsItem) {
    const title = newsItem.querySelector("a").textContent;
    const url = newsItem.querySelector("a").href;
    const archivedNews = { title, url };

    
    let archivedItems = JSON.parse(localStorage.getItem("archivedNews")) || [];

   
    archivedItems.push(archivedNews);

    
    localStorage.setItem("archivedNews", JSON.stringify(archivedItems));

    newsItem.style.transform = "translateX(-100%)"; 
    setTimeout(() => {
        newsItem.remove();
    }, 300);
}


function renderCategory(categoryName, newsList) {
    const mainElement = document.querySelector("main");

    const categorySection = document.createElement("section");
    categorySection.className = "category-section";

    categorySection.innerHTML = `
        <div class="category-header">
            <h2>${categoryName}</h2>
            <button class="toggle-button">▶</button>
        </div>
        <ul class="news-list" style="display: none;">
            ${newsList
                .map(
                    (news) => `
                <li class="news-item">
                    <a href="${news.url}" target="_blank">
                        ${news.title}
                    </a>
                </li>`
                )
                .join("")}
        </ul>
    `;

    const toggleButton = categorySection.querySelector(".toggle-button");
    toggleButton.addEventListener("click", toggleCategory);

    const newsItems = categorySection.querySelectorAll(".news-item");
    newsItems.forEach((newsItem) => addSwipeFeature(newsItem));

    mainElement.appendChild(categorySection);
}

async function main() {
    const categories = ["arts", "movies", "sports"];
    const categoryNames = { arts: "Arts", movies: "Movies", sports: "Sports" };

    for (const category of categories) {
        const news = await fetchNews(category);
        renderCategory(categoryNames[category], news);
    }
}


main();








