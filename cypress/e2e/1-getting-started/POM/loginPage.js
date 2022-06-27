/// <reference types="Cypress"/>

class loginPage
{

openBrowser()
{
    cy.visit('https://reputedly.preprod-blue.entelo.com/')
    cy.title().should('eq','Entelo | Build great teams.')
}
EnterEmail(value)
{
    const field = cy.get('#user_email')
    field.clear
    field.type(value)
    return this
}
EnterPassword(value)
{
    const field = cy.get('#user_password')
    field.clear
    field.type(value)
    return this
}

ClickOnSignInBtn()
{
const button =cy.get('.top-right-nav > ul > :nth-child(3) > a')
button.click()

}
ClickOnSubmitBtn()
{
const button =cy.get('.btn')
button.click()

}

}
export default loginPage