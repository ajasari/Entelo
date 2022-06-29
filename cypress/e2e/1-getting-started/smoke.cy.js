/// <reference types="Cypress"/>



import homePage from './POM/homePage'
import loginPage from './POM/loginPage'
import searchPage from './POM/searchPage'
import Base from './POM/base'


const lg = new loginPage()
const hp = new homePage()
const bs = new Base()
const sp = new searchPage()

describe('Smoke', function()  {

  before(function()
  {
    cy.clearCookie('_reputedly_session_v6')
  })

  beforeEach(function() {
    cy.fixture('preprodblue').then(function (data) {
      this.data = data

      cy.Cookies.preserveOnce('_reputedly_session_v6')
    })
    })
    
    

    it('User is able to log in to successfully- wrong password', function () {

        lg.openBrowser()
        lg.ClickOnSignInBtn()
        lg.EnterEmail(this.data.email)
        lg.ClickOnSubmitBtn()
        lg.EnterPassword('Passsss')
        lg.ClickOnSubmitBtn()
        cy.get('.humane',{ timeout: 3000 }).contains('Invalid email or password.')
  
  
      })


      it('User is able to log in to successfully', function () {

        
       
        lg.openBrowser()
        lg.ClickOnSignInBtn()
        lg.EnterEmail(this.data.email)
        lg.ClickOnSubmitBtn()
        lg.EnterPassword(this.data.pass)
        lg.ClickOnSubmitBtn()
        cy.wait(3000)

        hp.navbarUsername(this.data.navUser)
      
  
      })

      
      it('Note results from Home page', function() {
        
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

       it('Perform a search from Suggested Search', function() {




        bs.MenuSearch()    
        hp.ClickOnSearchQuery()
        hp.QuerySelectSuggestedSerach()
        cy.wait(6000)
        
        
        cy.get(':nth-child(1) > .styles__Counter__3OBvF').then(($result) => {
          //store the button's text

         const results =$result.text()

         cy.get(':nth-child(1) > .styles__Counter__3OBvF').should('not.be.eq', '0')

         expect(results).to.not.equal('0')

          //cy.get('[data-test="search-input"]').type(results)
       
          
        })

  })

  it('Perform a search from Search Builder', function() {

   


    bs.MenuSearch()    
    sp.OpenSearchBuilder()
    sp.searchBuilder_enterValueForPosition('QA{enter}')
    sp.searchBuilder_SelectPositionTipe('Excluded')
    sp.searchBuilder_enterValueForPosition('QA Automation{enter}')
    sp.searchBuilder_enterValueForSkills('quality assurance{enter}')
    sp.searchBuilder_enterValueForSkills('test planning{enter}')
    sp.searchBuilder_SelectSkillsTipe('Required')
    sp.searchBuilder_enterValueForSkills('manual testing{enter}')
    sp.searchBuilder_SelectSkillsTipe('Excluded')
    sp.searchBuilder_enterValueForSkills('Automation Testing{enter}')
    sp.searchBuilder_SelectCompanyTipe('Excluded')
    sp.searchBuilder_enterValueForCompany('Facebook{enter}')
    sp.BuildAndRunSearchBuilder()


    

    

})
      })
  
