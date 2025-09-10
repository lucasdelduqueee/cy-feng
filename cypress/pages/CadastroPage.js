class CadastroPage {
    selectorsList() {
    const selectorsList = {
         CpfField: "#mat-input-6",
         NomeField: "#mat-input-3",
         EmailField: "#mat-input-4",
         SexoFieldClick: "#mat-select-value-3",
         SexoOption: 'mat-option',
         DataNascimentoField: "#mat-input-1",
         CelularField: "#mat-input-2",
         SenhaField: "#mat-input-5",
         TermoUsoClick: "#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-label > .fengi-checkmark-bold",
         PrivacidadeClick: "#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-label > .fengi-checkmark-bold",
         SubmitClick: ".ng-star-inserted > .feng-btn"

        }

        return selectorsList
    }

    accesscadastroPage() {
        cy.visit('/')
    }
    cadastroWithUser(cpf,nome,email,sexo, datanascimento,celular,senha) {
        cy.get(this.selectorsList().CpfField).type(cpf)
        cy.get(this.selectorsList().NomeField).type(nome)
        cy.get(this.selectorsList().EmailField).type(email)
        cy.get(this.selectorsList().SexoFieldClick).click()
        cy.get(this.selectorsList().SexoOption).contains(sexo).click()
        cy.get(this.selectorsList().DataNascimentoField).type(datanascimento)
        cy.get(this.selectorsList().CelularField).type(celular)
        cy.get(this.selectorsList().SenhaField).type(senha)
        cy.get(this.selectorsList().TermoUsoClick).click()
        cy.get(this.selectorsList().PrivacidadeClick).click()
        cy.get(this.selectorsList().SubmitClick).click()
        cy.wait(10000);
    
    }
}

export default CadastroPage 