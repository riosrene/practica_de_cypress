/// <reference types="cypress" />
describe("pagina demo 2da practica", () =>{

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com');
    });

    it('validate URL', () =>{
        cy.url('https://opensource-demo.orangehrmlive.com/');
    });

    it('should have title OrangeHRM', () =>{
        cy.title().should('eq','OrangeHRM')

    });

    it('Validate login and password', () => {
        cy.xpath(`//input[contains(@name,'username')]`).type("Admin").click()
        cy.xpath(`//input[@type='password']`).type("admin123").click()
        cy.xpath(`//button[contains(@type,'submit')]`).click()

    });

   
});