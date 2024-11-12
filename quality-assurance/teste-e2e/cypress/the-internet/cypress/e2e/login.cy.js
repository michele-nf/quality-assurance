describe("Formulário de Autenticação", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/")
    })

    it("login com credenciais válidas", () => {
        cy.get(":nth-child(21) > a").click()
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".radius").click()
        cy.get("#flash").should("exist").contains("You logged into a secure area!")
    })

    it("tentativa de login com senha inválida", () => {
        cy.get(":nth-child(21) > a").click()
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("senhaInvalida")
        cy.get(".radius").click()
        cy.get("#flash").should("exist").contains("Your password is invalid!")
    })

    it("tentativa de login com e-mail não registrado", () => {
        cy.get(":nth-child(21) > a").click()
        cy.get("#username").type("tomsmithh")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".radius").click()
        cy.get("#flash").should("exist").contains("Your username is invalid!")
    })

    it("tentativa de login com campos vazios", () => {
        cy.get(":nth-child(21) > a").click()
        cy.get(".radius").click()
        cy.get("#flash").should("exist").contains("Your username is invalid!")
    })

    it("logout bem-sucedido", () => {
        cy.get(":nth-child(21) > a").click()
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".radius").click()
        cy.get(".button").click()
        cy.get("h2").should("exist").contains("Login Page")
    })
    
})


