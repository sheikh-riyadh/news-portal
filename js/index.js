
/*========================================== 
Show default news items on home page
============================================ */

const loadDefaultItems = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')
    const data = await res.json()
    showDefaultItems(data.data)
}

const showDefaultItems = (datas) => {
    const cardContainer = document.getElementById('card-container');
    for (const data of datas) {
        const cardDiv = document.createElement('div');
        console.log(data)
        cardDiv.innerHTML = `
        <div class="card mb-3 shadow">
            <div class="row g-0 d-flex p-3">
                <div class="col-md-4">
                    <img src="${data.image_url}" class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data?.title}</h5>
                        <p class="card-text d-block text-truncate w-100 h-100">${data?.details}</p>
                        

                        <div class="d-flex justify-content-between align-items-center">
                            <!-- Author details -->
                            <div class="author-details d-flex align-items-center">
                                <img class="img-fluid rounded-circle" src="${data?.author?.img}" alt="" srcset="">
                                <p class="px-2">${data?.author?.name}</p>
                            </div>
                            <!-- View details -->
                            <div>
                                <div class="view-container">
                                    <i class="fa-solid fa-eye"></i>
                                    <span>${data?.total_view}</span>
                                </div>
                            </div>
                            <!-- Ratings -->
                            <div>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star-half-stroke text-warning"></i>
                            </div>
                            <!-- Button -->
                            <div>
                                <div class="btn btn-primary">Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv)
    }
}

loadDefaultItems()

/*===========================================
Show items when user click news items 
=============================================*/
const categories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json();
    dispplayCategories(data.data.news_category)
    /* console.log(data.data.news_category) */
}

const dispplayCategories = (categories) => {
    /* Categories container */
    const categoriesItemsContainer = document.getElementById('items-container');

    for (const category of categories) {
        /* Create li */
        const li = document.createElement('li');
        /* Added class */
        li.classList.add('nav-item')
        li.innerHTML = `
        <a onclick="showCategory('${category.category_id}')" class ="text-decoration-none p-2 fs-5">${category.category_name}</a>
      `;
        categoriesItemsContainer.appendChild(li)

    }
}


const showCategory = (id) => {
    console.log(id)
}
categories()