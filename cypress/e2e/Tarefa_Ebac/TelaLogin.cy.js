/// <reference types = "cypress"/>

describe ('Funcionalidade Login',()=>{

    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it ('Fazer login com Sucesso',()=>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','aluno_ebac20Nome de ExibiçãoNome de Exibição')
    })

    it ('Fazer login com usuário inexistente',()=>{
        cy.get('#username').type('aline_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
    })

    it ('Fazer login com usuário existente e senha incorreta',()=>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@123.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail')
    })


});




