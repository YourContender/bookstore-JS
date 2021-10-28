import createBasket from "./basket.js";

function createModalWindow(display='none', id, arr = []) {
    const modal = document.createElement('div');
    const parent = document.querySelector('.modal-window')
    modal.classList.add('modal-container');
    parent.style.display = display

    let current = arr.filter(item => item.id == id)
    current.map(item => {
        modal.innerHTML = `
            <button class='close-modal btn-danger'>X</button>
            <img src='../img/bg.jpg' width='520px'/>
            <div class='content-modal'>
                <h4><em>Подтвердите, пожалуйста, покупку!</em></h4>
                <h4>Название книги: <strong><span>'${item.title}'</span></strong></h4>
                <h4>Цена данной книги: <strong>${item.price}</strong></h4>
            </div>
            <button class='buy-btn btn-primary'>buy ${item.price}</button>
        `;
    });

    modal.querySelectorAll('.close-modal').forEach(item => {
        item.addEventListener('click', () => {
            // console.log(item);
            modal.style.display = 'none';
            parent.style.display = 'none';
            document.body.style.overflow = '';
        })
    });

    modal.querySelectorAll('.buy-btn').forEach(item => {
        item.addEventListener('click', () => {
            createBasket(current, current[0].id);
            modal.style.display = 'none';
            parent.style.display = 'none';
            document.body.style.overflow = '';
        })
    })

    document.querySelector('.modal-window').append(modal)
}

export default createModalWindow;