/// <reference types ="cypress"/>

//********************************click on add admin button********************************** */
export function addAdmin() {
  // cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label', { timeout: 700000 }).should('be.visible')
  // cy.wait(10000)
  cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label').click()

}

//********************************clicl on email field********************************** */
export function emailField(emailFieldText) {
  //  cy.wait(10000)
  // cy.get('#combo-box-demo', { timeout: 4000 }).should('be.visible')
  cy.get('#combo-box-demo').type(emailFieldText + '{enter}')
  // cy.get('#combo-box-demo-option-0', { timeout: 700000 }).should('be.visible')
  cy.get('#combo-box-demo-option-0').click()

}

//********************************clicl on ROLE field dropdown********************************** */

export function roleField() {
  // cy.wait(10000)
  //cy.xpath("//body/div[3]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/*[1]", { timeout: 10000 }).should('be.visible')

  cy.xpath("//body/div[3]/div[3]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]/*[1]").click()
}

//********************************clicl on role field********************************** */

export function roleselector() {
  //cy.wait(10000)
  // cy.get('#route_select-dropdown-option-4', { timeout: 700000 }).should('be.visible')

  cy.get('#route_select-dropdown-option-4').click()
}

//********************************clicl on save button of admin tab********************************** */

export function saveButton() {
  // cy.wait(10000)
  // cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label', { timeout: 700000 }).should('be.visible')

  cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label').click()
}

//********************************clicl on edit admin button********************************** */
export function editAdmin() {

  cy.wait(10000)
  //cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[21]/div[1]/div[2]/span[1]', { timeout: 700000 }).should('be.visible')
  cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[21]/div[1]/div[2]/span[1]').click()
}

//********************************clicl on delete admin button********************************** */
export function deleteAdmin() {
  //  cy.wait(10000)
  // cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(2)', { timeout: 700000 }).should('be.visible')
  cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(2)').click()
  //  cy.wait(10000)
  // cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label', { timeout: 700000 }).should('be.visible')

  cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}


