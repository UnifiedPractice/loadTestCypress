
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=f16201cf-dc12-48b3-b8a4-548b0f6b7f95&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=f16201cf-dc12-48b3-b8a4-548b0f6b7f95&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      