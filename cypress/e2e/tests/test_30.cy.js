
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=2bd14531-84ee-4939-85aa-042c0ba23e13&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=2bd14531-84ee-4939-85aa-042c0ba23e13&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      