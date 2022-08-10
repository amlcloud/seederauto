import { LoginPage } from "../pages/loginPage";
import{EntitiesPage} from "../pages/EntitiesPage";

describe('Entities: Add new entities functionality test',()=>{
    const loginPage = new LoginPage();
    const entitiesPage= new EntitiesPage();
   
    it('Login anonymous', () => {
        cy.visit('/');
        loginPage.clickLoginanonymous();
    
      })

it('Add entity',()=>{
    entitiesPage.clickAddentity();
    entitiesPage.addEntitydetails('1001','auto','IT');
    entitiesPage.deleteEntity('auto');
})

it('logout', () => {
    loginPage.logOut();

  })

})
