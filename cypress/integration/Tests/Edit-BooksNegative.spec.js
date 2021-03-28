const book_name_first = 'Design Patterns: Elements of Reusable Object-Oriented Software';

const book_author_first = 'Steve McConnell';


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

        cy.get('#name').click().clear();
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
        cy.get('#name').click().type(book_name_first);
        cy.get('#author').click().clear();
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');


    });



})