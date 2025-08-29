class LoginPage {
    selectorsList() {
    const selectorsList = {
         userNameField: "#mat-input-0",
         passwordField: "#mat-input-1",
         loginButton: ":nth-child(5) > .feng-btn"
        }

        return selectorsList
    }

    accessLoginPage() {
        cy.visit('/')
    }
    loginWithUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    
    }
}

export default LoginPage 
