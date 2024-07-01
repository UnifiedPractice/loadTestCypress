
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6dd3a022-966d-44ec-b8b7-e75104dd6dd8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6dd3a022-966d-44ec-b8b7-e75104dd6dd8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      