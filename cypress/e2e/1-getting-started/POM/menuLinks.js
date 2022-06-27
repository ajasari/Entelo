/// <reference types="Cypress"/>

class menuLinks
{

   MenuSearch()
{
    const search = cy.get('.nav > :nth-child(1) > a')
    search.click()
    
    
}

MenuEnvoyLink()
{

    const link = cy.get('.nav > :nth-child(2) > a')
    link.click()

}

MenuProjectsLink()
{
   const link= cy.get('[data-test="listpicker-link"]')
   link.click()
}

MenuTrackLink()
{
   const link= cy.get('.nav > :nth-child(4) > a')
   link.click()
}
MenuReportsLink()
{
   const link= cy.get('.nav > :nth-child(5) > a')
   link.click()
}

}

export default menuLinks