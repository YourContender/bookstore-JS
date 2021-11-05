import createBookItem from "./content.js";

function searchCurrentAuthor(data) {
    const input = document.querySelector('.form-control');

    document.querySelector('.d-flex').addEventListener('submit', (e) => {
        e.preventDefault()

        document.querySelectorAll('.col-md-4').forEach(item => {
            item.remove()
        });
        
        let current = data.filter(item => item.title == input.value || item.id === +input.value);
        console.log('current', current);
        createBookItem(current); 
    })
}

export default searchCurrentAuthor;