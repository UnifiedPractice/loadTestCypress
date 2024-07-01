
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=96bcc4a1-e2cc-445c-8eea-60a874248fbf&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=96bcc4a1-e2cc-445c-8eea-60a874248fbf&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      