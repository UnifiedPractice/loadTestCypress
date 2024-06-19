
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f19aa100-0979-4245-9bde-b8667860fe50&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f19aa100-0979-4245-9bde-b8667860fe50&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      