# Book-ui-test

To be able to run the test cases we need to used the next comand:
```
npm i
npm run test:e2e:ui:headless

```
** The following test cases are covered in the folder e2e-api/specs/ **

- Test on Delete-Books.spec.js:
  - Test when user wants to delete a book in the  deployed page "https://deploymentfrontmiguel.herokuapp.com/dashboard"
  - Lists books before deleting an specific book, search for the book, delete de book, asserting the book is not listed in the list.
  - 
- Test on Edit-Books.spec.js:
  - Test when the user wants to edit a book in the deployed page
  - The list books will be listed
  - the book to be selected must be in the list to be able to put the name and the author of the book
  - Asserting the edit book with the new name or the new author is listed.

- Test on Edit-BooksNegative.spec.js
 - Test when the user wants to edit a book but the author name is not filled out
 - The list books will be listed
 - the book to be selected must be in the list to be able to put the name of the book with out the author name
 -  Asserting the button saved is disabled.

- Test on List-Books.spec.js
 - Test when the user wants to display the list of the books.
 - The list books will be listed 
 - Asserting that there is at least one element on the book list.

- Test on Register-Books.spec.js
 - Test when the user wants to register a book
 -  The list books will be listed
 -  Putting a book name and an author name, registering the book
 -  Asserting that the book name and the author name is listed on the page

- Test on Register-BookNegative.spec.js
 - test when the user wants to register a book without the author name
 - The list books will be listed
 - utting a book name without the author name
 - Asserting that the button saved is disabled.


