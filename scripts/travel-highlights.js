// Array of all available travel photos
const travelPhotos = [
    // Photo Template
    // {
    //     image: ,
    //     alt: ,
    //     title: ,
    //     subtitle:
    // },
    {
        image: "/assets/travel/2025-07-05 - Keelung Lighthouse Ocean View.webp",
        alt: "Keelung Lighthouse",
        title: "Keelung, Taiwan",
        subtitle: "Lighthouse Oceanside"
    },
    {
        image: "/assets/travel/2025-07-24 - Jiufen Old Street A-Mei Teahouse.webp",
        alt: "A-Mei Teahouse",
        title: "Jiufen, Taiwan",
        subtitle: "A-Mei Teahouse"
    },
    {
        image: "/assets/travel/2025-07-26 - Sun Moon Lake HOHOCHA Tea Center.webp",
        alt: "HOHOCHA Sun Moon Lake",
        title: "Sun Moon Lake, Taiwan",
        subtitle: "HOHOCHA Tea Center"
    },
    {
        image: "/assets/travel/2025-08-10 - Kaohsiung View from Mount Cihou Cijin.webp",
        alt: "View from Mount Cihou",
        title: "Kaohsiung, Taiwan",
        subtitle: "Mount Cihou"
    }
];

// Fisher-Yates Shuffle Algorithm to randomize the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener("DOMContentLoaded", () => {
    const highlightsContainer = document.getElementById("random-highlights");
    
    // 1. Shuffle the pool of photos
    const shuffledPhotos = shuffleArray([...travelPhotos]);
    
    // 2. Take only the first 3 photos
    const selectedPhotos = shuffledPhotos.slice(0, 3);
    
    // 3. Generate HTML for the 3 selected photos and inject them
    selectedPhotos.forEach(photo => {
        const cardHTML = `
            <div class="highlight-card">
                <img class="highlight-image" src="${photo.image}" alt="${photo.alt}" loading="lazy">
                <div class="highlight-info">
                    <h3 class="highlight-title">${photo.title}</h3>
                    <p class="highlight-subtitle">${photo.subtitle}</p>
                </div>
            </div>
        `;
        highlightsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
});