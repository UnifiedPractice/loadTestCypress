
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=7ee959a6-b861-4f9b-90c5-3a935e76e321&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=7ee959a6-b861-4f9b-90c5-3a935e76e321&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      