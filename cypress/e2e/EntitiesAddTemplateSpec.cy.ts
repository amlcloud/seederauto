// <reference types="cypress" />

import { LoginPage } from "../pages/loginPage";
import{EntitiesPage} from "../pages/EntitiesPage";

describe('Entities:Add templates functionality test',()=>{
    const loginPage = new LoginPage();
    const entitiesPage= new EntitiesPage();
   
    it('Login anonymous', () => {
        cy.visit('/');
        loginPage.clickLoginanonymous();
    
      })

    it('entities:add periodic template',()=>{
    entitiesPage.clickAddentity();
    entitiesPage.addEntitydetails('008','autotest','IT');
    entitiesPage.addPeriodictemplate('origin','10','100','Week','7','Credit');

})



    it('logout', () => {
      loginPage.logOut();
  
    })
    
})