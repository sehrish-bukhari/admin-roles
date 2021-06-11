/// <reference types ="cypress"/>
import '../fixtures/url-file.json'

export function navigate(){
cy.fixture('url-file').then(function (data) {
    this.data = data;    
    cy.visit(this.data[0].url)
})}
export function redirectToAdminTab(){
  
    cy.get('.MuiIconButton-label-104 > .material-icons').click()
 
  cy.xpath("//span[contains(text(),'<Admin Roles>')]",{timeout:100000}).should('be.visible')
    cy.xpath('').click()
}
export function addAdmin() {
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label').click()

}
export function emailField(emailFieldText) {
   // cy.get('#combo-box-demo', { timeout: 4000 }).should('be.visible')
    cy.get('#combo-box-demo').type(emailFieldText + '{enter}')
    cy.get('#combo-box-demo-option-0',{timeout: 700000}).should('be.visible')
    cy.get('#combo-box-demo-option-0').click()

}
export function roleField() {
    cy.xpath("//body/div[3]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/*[1]",{timeout:10000}).should('be.visible')

    cy.xpath("//body/div[3]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/*[1]").click()
}
export function roleselector() {
    cy.get('#route_select-dropdown-option-4',{timeout:700000}).should('be.visible')

    cy.get('#route_select-dropdown-option-4').click()
}
export function saveButton() {
    cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label',{timeout:700000}).should('be.visible')

    cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label').click()
}
export function editAdmin() {
    cy.get(':nth-child(5) > .justify-between > :nth-child(2) > :nth-child(1)',{timeout:600000}).should('be.visible')  
      cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(1)').click()
}
export function deleteAdmin() {
    cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(2)',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(2)').click()
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label',{timeout:700000}).should('be.visible')

    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}



export function pageTab() {
    cy.get(':nth-child(3) > .MuiTab-wrapper',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(3) > .MuiTab-wrapper').click()
}
export function addPage() {
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label').click()
}
export function pageName(enterPageName) {
    cy.xpath('//body/div[3]/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]').type(enterPageName + '{enter}')
}
export function readOnlyFeaturesDropdown() {
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path',{timeout:700000}).should('be.visible')
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}
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
export function deleteReadOnlyFeatures() {
    cy.get('[data-tag-index="0"] > .MuiSvgIcon-root',{timeout:700000}).should('be.visible')
    cy.get('[data-tag-index="0"] > .MuiSvgIcon-root').click()
}
export function fullFeatureDropdown() {
    cy.get('[role="combobox"][name="allFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path',{timeout:700000}).should('be.visible')
    cy.get('[role="combobox"][name="allFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}
export function deleteFromEdit() {
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > [data-tag-index="0"] > .MuiSvgIcon-root',{timeout:700000}).should('be.visible')
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > [data-tag-index="0"] > .MuiSvgIcon-root').click()
}
export function selectFullOption() {
    cy.get('#allFeatures-option-4',{timeout:700000}).should('be.visible')
    cy.get('#allFeatures-option-4').click()
    fullFeatureDropdown()
    
    cy.get('#allFeatures-option-6',{timeout:700000}).should('be.visible')
    cy.get('#allFeatures-option-6').click()
}
export function addSubPage(subPageName) {
    cy.get(':nth-child(6) > :nth-child(1) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(6) > :nth-child(1) > .MuiButton-label').click()
    cy.xpath('//body/div[3]/div[3]/div[3]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/input[1]').type(subPageName + '{enter}')
    cy.get(':nth-child(7) > :nth-child(2) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(7) > :nth-child(2) > .MuiButton-label').click()
}
export function editPage() {
    cy.get(':nth-child(40) > .items-center > div > :nth-child(1)',{timeout:700000}).should('be.visible');
    cy.get(':nth-child(40) > .items-center > div > :nth-child(1)').click()
}
export function savePage() {
    cy.get(':nth-child(6) > :nth-child(2) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(6) > :nth-child(2) > .MuiButton-label').click()
}
export function deletepage() {
    cy.get(':nth-child(41) > .items-center > div > :nth-child(2)',{timeout:700000}).should('be.visible')
    cy.get(':nth-child(41) > .items-center > div > :nth-child(2)').click()
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label',{timeout:700000}).should('be.visible')
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}