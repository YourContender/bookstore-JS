let list = [];

function createBasket(item, id) {
    list.push(item);
    console.log('id:', id);
}

document.querySelector('.nav-item2').addEventListener('click', () => {
    displayBasketWindow(list);
    document.querySelector('.basket-window').style.display = 'block'
    document.body.style.overflow = 'hidden'
});

document.querySelector('.basket-close').addEventListener('click', () => {
    document.querySelector('.basket-window').style.display = 'none';
    document.body.style.overflow = '';
    console.log(list);
})

function displayBasketWindow(data) {
    console.log(data);

    const basket = document.querySelector('.basket-window');
    const elem = document.createElement('div');
    elem.classList.add('basket-element');

    if (list.length === 0) {
        elem.innerHTML += `
            <h4>
                Вы зашли в корзину пользователя, выберите, <br>
                пожалуйста, любую книгу и нажмите купить
            </h4>
        `
    }
     
    data.forEach(item => {
        elem.innerHTML += `
            <div class='basket-element-link' id=${item[0].id}>
                <img src=${item[0].src} width='120px' height='120px'/>
                <button class='close-element-link'>X</button>
                <h2 class='basket-title'>${item[0].title}</h2>
                <span>price: ${item[0].price}</span>
                <div class='basket-descr'>
                    <span>${item[0].descr}</span>
                </div>
            </div>
        `
    })

    basket.append(elem);

    document.querySelectorAll('.basket-element-link').forEach(item => {
        item.querySelector('.close-element-link').addEventListener('click', (e) => {
            let id =  e.target.parentNode.id;
            e.target.parentNode.remove()
            console.log(id);

            list.map((item, i) => {
                console.log(`${item[0].id} === ${id}`);
                if (item[0].id == id) {
                    list.splice(i, 1)
                }
            })

            console.log('map', list);
        })
    })
}

export default createBasket;