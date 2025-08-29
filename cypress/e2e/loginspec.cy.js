import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
//import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('template spec', () => {

  /*
const selectorsList = {
  userName: "#mat-input-0",
  password: "#mat-input-1",
  loginButton: ":nth-child(5) > .feng-btn"
}*/

  it('passes', () => {
    
    loginPage.accessLoginPage()
    
    
    //cy.visit('/')

    cy.wait(2000);
    cy.get('[routerlink="/entrar"]').click()
    cy.url().should('include', '/entrar');

    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    /*
    cy.get('[routerlink="/entrar"]').click()
    cy.url().should('include', '/entrar');
    cy.get(loginPage.selectorsList.userName).type(userData.userSuccess.username)
    cy.get(loginPage.selectorsList.password).type(userData.userSuccess.password)
    cy.get(loginPage.selectorsList.loginButton).click() 
    */
  })

    it('Login -  Fail', () => {

    loginPage.accessLoginPage()
    cy.wait(2000);

    cy.get('[routerlink="/entrar"]').click()
    cy.url().should('include', '/entrar');
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    

    /*
    cy.get(selectorsList.userName).type(userData.userFail.username)
    cy.get(selectorsList.password).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()*/

    //cy.url({ timeout: 10000 }).should('include', '/home');

    //cy.contains('Olá, Lucas!').should('be.visible')

  })
})
