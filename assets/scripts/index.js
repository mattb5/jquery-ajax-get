'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

const getBooksHandler = function (event) {
  event.preventDefault();
  libraryApi.getBooks().done(ui.onSuccess);
};

const getBookHandler = function (event) {
  event.preventDefault();
  libraryApi.getBooks().done(ui.onSuccessBook);
};
// On document ready
//this is when you click the submit button
$(() => {
  $('#get-books').on('click', getBooksHandler);
});

$(() => {
  $('#get-book').on('click', getBookHandler);

});
