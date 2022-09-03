const $app = document.querySelector('#app');
const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";


const main = async () => {
    const response = await fetch(API);
    const products = await response.json();

    const output = products?.map(product => {
        return `
            <article class="card">
                <img src="${product.images[0]}"  />
                <h2>
                    ${product.title} <small>Price $${product.price}</small>
                </h2>
            </article>
        `;
    }).join('');

    let newItem = document.createElement('section');
    newItem.classList.add('items');
    newItem.innerHTML = output;
    $app.appendChild(newItem);
}

main();