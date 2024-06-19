
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=796197cb-4f70-479f-8f51-3ee6bbb67603&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=796197cb-4f70-479f-8f51-3ee6bbb67603&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      