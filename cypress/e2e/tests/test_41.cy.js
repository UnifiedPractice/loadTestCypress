
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=89bd6a1b-9be3-4abf-a8f1-7723edbaa3d0&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=89bd6a1b-9be3-4abf-a8f1-7723edbaa3d0&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      