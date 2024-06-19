
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a8db6281-49ea-4c34-8827-e0c29b9cc3d7&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a8db6281-49ea-4c34-8827-e0c29b9cc3d7&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      