class CadastroPage {
    selectorsList() {
    const selectorsList = {
         CpfField: "#mat-input-6",
         NomeField: "#mat-input-3",
         EmailField: "#mat-input-4",
         SexoFieldClick: "#mat-select-value-3",

         SexoField: '#mat-option-239 > .mat-option-text',
         DataNascimentoField: "#mat-input-1",
         CelularField: "#mat-input-2",
         SenhaField: "#mat-input-5",
         //passwordField: "#mat-input-1",
        // loginButton: ":nth-child(5) > .feng-btn"
        }

        return selectorsList
    }

    accesscadastroPage() {
        cy.visit('/')
    }
    cadastroWithUser(cpf,nome,email,sexoclick,sexo, datanascimento,celular,senha) {
        cy.get(this.selectorsList().CpfField).type(cpf)
        cy.get(this.selectorsList().NomeField).type(nome)
        cy.get(this.selectorsList().EmailField).type(email)
        cy.get(this.selectorsList().SexoFieldClick).type(sexoclick)
        cy.get(this.selectorsList().SexoField).type(sexo)
        cy.get(this.selectorsList().DataNascimentoField).type(datanascimento)
        cy.get(this.selectorsList().CelularField).type(celular)
        cy.get(this.selectorsList().SenhaField).type(senha)
      //  cy.get(this.selectorsList().CpfField).type(cpf)
      //  cy.get(this.selectorsList().passwordField).type(password)
      //  cy.get(this.selectorsList().loginButton).click()
    
    }
}

export default CadastroPage 