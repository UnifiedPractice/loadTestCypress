
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=2b4f52c2-921f-4b15-9987-3f65d80ab1f4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=2b4f52c2-921f-4b15-9987-3f65d80ab1f4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      