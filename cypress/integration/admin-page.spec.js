/// <reference types ="cypress"/>
import { navigate, redirectToAdminTab } from '../page-objects/navigate-to-page'
import { emailField, addAdmin, roleField, roleselector, saveButton, editAdmin, deleteAdmin } from "../page-objects/admin-tab"
import { pageTab, addPage, pageName, readOnlyFeatures, selectReadOption, deleteReadOnlyFeatures, fullFeature, readOnlyFeaturesDropdown, fullFeatureDropdown, selectFullOption, addSubPage, editPage, savePage, deletepage, deleteFromEdit } from '../page-objects/page-tab'

describe("it should automate admin tab page", () => {
  // const adminTab = new adminTab()

  before(() => {                                          //call url function from cypress > fixture> url-file.json
    navigate()
  })

  beforeEach(() => {
    cy.login()                                           //call local-storage from support> command.js

    redirectToAdminTab()                                //call function from page-object>navigate-to-page to redirect to admin tab
  })
  it("should  add an admin", () => {
    cy.wait(10000)
    addAdmin()                                            //add admin from integration > page-object > add-admin.js,1st call addAdmin function
    emailField('bsyedaserish@gmail.com')                     //then call a function for email field (enter email address)  
    roleField()                                            //then call a function that click on dropdown icon of the role field
    roleselector()                                              //then call a function that select the option from the dropdown
    saveButton()                                                //call a function that hit save button
  })
  it('should edit an admin', () => {
    cy.wait(10000)
    editAdmin()                                       //edit admin from integration > page-object > add-admin.js,1st call editAdmin function     
    roleField()                                     //then call a function that click on dropdown icon of the role field
    roleselector()                                   //then call a function that select the option from the dropdown
    saveButton()                                      //call a function that hit save button
  })
  it('should delete an admin', () => {
    cy.wait(10000)
    deleteAdmin()                                        //delete admin from integration > page-object > add-admin.js,call a function to delete admin
  })

})

describe('it should automate page tab', () => {
  before(() => {
    navigate()                                                //call url function from cypress > fixture> url-file.json
  })

  beforeEach(() => {
    cy.login()                                             //call local-storage from support> command.js

    redirectToAdminTab()                               //call function from page-object>navigate-to-page to redirect to admin tab        
    cy.wait(10000)
  })
  it('should click on add page', () => {
    cy.wait(10000)
    pageTab()                                             //fall function from page-object>page-tab.js to redirect to page tab
    addPage()                                               //call the function that click on add page button
    pageName('new page')                                     //call a function that enter a page name
    readOnlyFeaturesDropdown()                                  //call function the click on the dropdown of read only features 
    selectReadOption()                                        //call a functon that select the options from the dropdowm of read only features
    deleteReadOnlyFeatures()                                //call a function that click on delete button of the selected option from dropdown
    fullFeatureDropdown()                                  //call function the click on the dropdown of full feature
    selectFullOption()                                         //call a functon that select the options from the dropdowm of full features
    addSubPage('sudofy')                                 //call a function that click on subpage and ener the page name then hit save

  })

  it('should edit page', () => {
    cy.wait(10000)
    pageTab()                                                    //edit page from integration > page-object > add-admin.js,call a function that redirect to the page tab
    editPage()
    //pageName('mqmppp')                                       //call a function that click on edit page
    readOnlyFeaturesDropdown()                                //call function the click on the dropdown of read only features 
    selectReadOption()                                         //call a functon that select the options from the dropdowm of read only features
    deleteFromEdit()                                             //call a function that click on delete button of the selected option from dropdown
    // fullFeatureDropdown()
    // selectFullOption()
    savePage()                                                  //call a that that hit save button

  })
  it('should delete page', () => {
    cy.wait(10000)
    pageTab()                                                   //edit page from integration > page-object > add-admin.js,call a  function that redirect to the page tab
    deletepage()                                                     //call a function that delete the page
  })
})
//describe("")




