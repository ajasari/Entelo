/// <reference types="Cypress"/>

describe('Note results from Home page', () => {

  



    it('Note results from Home page', () => {
      //store results for last project
      cy.get(':nth-child(1) > .styles__left__38DKL > .styles__listName__2JkYV').then(($projectname) => {

        // store the link's text
        const txtproject = $projectname.text()
        cy.get('[data-test="search-input"]').type(txtproject)

        //store results for last activity-profile viewed
        cy.get(':nth-child(1) > .styles__stats-count__2v8kS').then(($profileviewed) => {


          // store the button's text
          const profileviewed = $profileviewed.text()
          cy.get('[data-test="search-input"]').type(profileviewed)
        })

        //store results for last activity-Searches
        cy.get(':nth-child(2) > .styles__stats-count__2v8kS').then(($searches) => {


          // store the button's text
          const searches = $searches.text()
          cy.get('[data-test="search-input"]').type(searches)
        })

    })

  })



})
