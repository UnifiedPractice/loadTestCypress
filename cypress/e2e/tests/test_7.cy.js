
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0c76d873-255d-410d-a8fe-f81a28db2a73&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0c76d873-255d-410d-a8fe-f81a28db2a73&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      