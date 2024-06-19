
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=12dfd179-a4af-4ee6-9d1b-5e4b0fe833a4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=12dfd179-a4af-4ee6-9d1b-5e4b0fe833a4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      