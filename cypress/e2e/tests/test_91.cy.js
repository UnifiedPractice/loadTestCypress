
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8a4ddd99-aafc-42bd-9e0f-7f4ead52e941&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8a4ddd99-aafc-42bd-9e0f-7f4ead52e941&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      