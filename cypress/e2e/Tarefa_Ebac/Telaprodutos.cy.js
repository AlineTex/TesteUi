/// <reference types = "cypress"/>

describe ('Funcionalidade de Produtos',()=>{

    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it ('Escolher Produto',()=>{
        cy.get('[class="product-block grid"]').first().click()
    })

    
    it ('Adicionar produto no carrinho',()=>{
        var quantidade = Math.floor(Math.random()*100)+1
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
    })




});