
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=db83cfc8-8f13-4b45-8046-c4d54b66d8de&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=db83cfc8-8f13-4b45-8046-c4d54b66d8de&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      