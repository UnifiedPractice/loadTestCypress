
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4aad72cd-3685-496d-bc62-3f3f45668e59&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4aad72cd-3685-496d-bc62-3f3f45668e59&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      