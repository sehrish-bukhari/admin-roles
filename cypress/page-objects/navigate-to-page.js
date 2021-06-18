///<reference types ="cypress"/>
import '../fixtures/url-file.json'

//********************************navigate to url********************************** */
export function navigate() {
    cy.fixture('url-file').then(function (data) {
        this.data = data;
        cy.visit(this.data[0].url)

    })
}
//********************************Admin role tab********************************** */
export function redirectToAdminTab() {
    //cy.wait(10000)
    cy.get('.MuiIconButton-label-104 > .material-icons', { timeout: 700000 }).should('be.visible')
    cy.get('.MuiIconButton-label-104 > .material-icons').click()
    //cy.scrollTo(0,200)
    //cy.get('.ps__thumb-y').
    // cy.xpath('//body[1]/div[2]/div[3]/div[1]/div[1]/ul[1]/a[12]',{timeout:700000}).should('be.visible')
    //cy.wait(10000)
    cy.xpath('//body[1]/div[2]/div[3]/div[1]/div[1]/ul[1]/a[12]').click({ force: true })
}