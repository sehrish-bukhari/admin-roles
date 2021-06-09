/// <reference types ="cypress"/>


export function addAdmin() {
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label').click()

}
export function emailField(emailFieldText) {
    cy.get('#combo-box-demo', { timeout: 4000 }).should('be.visible')
    cy.get('#combo-box-demo', { timeout: 3000 }).type(emailFieldText + '{enter}')
    cy.get('#combo-box-demo-option-0').click()

}
export function roleField() {
    cy.get('.jss659 > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',).should('be.visible')

    cy.get('.jss659 > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
}
export function roleselector() {
    cy.get('#route_select-dropdown-option-4').should('be.visible')

    cy.get('#route_select-dropdown-option-4').click()
}
export function saveButton() {
    cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label').should('be.visible')

    cy.get('.justify-end > .MuiButtonBase-root > .MuiButton-label').click()
}
export function editAdmin() {
    cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(1)').click()
}
export function deleteAdmin() {
    cy.get(':nth-child(21) > .justify-between > :nth-child(2) > :nth-child(2)').click()
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').should('be.visible')

    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}



export function pageTab() {
    cy.get(':nth-child(3) > .MuiTab-wrapper').click()
}
export function addPage() {
    cy.get('.p-8 > .MuiButtonBase-root > .MuiButton-label').click()
}
export function pageName(enterPageName) {
    cy.get('.jss695 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input', { timeout: 30000 }).type(enterPageName + '{enter}')
}
export function readOnlyFeaturesDropdown() {
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}
export function selectReadOption() {
    cy.get('#readOnlyFeatures-option-4').click()
    readOnlyFeaturesDropdown()
    cy.get('#readOnlyFeatures-option-6').click()
    readOnlyFeaturesDropdown()
    cy.get('#readOnlyFeatures-option-13').click()
}
export function deleteReadOnlyFeatures() {
    cy.get('[data-tag-index="1"] > .MuiSvgIcon-root > path').click
}
export function fullFeatureDropdown() {
    cy.get('[role="combobox"][name="allFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}
export function deleteFromEdit() {
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > [data-tag-index="0"] > .MuiSvgIcon-root').click()
}
export function selectFullOption() {
    cy.get('#allFeatures-option-4').click()
    fullFeatureDropdown()
    cy.get('#allFeatures-option-6').click()
}
export function addSubPage(subPageName) {
    cy.get(':nth-child(6) > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(6) > .jss692 > .jss695 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(subPageName + '{enter}')
    cy.get(':nth-child(7) > :nth-child(2) > .MuiButton-label').click()
}
export function editPage() {
    cy.get(':nth-child(40) > .items-center > div > :nth-child(1)').click()
}
export function savePage() {
    cy.get(':nth-child(6) > :nth-child(2) > .MuiButton-label').click()
}
export function deletepage() {
    cy.get(':nth-child(41) > .items-center > div > :nth-child(2)').click()
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}