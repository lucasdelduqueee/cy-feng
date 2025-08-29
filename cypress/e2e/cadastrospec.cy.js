import cadastroData from '../fixtures/users/cadastroData.json'
import CadastroPage from '../pages/CadastroPage.js'
//import LoginPage from '../pages/loginPage.js'

const cadastroPage = new CadastroPage()

describe('template spec', () => {

  /*
const selectorsList = {
  userName: "#mat-input-0",
  password: "#mat-input-1",
  loginButton: ":nth-child(5) > .feng-btn"
}*/

  it('Cadastro - passes', () => {
    
    cadastroPage.accesscadastroPage()
    
    
    //cy.visit('/')

    cy.wait(2000);
    cy.get('[routerlink="/checkout/register"]').click()
    cy.url().should('include', '/register');
    cy.get('h1').should('contain.text', 'Preencha os seus dados para prosseguir com o cadastro')

    cadastroPage.cadastroWithUser(cadastroData.userSuccess.cpf, cadastroData.userSuccess.nome, cadastroData.userSuccess.email,
        cadastroData.userSuccess.sexo, cadastroData.userSuccess.data, cadastroData.userSuccess.senha)

    /*
    cy.get('[routerlink="/entrar"]').click()
    cy.url().should('include', '/entrar');
    cy.get(loginPage.selectorsList.userName).type(userData.userSuccess.username)
    cy.get(loginPage.selectorsList.password).type(userData.userSuccess.password)
    cy.get(loginPage.selectorsList.loginButton).click() 
    */
  })

    it('Cadastro -  Fail', () => {

    cadastroPage.accesscadastroPage()
    cy.wait(2000);

    cy.get('[routerlink="/checkout/register"]').click()
    cy.url().should('include', '/register');
    cy.get('h1').should('contain.text', 'Preencha os seus dados para prosseguir com o cadastro')
   // loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    cadastroPage.cadastroWithUser(cadastroData.userFail.cpf)

    /*
    cy.get(selectorsList.userName).type(userData.userFail.username)
    cy.get(selectorsList.password).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()*/

    //cy.url({ timeout: 10000 }).should('include', '/home');

    //cy.contains('Olá, Lucas!').should('be.visible')

  })
})
