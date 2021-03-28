const book_name_first = 'COMPUTER SCIENCE';
const book_author_first = "GEORGE"
describe("When the user wants to add a book in the list", ()=>{

    before(()=>{
        cy.visit("https://librarya00347829.herokuapp.com/dashboard");       
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();
    })

    it("Then the book will be listed with the name and author given by the user",()=>{
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get('#name').click().type(book_name_first);
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
        cy.get('#name').click().clear();
        cy.get('#author').click().type(book_author_first);
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');

    });

})