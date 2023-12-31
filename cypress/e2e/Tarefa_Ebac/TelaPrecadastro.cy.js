/// <reference types = "cypress"/>
import { faker } from '@faker-js/faker';

describe ('Funcionalidade Pre Cadastro',()=>{

    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it ('Fazer o Pre Cadastro com Sucesso',()=>{
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain',"Detalhes da conta modificados com sucesso.")
    })

    

});




