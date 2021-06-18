///<reference types ="cypress"/>
//********************************redirect to page tab********************************** */

export function pageTab() {
    // cy.wait(10000)
    //cy.get(':nth-child(3) > .MuiTab-wrapper', { timeout: 700000 }).should('be.visible')
    cy.get(':nth-child(3) > .MuiTab-wrapper').click()
}

//********************************clicl on add page button********************************** */

export function addPage() {
    //  cy.wait(10000)
    //cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]', { timeout: 700000 }).should('be.visible')
    cy.xpath('//body/div[@id="root"]/div[@id="fuse-layout"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]').click()
}

//********************************page name********************************** */

export function pageName(enterPageName) {
    cy.xpath('//body/div[3]/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]').type(enterPageName + '{enter}')
}

//********************************click on read Only Features Dropdown********************************** */

export function readOnlyFeaturesDropdown() {
    // cy.wait(10000)
    // cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path', { timeout: 100000 }).should('be.visible')
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
}

//********************************select from read Only Features Dropdown********************************** */

export function selectReadOption() {
    cy.wait(10000)
    //cy.get('#readOnlyFeatures-option-4', { timeout: 700000 }).should('be.visible')
    cy.get('#readOnlyFeatures-option-4').click()

    readOnlyFeaturesDropdown()
    //cy.wait(10000)
    //cy.get('#readOnlyFeatures-option-6', { timeout: 700000 }).should('be.visible')
    cy.get('#readOnlyFeatures-option-6').click()
    readOnlyFeaturesDropdown()
    // cy.wait(10000)
    //cy.get('#readOnlyFeatures-option-13', { timeout: 700000 }).should('be.visible')
    cy.get('#readOnlyFeatures-option-13').click()
}

//********************************click on delete button of read Only Features Dropdown*********************** */

export function deleteReadOnlyFeatures() {
    // cy.wait(10000)
    // cy.get('[data-tag-index="0"] > .MuiSvgIcon-root', { timeout: 700000 }).should('be.visible')
    cy.get('[data-tag-index="0"] > .MuiSvgIcon-root').click()
}
//********************************click on full Features Dropdown*********************** */

export function fullFeatureDropdown() {

    cy.get('[role="combobox"][name="allFeatures"] > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root ').click()
    // cy.wait(10000)

}



//********************************select Full feature Option(t********************** */

export function selectFullOption() {

    cy.get('#allFeatures-option-11').click()
    // cy.wait(10000)
    fullFeatureDropdown()

    cy.get('#allFeatures-option-10').click()


}

//********************************add subpage********************** */

export function addSubPage(subPageName) {
    // cy.wait(10000)
    // cy.get(':nth-child(6) > :nth-child(1) > .MuiButton-label', { timeout: 700000 }).should('be.visible')
    cy.get(':nth-child(6) > :nth-child(1) > .MuiButton-label').click()
    cy.xpath('//body/div[3]/div[3]/div[3]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/input[1]').type(subPageName + '{enter}')
    //  cy.wait(10000)
    //cy.get(':nth-child(7) > :nth-child(2) > .MuiButton-label', { timeout: 700000 }).should('be.visible')
    cy.get(':nth-child(7) > :nth-child(2) > .MuiButton-label').click()
}

//********************************Edit page********************** */

export function editPage() {
    cy.wait(10000)
    // cy.get(':nth-child(40) > .items-center > div > :nth-child(1)', { timeout: 700000 }).should('be.visible');
    cy.get(':nth-child(41) > .items-center > div > :nth-child(1)').click()
    cy.xpath('//body/div[3]/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]').clear().type('hbdeuhdjsbd{enter}')

}
//********************************delete From Edit********************** */

export function deleteFromEdit() {
    //  cy.wait(10000)
    //cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > [data-tag-index="0"] > .MuiSvgIcon-root', { timeout: 700000 }).should('be.visible')
    cy.get('[role="combobox"][name="readOnlyFeatures"] > .MuiFormControl-root > .MuiInputBase-root > [data-tag-index="0"] > .MuiSvgIcon-root').click()
}
//********************************save page button of page tab********************** */

export function savePage() {
    // cy.wait(5000)
    //cy.get(':nth-child(6) > :nth-child(2) > .MuiButton-label', { timeout: 700000 }).should('be.visible')
    cy.get(':nth-child(6) > :nth-child(2) > .MuiButton-label').click()
}

//********************************click on delete page********************** */

export function deletepage() {
    //  cy.wait(10000)
    // cy.get(':nth-child(41) > .items-center > div > :nth-child(2)', { timeout: 700000 }).should('be.visible')
    cy.get(':nth-child(41) > .items-center > div > :nth-child(2)').click()
    // cy.wait(10000)
    // cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label', { timeout: 700000 }).should('be.visible')
    cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click()
}