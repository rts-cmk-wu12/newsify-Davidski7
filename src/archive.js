require('../style/main-archive.scss');


function loadArchivedNews() {
    const archiveList = document.getElementById("archive-list");
    const archivedNews = JSON.parse(localStorage.getItem("archivedNews")) || [];

    if (archivedNews.length === 0) {
        archiveList.innerHTML = "<p>Ingen arkiverede nyheder endnu.</p>";
        return;
    }

    archiveList.innerHTML = ""; 
    archivedNews.forEach((news, index) => {
        const listItem = document.createElement("li");
        listItem.className = "archive-item";

        listItem.innerHTML = `
            <div class="news-content">
                <a href="${news.url}" target="_blank">${news.title}</a>
            </div>
            <button class="delete-button" data-index="${index}">🗑️</button>
        `;

        archiveList.appendChild(listItem);
    });

   
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", deleteArchivedNews);
    });
}


function deleteArchivedNews(event) {
    const newsIndex = event.target.getAttribute("data-index");
    const archivedNews = JSON.parse(localStorage.getItem("archivedNews")) || [];

    archivedNews.splice(newsIndex, 1);

    localStorage.setItem("archivedNews", JSON.stringify(archivedNews));


    loadArchivedNews();
}

loadArchivedNews();


