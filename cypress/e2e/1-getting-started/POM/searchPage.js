/// <reference types="Cypress"/>

class searchPage
{


ClickOnSearchBuilderBtn()
{

    const btn = cy.get('[data-test="search-builder-trigger"]')
    btn.click()

}

sbClose()
{
    const btn = cy.get('.ent-cancel')
    btn.click()
}

sbPosition(value)
{
const field = cy.get('[data-test="position-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__List__inputContainer__2WDra > .styles__Typeahead__9YvE- > .styles__Typeahead__input__3v2Jx')
field.clear
field.type(value)
return this

}

sbPositionDDL(value)
{
   const ddl = cy.get('[data-test="position-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__Category__inputSelect__mdUqX > .Select__select__1WPU4 > .Select__select__input__28psJ')
   ddl.select(value)
   return this
}

sbSkills(value)
{
    const field = cy.get('[data-test="skill-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__List__inputContainer__2WDra > .styles__Typeahead__9YvE- > .styles__Typeahead__input__3v2Jx')
    field.clear
    field.type(value)
    return this
}

sbSkillsDDL(value)
{
   const ddl = cy.get('[data-test="skill-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__Category__inputSelect__mdUqX > .Select__select__1WPU4 > .Select__select__input__28psJ')
   ddl.select(value)
   return this
}

sbCompany(value)
{
    const field = cy.get('[data-test="company-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__List__inputContainer__2WDra > .styles__Typeahead__9YvE- > .styles__Typeahead__input__3v2Jx')
    field.clear
    field.type(value)
    return this
}

sbCompanyDDL(value)
{
    const ddl = cy.get('[data-test="company-optional-pill-list"] > .styles__List__inputWrapper__1KVQZ > .styles__Category__inputSelect__mdUqX > .Select__select__1WPU4 > .Select__select__input__28psJ')
    ddl.select(value)
   return this

}

sbCompanyBtnReset()
{
const btn = cy.get('.styles__Builder__actions__2BDLR > :nth-child(1)')
btn.click()
}

sbCompanyBtnBuild()
{
const btn = cy.get('.styles__Button_primary__1qz6C')
btn.click()
}



}

export default searchPage