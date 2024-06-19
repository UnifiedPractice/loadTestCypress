
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f8690721-76ee-4cf7-9f50-f2652fa7df71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f8690721-76ee-4cf7-9f50-f2652fa7df71&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      