describe("test our form inputs", function () {
    it("visit our localhost", function () {
    cy.visit("http://localhost:3000/Pizza")
    })

    it("add text to name input", function () {
    cy.get('[data-cy="customer"]').type("Keng").should("have.value", "Keng")
    cy.get('[data-cy="size"]').select("small").should("have.value", "small")
    cy.get(":nth-child(10) > label").type("sauce").should("have.value", "")
    })

    it("select multiple toppings", function () {
    cy.get('[data-cy="pepperoni"]').check()
    cy.get('[data-cy="sausage"]').check()
    cy.get('[data-cy="canadian"]').check()
    cy.get('[data-cy="italian"]').check()
    })

    it("submit form", function () {
    cy.get("button").click()
    })
})