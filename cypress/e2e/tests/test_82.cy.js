
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=78f7b51b-958c-4e26-ad4e-c6fd2d3daa90&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=78f7b51b-958c-4e26-ad4e-c6fd2d3daa90&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      