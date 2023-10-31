describe('Validar funcionamento de cadastro e login', () => {
  beforeEach(() => {
    cy.visit('/cadastro')
  })

  it('Não devo conseguir realizar cadastro sem e-mail', () => {
    cy.get('#nome').type('Karoline Santos')
    cy.get('#senha').type('12345678')
    cy.get('.btn').click()
    cy.get('.alert').should('contain', 'Email é um campo obrigatório')
  })

  it('Não devo conseguir realizar cadastro sem senha', () => {
    cy.get('#nome').type('Karoline Santos')
    cy.get('#email').type('karol@mentorama.com')
    cy.get('.btn').click()
    cy.get('.alert').should('contain', 'Senha é um campo obrigatório')
  })

  it('Não devo conseguir realizar cadastro com email já cadastro', () => {
    cy.get('#nome').type('Karoline Santos')
    cy.get('#email').type('karoline@mentorama.com')
    cy.get('#senha').type('12345678')
    cy.get('.btn').click()
    cy.get('.alert').should('contain', 'Endereço de email já utilizado')
  })

  it('Devo realizar login com sucesso', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.realizarLoginComSucesso()
    cy.get('.btn').click()
    cy.get('.alert').should('contain', 'Bem vindo, Karoline Santos!')
  })
})
