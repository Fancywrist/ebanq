import TestActions from '../../support/PageResources/PageActions'
const test = new TestActions()

context('SPECTRANET SELF CARE', ()=>{
   
    it ('Automate-Login', ()=>{
        
     cy.fixture("Login").then((em)=>{
       cy.visit('/');
       cy.wait(3000);
       test.clickElement(em.userIdRadio);
       test.typeAValue(em.userId,em.userIdValue);
       test.typeAValue(em.password,em.passwordValue);
       test.clickElement(em.loginButton);
       test.viewElementText(em.manageProfile,em.ManageProfile)
        })
    })
})