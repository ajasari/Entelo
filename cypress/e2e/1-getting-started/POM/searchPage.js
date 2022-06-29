/// <reference types="Cypress"/>

class searchPage
{


OpenSearchBuilder()
{

    const btn = cy.get('[data-test="search-builder-trigger"]')
    btn.click()

}

searchBuilder_CloseSearchBuilder()
{
    const btn = cy.get('.ent-cancel')
    btn.click()
}

searchBuilder_enterValueForPosition(value)
{
const field = cy.get('[data-test="position-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__List__inputContainer__2WDra > .styles__Typeahead__9YvE- > .styles__Typeahead__input__3v2Jx')
field.clear
field.type(value)
return this

}

searchBuilder_SelectPositionTipe(value)
{
   const ddl = cy.get('[data-test="position-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__Category__inputSelect__mdUqX > .Select__select__1WPU4 > .Select__select__input__28psJ')
   ddl.select(value)
   return this
}

searchBuilder_enterValueForSkills(value)
{
    const field = cy.get('[data-test="skill-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__List__inputContainer__2WDra > .styles__Typeahead__9YvE- > .styles__Typeahead__input__3v2Jx')
    field.clear
    field.type(value)
    return this
}

searchBuilder_SelectSkillsTipe(value)
{
   const ddl = cy.get('[data-test="skill-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__Category__inputSelect__mdUqX > .Select__select__1WPU4 > .Select__select__input__28psJ')
   ddl.select(value)
   return this
}

searchBuilder_enterValueForCompany(value)
{
    const field = cy.get('[data-test="company-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__List__inputContainer__2WDra > .styles__Typeahead__9YvE- > .styles__Typeahead__input__3v2Jx')
    field.clear
    field.type(value)
    return this
}

searchBuilder_SelectCompanyTipe(value)
{
    const ddl = cy.get('[data-test="company-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__Category__inputSelect__mdUqX > .Select__select__1WPU4 > .Select__select__input__28psJ')
    ddl.select(value)
   return this

}

ResetSearchBuilder()
{
const btn = cy.get('.styles__Builder__actions__2BDLR > :nth-child(1)')
btn.click()
}

BuildAndRunSearchBuilder()
{
const btn = cy.get('.styles__Button_primary__1qz6C')
btn.click()
}



}

export default searchPage