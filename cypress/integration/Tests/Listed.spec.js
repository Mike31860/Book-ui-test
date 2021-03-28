describe("When the user wants to see that there are books in the list", ()=>{
    before(()=>{
        cy.visit("https://librarya00347829.herokuapp.com/dashboard");
    
    })

    it("Then the book should be listed with the new name and author",()=>{
        cy.get('table')
        .find('tr')
        .should(($row) => {
          expect($row).to.length.greaterThan(0);
         
        })
    });



})