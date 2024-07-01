
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=de36941c-1b88-4069-8b58-d3ff7df2aa20&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=de36941c-1b88-4069-8b58-d3ff7df2aa20&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      