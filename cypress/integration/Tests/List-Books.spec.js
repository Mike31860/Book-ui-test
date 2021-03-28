describe("When the user wants to see that there are books in the list", ()=>{
    before(()=>{
        cy.visit("https://deploymentfrontmiguel.herokuapp.com/dashboard");
    
    })

    it("Then the books should be listed",()=>{
        cy.get('table')
        .find('tr')
        .should(($row) => {
          expect($row).to.length.greaterThan(0);
         
        })
    });



})