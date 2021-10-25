import createBookItem from './content.js';

function filter(items) {
    document.querySelector('.all').addEventListener('click', () => {
        filtersDatabase(items);
    });
    
    function filtersDatabase(arr) {
        document.querySelectorAll('.col-4').forEach(item => {
            item.remove()
        })
        createBookItem(arr);
    };
    
    
    document.querySelector('.much-three').addEventListener('click', () => {
        filteredDatabaseSecond(items)
    });
    
    function filteredDatabaseSecond(arr) {
        document.querySelectorAll('.col-4').forEach(item => {
            item.remove()
        })
        let data = arr.filter(item => item.id > 2);
        createBookItem(data);
    };
}

export default filter;