import createBookItem from './js/content.js';
import filter from './js/filtered-methods.js';
import database from './database.js';
import searchCurrentAuthor from './js/search.js';
import createModalWindow from './js/modal.js';


createBookItem(database);
filter(database);
searchCurrentAuthor(database);
createModalWindow();


