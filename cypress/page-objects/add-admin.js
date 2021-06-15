/// <reference types ="cypress"/>
import '../fixtures/url-file.json'

//********************************navigate to url********************************** */
export function navigate(){
cy.fixture('url-file').then(function (data) {
    this.data = data;    
    cy.visit(this.data[0].url)
 
})}


//********************************Admin role tab********************************** */
export function redirectToAdminTab(){
    cy.get('.MuiIconButton-label-104 > .material-icons',{timeout:700000}).should('be.visible')
    cy.get('.MuiIconButton-label-104 > .material-icons').click()
    //cy.scrollTo(0,200)
    //cy.get('.ps__thumb-y').
  cy.xpath('//body[1]/div[2]/div[3]/div[1]/div[1]/ul[1]/a[12]',{timeout:700000}).should('be.visible')
    cy.xpath('//body[1]/div[2]/div[3]/div[1]/div[1]/ul[1]/a[12]').click({force:true})
}

//********************************click on add admin button********************************** */
export function addAdmin() {
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label').click()

}

//********************************clicl on email field********************************** */
export function emailField(emailFieldText) {
   // cy.get('#combo-box-demo', { timeout: 4000 }).should('be.visible')
    cy.get('#combo-box-demo').type(emailFieldText + '{enter}')
    cy.get('#combo-box-demo-option-0',{timeout: 700000}).should('be.visible')
    cy.get('#combo-box-demo-option-0').click()

}

//********************************clicl on ROLE field dropdown********************************** */

export function roleField() {
    cy.xpath("//body/div[3]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/*[1]",{timeout:10000}).should('be.visible')

    cy.xpath("//body/div[3]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/*[1]").click()
}

//********************************clicl on role field********************************** */

export function roleselector() {
    cy.get('#route_select-dropdown-option-4',{timeout:700000}).should('be.visible')

    cy.get('#route_select-dropdown-option-4').click()
}

//********************************clicl on save button of admin tab********************************** */

export function saveButton() {
    cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label',{timeout:700000}).should('be.visible')

    cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label').click()
}

//********************************clicl on edit admin button********************************** */
export function editAdmin() {
    cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[21]/div[1]/div[2]/span[1]',{timeout:700000}).should('be.visible')  
      cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[21]/div[1]/div[2]/span[1]').click()
}

//********************************clicl on delete admin button********************************** */
export function deleteAdmin() {
    cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(2)',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(2)').click()
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label',{timeout:700000}).should('be.visible')

    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}


//********************************redirect to page tab********************************** */

export function pageTab() {
    cy.get(':nth-child(3) > .MuiTab-wrapper',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(3) > .MuiTab-wrapper').click()
}

//********************************clicl on add page button********************************** */

export function addPage() {
    cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]',{timeout:700000}).should('be.visible')
    cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]').click()
}

//********************************page name********************************** */

export function pageName(enterPageName) {
    cy.xpath('//body/div[3]/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]').type(enterPageName + '{enter}')
}

//********************************click on read Only Features Dropdown********************************** */

export function readOnlyFeaturesDropdown() {
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path',{timeout:100000}).should('be.visible')
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}

//********************************select from read Only Features Dropdown********************************** */

export function selectReadOption() {
    cy.get('#readOnlyFeatures-option-4',{timeout:700000}).should('be.visible')
     cy.get('#readOnlyFeatures-option-4').click()
    
    readOnlyFeaturesDropdown()
    
    cy.get('#readOnlyFeatures-option-6',{timeout:700000}).should('be.visible')
    cy.get('#readOnlyFeatures-option-6').click()
    readOnlyFeaturesDropdown()
    
    cy.get('#readOnlyFeatures-option-13',{timeout:700000}).should('be.visible')
    cy.get('#readOnlyFeatures-option-13').click()
}

//********************************click on delete button of read Only Features Dropdown*********************** */

export function deleteReadOnlyFeatures() {
    cy.get('[data-tag-index="0"] > .MuiSvgIcon-root',{timeout:700000}).should('be.visible')
    cy.get('[data-tag-index="0"] > .MuiSvgIcon-root').click()
}
//********************************click on full Features Dropdown*********************** */

export function fullFeatureDropdown() {
    cy.get('[role="combobox"][name="allFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path',{timeout:700000}).should('be.visible')
    cy.get('[role="combobox"][name="allFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}

//********************************delete From Edit********************** */

export function deleteFromEdit() {
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > [data-tag-index="0"] > .MuiSvgIcon-root',{timeout:700000}).should('be.visible')
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > [data-tag-index="0"] > .MuiSvgIcon-root').click()
}

//********************************select Full feature Option(t********************** */

export function selectFullOption() {
    cy.get('#allFeatures-option-4',{timeout:700000}).should('be.visible')
    cy.get('#allFeatures-option-4').click()
    fullFeatureDropdown()
    
    cy.get('#allFeatures-option-6',{timeout:700000}).should('be.visible')
    cy.get('#allFeatures-option-6').click()
}

//********************************add subpage********************** */

export function addSubPage(subPageName) {
    cy.get(':nth-child(6) > :nth-child(1) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(6) > :nth-child(1) > .MuiButton-label').click()
    cy.xpath('//body/div[3]/div[3]/div[3]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/input[1]').type(subPageName + '{enter}')
    cy.get(':nth-child(7) > :nth-child(2) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(7) > :nth-child(2) > .MuiButton-label').click()
}

//********************************Edit page********************** */

export function editPage() {
    cy.get(':nth-child(40) > .items-center > div > :nth-child(1)',{timeout:700000}).should('be.visible');
    cy.get(':nth-child(40) > .items-center > div > :nth-child(1)').click()
}

//********************************save page button of page tab********************** */

export function savePage() {
    cy.get(':nth-child(6) > :nth-child(2) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(6) > :nth-child(2) > .MuiButton-label').click()
}

//********************************click on delete page********************** */

export function deletepage() {
    cy.get(':nth-child(41) > .items-center > div > :nth-child(2)',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(41) > .items-center > div > :nth-child(2)').click()
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}