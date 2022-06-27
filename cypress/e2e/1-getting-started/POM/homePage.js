/// <reference types="Cypress"/>

class homePage
{

storeProjectName()
{

    const link = cy.get(':nth-child(1) > .styles__left__38DKL > .styles__listName__2JkYV')

}

ClickOnSearchQuery(value)
{
   const field= cy.get('[data-test="search-input"]')
   field.clear
   field.click()
   return this
}

SearchQueryInput(value)
{
   const field= cy.get('[data-test="search-input"]')
   field.clear
   field.type(value)
   return this
}

//navbarUsername
navbarUsername(value)
{
    const link = cy.get('.navbar-user-name')
    link.contains(value)
    return this
}
//suggestedSerach
QuerySelectSuggestedSerach()
{
    const link = cy.get('ul.styles__Autocomplete__items__2_qru > li.styles__Autocomplete__item__3Ul5K:nth-child(2)')
    link.click()
}

}

export default homePage