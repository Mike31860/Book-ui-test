const book_name_first = 'Working Effectively with Legacy Code';

describe("When the user wants to delete a book that is listed", ()=>{
    before(()=>{
        cy.visit("https://deploymentfrontmiguel.herokuapp.com/dashboard");
        cy.get('.ant-select-selector').click();
        cy.get('[title="50 / page"]').click();
    
    })

    it("Then the book should be listed with the new name and author",()=>{
        cy.get("table").contains('tr', book_name_first).invoke("index").then((i) =>{     
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).check();
        })
        cy.get('[nztype="default"]').click();
        cy.get("table").contains('tr', book_name_first).should('not.exist');  
    });



})