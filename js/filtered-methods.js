import createBookItem from './content.js';

function filter(items) {

    function filtersDatabaseAll(arr) {
        document.querySelectorAll('.col-4').forEach(item => {
            item.remove()
        })

        createBookItem(arr);
    };

    function filtersDatabase(arr, selector) {
        document.querySelectorAll('.col-4').forEach(item => {
            item.remove()
        })

        let data = arr.filter(item => item.category === selector);
        createBookItem(data);
    };

    // create methods 
    document.querySelectorAll('.container-btn button').forEach(item => {
        item.addEventListener('click', () => {
            if (item.id === '1') {
                filtersDatabaseAll(items);
            }

            if (item.id === 'js' || item.id === 'c' || item.id === 'php' || item.id === 'html' || item.id === 'math') {
                filtersDatabase(items, item.id);
            }
        })
    })

}

export default filter;