const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Widget', () => {
  it('should open and close the widget', () => {
    // Visita o app
    cy.visit(APP_URL)

    // Garante que o botão de abrir está visível
    cy.get('#widget-open-button').should('be.visible')

    // Clica no botão de abrir
    cy.get('#widget-open-button').click()

    // Aguarda a transição/teleport
    cy.wait(500)

    // Clica no botão de fechar
    cy.get('#widget-close-button').click()

    // Aguarda e garante que voltou ao estado inicial
    cy.wait(500)
    cy.get('#widget-close-button').should('not.exist')
  })
})
