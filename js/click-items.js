/*===========================================
Show items when user click news items 
=============================================*/
try {
    const categories = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
        const data = await res.json();
        dispplayCategories(data.data.news_category);
    }
} catch (e) {
    alert('something is wrong');
}

const dispplayCategories = (categories) => {
    /* Categories container */
    const categoriesItemsContainer = document.getElementById('items-container');

    for (const category of categories) {
        /* Create li */
        const li = document.createElement('li');
        /* Added class */
        li.classList.add('nav-item')
        /* Set innerHTML */
        li.innerHTML = `
        <a onclick="showCategory('${category?.category_id}')" class ="text-decoration-none p-2 fs-5">${category?.category_name}</a>
      `;
        categoriesItemsContainer.appendChild(li)

    }
}

const showCategory = (id) => {
    loadNewsItems(id);
}
categories()