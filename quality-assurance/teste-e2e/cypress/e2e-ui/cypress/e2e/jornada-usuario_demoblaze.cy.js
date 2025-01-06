describe("Jornada do Usuário", () => {
    it("um usuário pode encontrar um produto no site Demoblaze e realizar a compra", () => {
        cy.visit("https://www.demoblaze.com/");
        cy.title("equal", "STORE");
        cy.get(".list-group-item").contains("Phones");
        cy.get(".list-group-item").contains("Laptops");
        cy.get(".list-group-item").contains("Monitors");
        cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch")
            .invoke("text") // Obtém o texto do título
            .then((title) => {
                expect(title).to.not.be.empty; // Verifica que o título não está vazio
                cy.log(`O título do primeiro produto é: ${title}`);
            });
        cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch").click();
        cy.location("pathname").should("equal", "/prod.html");
        cy.get(".name").should("exist").contains("Samsung galaxy s6");
        cy.get(".price-container").should("exist").contains("$360 *includes tax");
        cy.get('.col-sm-12 > .btn').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Product added'); // Texto esperado do alerta
        });
        cy.get('#cartur').click();
        cy.location("pathname").should("equal", "/cart.html");
        cy.get('.success > :nth-child(2)').should("exist").contains("Samsung galaxy s6");
        cy.get('.success > :nth-child(3)').should("exist").contains("360");
        cy.get('#totalp').should("exist").contains("360");
    })
})