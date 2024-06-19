
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4040ff91-5b6c-4f3f-9a2f-077b0d852d8a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4040ff91-5b6c-4f3f-9a2f-077b0d852d8a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      