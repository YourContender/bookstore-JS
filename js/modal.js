function createModalWindow(display='none', id, arr = []) {
    const modal = document.createElement('div');
    const parent = document.querySelector('.modal-window')
    modal.classList.add('modal-container');
    parent.style.display = display

    let current = arr.filter(item => item.id == id)

    current.map(item => {
        modal.innerHTML = `
            <button class='close-modal'>close</button>
            <div>
                <img src=${item.src}/>
            </div>
            <h2>${item.title}</h2>
            <h1>Price: ${item.price}</h1>
            <button>buy</button>
        `;
    });

    modal.querySelectorAll('.close-modal').forEach(item => {
        item.addEventListener('click', () => {
            console.log(item);
            modal.style.display = 'none'
            parent.style.display = 'none'
            document.body.style.overflow = ''
        })
    })

    document.querySelector('.modal-window').append(modal)
}

export default createModalWindow;