//import cadastroData from '../fixtures/users/cadastroData.json'
import cadastroData from '../fixtures/users/cadastroData.js'
import CadastroPage from '../pages/CadastroPage.js'


const cadastroPage = new CadastroPage()
//const cadastroData = new cadastroData()

//cadastroData.

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


/*  cadastroPage.cadastroWithUser(cadastroData.userSuccess.cpf, cadastroData.userSuccess.nome, cadastroData.userSuccess.email,
        cadastroData.userSuccess.sexo, 
        cadastroData.userSuccess.datanascimento, cadastroData.userSuccess.celular, cadastroData.userSuccess.senha)

*/


       //cy.url().should('include', '/email'); 
       // cy.get('h1').should('contain.text', 'Identificamos que seu e-mail ainda não foi validado.')

  })

    it('Cadastro -  Dados invalidos', () => {

    cadastroPage.accesscadastroPage()
    cy.wait(2000);

    cy.get('[routerlink="/checkout/register"]').click()
    cy.url().should('include', '/register');
    cy.get('h1').should('contain.text', 'Preencha os seus dados para prosseguir com o cadastro')
    cadastroPage.cadastroWithUser(cadastroData.userFail.cpf)
   /* cadastroPage.cadastroWithUser(cadastroData.userFail.cpf, cadastroData.userFail.nome, cadastroData.userFail.email,
        cadastroData.userFail.sexo, 
        cadastroData.userFail.datanascimento, cadastroData.userFail.celular, cadastroData.userFail.senha)

*/
  })
})
