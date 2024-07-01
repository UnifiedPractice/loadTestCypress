
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0a59e2b8-ccd9-43af-8ca1-74cb9943c9c3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0a59e2b8-ccd9-43af-8ca1-74cb9943c9c3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      