
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6c3c618c-e7a0-40bf-a3f7-b53c77864994&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6c3c618c-e7a0-40bf-a3f7-b53c77864994&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      