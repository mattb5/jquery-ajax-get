'use strict';

const onSuccess = function (data) {
  console.table(data.books);
};

const onSuccessBook = function (data {
  console.log(data.books[0]);
};

module.exports = {
  onSuccess,
  onSuccessBook,
}
