/// <reference types ="cypress"/>

import { navigate, emailField, addAdmin, roleField, roleselector, saveButton, editAdmin, deleteAdmin, pageTab, addPage, pageName, readOnlyFeatures, selectReadOption, deleteReadOnlyFeatures, fullFeature, readOnlyFeaturesDropdown, fullFeatureDropdown, selectFullOption, addSubPage, editPage, savePage, deletepage, deleteFromEdit } from "./page-objects/add-admin"
import { url } from "./url-file.spec";



describe("it should automate admin tab page", () => {
  // const adminTab = new adminTab()


  beforeEach(() => {
   
url()                                                //call url function from integration>url-file.spec.js

  })

  it("should  add an admin", () => {
    addAdmin ()                                          //add admin from integration > page-object > add-admin.js,1st call addAdmin function
    emailField('bsyedaserish@gmail.com')                 //then call a function for email field (enter email address)  
    roleField()                                           //then call a function that click on dropdown icon of the role field
    roleselector()                                         //then call a function that select the option from the dropdown
    saveButton()                                           //call a function that hit save button
  })
  it('should edit an admin', () => {
    editAdmin()                                          //edit admin from integration > page-object > add-admin.js,1st call editAdmin function     
    roleField()                                         //then call a function that click on dropdown icon of the role field
    roleselector()                                      //then call a function that select the option from the dropdown
    saveButton()                                         //call a function that hit save button
  })
  it('should delete an admin', () => {
    deleteAdmin()                                        //delete admin from integration > page-object > add-admin.js,call a function to delete admin
  })
  it('should redirect to page tab', () => {
    pageTab()                                     //add admin from integration > page-object > add-admin.js,call a function that redirect to the  page tab 
  })
  it('should add page', () => {
    pageTab()                                        //add page from integration > page-object > add-admin.js,call a function that redirect to the page tab
    addPage()                                         //call the function that click on add page button
    pageName('new page')                             //call a function that enter a page name
    readOnlyFeaturesDropdown()                        //call function the click on the dropdown of read only features 
    selectReadOption()                                //call a functon that select the options from the dropdowm of read only features
    deleteReadOnlyFeatures()                         //call a function that click on delete button of the selected option from dropdown
    fullFeatureDropdown()                            //call function the click on the dropdown of full feature
    selectFullOption()                               //call a functon that select the options from the dropdowm of full features
    addSubPage('sudofy')                             //call a function that click on subpage and ener the page name then hit save

  })
  it('should edit page', () => {
    pageTab()                                       //edit page from integration > page-object > add-admin.js,call a function that redirect to the page tab
    editPage()                                       //call a function that click on edit page
    readOnlyFeaturesDropdown()                       //call function the click on the dropdown of read only features 
    selectReadOption()                                //call a functon that select the options from the dropdowm of read only features
    deleteFromEdit()                                 //call a function that click on delete button of the selected option from dropdown
    // fullFeatureDropdown()
    // selectFullOption()
    savePage()                                     //call a that that hit save button

  })
  it('should delete page', () => {
    pageTab()                                       //edit page from integration > page-object > add-admin.js,call a function that redirect to the page tab
    deletepage()                                      //call a function that delete the page
  })
})






