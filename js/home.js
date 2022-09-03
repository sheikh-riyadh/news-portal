/*========================================== 
Show default news items on home page
============================================ */

const loadDefaultItems = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')
    const data = await res.json()
    showDefaultItems(data.data)
}

const showDefaultItems = (datas) => {
    const cardContainer = document.getElementById('card-items-container');
    for (const data of datas) {
        const cardDiv = document.createElement('div');
        console.log(data)
        cardDiv.innerHTML = `
        <div class="card my-3 shadow">
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
                                <button onclick="loadItemsDetails('${data?._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardDiv);
    }
}


/* Details button */
const loadItemsDetails = async (id) => {

    /* Get unique news item id */
    const url = `https://openapi.programming-hero.com/api/news/${id}`;

    const res = await fetch(url);
    const data = await res.json();
    showItemsDetails(data)
}


/* Show item details */
const showItemsDetails = (data) => {
    /* Get modal title element */
    const newsModalTitle = document.getElementById('newsModalLabel')

    /* Set news title on modal */
    newsModalTitle.innerText = data?.data[0]?.title;
}

loadDefaultItems()