
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=e6b4d9a1-62fe-42a1-acf5-ee401cb3e2ef&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=e6b4d9a1-62fe-42a1-acf5-ee401cb3e2ef&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      