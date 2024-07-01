
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=80de61a7-059d-45d1-9e7b-19cef1d49ed8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=80de61a7-059d-45d1-9e7b-19cef1d49ed8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      