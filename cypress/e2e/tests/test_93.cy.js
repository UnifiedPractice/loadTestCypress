
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=180572c5-d47c-4687-90ea-9f6a9400c6ed&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=180572c5-d47c-4687-90ea-9f6a9400c6ed&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      