import cadastroDataFalha from '../fixtures/users/cadastroDataFalha.json'
import cadastroData from '../fixtures/users/cadastroData.js'
import CadastroPage from '../pages/CadastroPage.js'


const cadastroPage = new CadastroPage()

describe('template spec', () => {

  it('Cadastro - Dadas validos', () => {
    
    cadastroPage.accesscadastroPage()
    
    cy.wait(2000);
    cy.get('[routerlink="/checkout/register"]').click()
    cy.url().should('include', '/register');
    cy.get('h1').should('contain.text', 'Preencha os seus dados para prosseguir com o cadastro')

    cadastroPage.cadastroWithUser(cadastroData.userSuccess.cpf, cadastroData.userSuccess.nome, cadastroData.userSuccess.email,
        cadastroData.userSuccess.sexo, 
        cadastroData.userSuccess.datanascimento, cadastroData.userSuccess.celular, cadastroData.userSuccess.senha)

  cy.get('.mat-menu-trigger').should('contain.text', 'Olá, Lucas!')

  })

    it('Cadastro -  Dados invalidos', () => {

    cadastroPage.accesscadastroPage()
    cy.wait(2000);

    cy.get('[routerlink="/checkout/register"]').click()
    cy.url().should('include', '/register');
    cy.get('h1').should('contain.text', 'Preencha os seus dados para prosseguir com o cadastro')
    
    cadastroPage.cadastroWithUser(cadastroDataFalha.userFail.cpf, cadastroDataFalha.userFail.nome, cadastroDataFalha.userFail.email,
        cadastroDataFalha.userFail.sexo, 
        cadastroDataFalha.userFail.datanascimento, cadastroDataFalha.userFail.celular, cadastroDataFalha.userFail.senha)

    cy.get('.swal2-popup').should('contain.text', 'Verifique os campos com erro.')

        
  })
})
