import createModalWindow from "./modal.js";

function createBookItem(data) {
    const parent = document.querySelector('.container');
    const element = document.createElement('div');
    element.classList.add('row');

    const find = document.querySelector('.find')
    const message = document.createElement('div');
    message.classList.add('failed-s');

    if (data.length === 0) {
        message.innerHTML = `<h2>not find</h2>`
    } 

    if (data.length >= 1) {
        document.querySelectorAll('.failed-s').forEach(item => {
            item.remove()
        })
    }

    find.append(message)
    
    data.map(item => {
        element.innerHTML += `
            <div class="col-4"> 
                <div class="card mt-5" style="width: 18rem;">
                    <img src=${item.src} height='300px' weight='150px' class="card-img-top" alt="...">
                    <div class="card-body" id=${item.id}>
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.descr}</p>
                        <button href="#" class="btn btn-outline-dark">Go somewhere</button>
                    </div>
                </div>
            </div>
        `;
    })

    element.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', () => {
            let id = item.parentNode.id
            createModalWindow('block', id, data)
            document.body.style.overflow = 'hidden'
            console.log('click work');
        })
    })

    parent.append(element);
}

export default createBookItem;