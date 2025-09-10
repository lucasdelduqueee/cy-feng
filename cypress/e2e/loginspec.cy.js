import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('template spec', () => {


  it('passes', () => {
    
    loginPage.accessLoginPage()

    cy.wait(2000);
    cy.get('[routerlink="/entrar"]').click()
    cy.url().should('include', '/entrar');

    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

  
  })

    it('Login -  Fail', () => {

    loginPage.accessLoginPage()
    cy.wait(2000);

    cy.get('[routerlink="/entrar"]').click()
    cy.url().should('include', '/entrar');
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    
    //cy.url({ timeout: 10000 }).should('include', '/home');

    //cy.contains('Olá, Lucas!').should('be.visible')

  })
})
