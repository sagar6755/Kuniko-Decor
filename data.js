
export default class Data {
    // constructor(parameters) {

    // }

    toran = [

        {
            title: "Exquisite Handcrafted Toran Garland | Door Hanging Toran",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/71+gjP0ualL._SL1500_.jpg",
            color: "Mango - Orange"
        },
        {
            title: "Kunika Handicraft Decoration Handmade Marigold Hanging Toran | Decor for Door",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/815CseqRuoL._SL1500_.jpg",
            color: "orange"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/81GBvZGGfDL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Flowers Garlands with Good Looking Latkan Made by Pompom and Bells for Decoration",
            details: "Multi-Colour, Appx. Length 3ft.) (Pack of 6)",
            image: "https://m.media-amazon.com/images/I/91CIaKU65mL._SL1500_.jpg",
            color: "Mango Lemon"

        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/81GBvZGGfDL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/610m3vOCYDL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/71L3DtciWKL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/71qM+jNhyUL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/61zXGuLa4nL.jpg",
            color: "Orange & Mango"
        },

        {
            title: "Exquisite Handcrafted Toran Garland | Door Hanging Toran",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/71+gjP0ualL._SL1500_.jpg",
            color: "Mango - Orange"
        },
        {
            title: "Kunika Handicraft Decoration Handmade Marigold Hanging Toran | Decor for Door",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/815CseqRuoL._SL1500_.jpg",
            color: "orange"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/81GBvZGGfDL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Flowers Garlands with Good Looking Latkan Made by Pompom and Bells for Decoration",
            details: "Multi-Colour, Appx. Length 3ft.) (Pack of 6)",
            image: "https://m.media-amazon.com/images/I/91CIaKU65mL._SL1500_.jpg",
            color: "Mango Lemon"

        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/81GBvZGGfDL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/610m3vOCYDL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/71L3DtciWKL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/71qM+jNhyUL._SL1500_.jpg",
            color: "Orange & Mango"
        },
        {
            title: "Mandir Diwali Ganesha Chathurthi Other Festival |Festival Items | Door Hanging",
            details: "Multi color - Length 3.4ft",
            image: "https://m.media-amazon.com/images/I/61zXGuLa4nL.jpg",
            color: "Orange & Mango"
        },
    ]
}

let toran = new Data;
let response = JSON.stringify(toran.toran);
let data = JSON.parse(response);
console.log(data)
for (const elements of data) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `<img class="card-img" src="${elements.image}" alt="toran">
                    <div class="card-body">
                        <h3>${elements.title}</h3>
                        <p>${elements.color}</p>
                        <p>${elements.details}</p>
                    </div>
                    <div class="btn-div">
                        <button onclick="addCart()" class="add-btn btn">Add to cart</button>
                    <button class="buy-btn btn">buy now</button>
                    </div>`

    document.querySelector('.cards').append(card);
}


const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

function search()
{
searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (searchValue) {
        const filteredItems = data.filter(item => item.title.toLowerCase().includes(searchValue));
        if (filteredItems.length > 0) {
            suggestionsBox.style.display = "block";
            filteredItems.forEach(item => {
                const div = document.createElement("div");
                div.textContent = item.title;
                div.addEventListener("click", () => {
                    searchInput.value = item.title;
                    suggestionsBox.style.display = "none";
                    console.log(item)
                    data = item

                });
                suggestionsBox.appendChild(div);
            });
        } else {
            suggestionsBox.style.display = "none";
        }
    } else {
        suggestionsBox.style.display = "none";
    }
});
}

search();

document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = "none";
    }
});
