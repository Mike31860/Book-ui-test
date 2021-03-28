const book_name_first = 'Code Complete: A Practical Handbook of Software Construction';
const book_name_second = ' IN ENGLISH';
const book_author_first = 'Steve McConnell';
const book_author_second = ' WASHINGTON'

describe("When the user wants to edit a book that is int the list", ()=>{
    before(()=>{
        cy.visit("https://deploymentfrontmiguel.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();   
    })

    it("Then the book should be in the list with the new name and author giving by the user",()=>{
        
        cy.get("table").contains('tr', book_name_first).invoke("index").then((i) =>{         
            cy.get(`:nth-child(${i+1}) > .ant-table-cell > button.ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only`).click();
        })

        cy.wait(1000)
        cy.get('#name').click().type(book_name_second);
        cy.get('#author').click().type(book_author_second);
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get('tbody.ant-table-tbody.ng-star-inserted')
        .contains('td', book_name_first + book_name_second).should('be.visible');
        cy.get('tbody.ant-table-tbody.ng-star-inserted')
        .contains('td', book_author_first + book_author_second).should('be.visible');

    });



})