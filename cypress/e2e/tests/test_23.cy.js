
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ea04ce8c-0041-4c73-823b-4416bd2ad806&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ea04ce8c-0041-4c73-823b-4416bd2ad806&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      