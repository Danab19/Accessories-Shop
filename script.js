document.addEventListener("DOMContentLoaded", () => {
    const items = [
        { title: "Necklace", description: "Beautiful handcrafted necklace that is suitable for cute look!", image: "2023-L6-CK5-22120371-27-1.jpg" },
        { title: "Bracelet", description: "Elegant bracelet with unique design to add cuteness to your look.", image: "2023-L6-CK5-12120372-27-1.jpg" },
        { title: "Earrings", description: "Classic earrings for any occasion to bring elegance to your outfit.", image: "2023-L6-CK5-42120374-27-3.jpg" },
        { title: "Ring", description: "Stylish ring with a modern touch.", image: "2023-L6-CK5-32120373-27-1.jpg" },
        { title: "Anklet", description: " Anklet for everyday wear.", image: "2024-L2-CK5-12120380-1-27-1.jpg" },
    ];


    const templateSource = document.getElementById("items-template").innerHTML;
    const template = Handlebars.compile(templateSource);

    const itemsContainer = document.getElementById("items-container");
    itemsContainer.innerHTML = template({ items: items });
});
