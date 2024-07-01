
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=63150cb7-dfea-4f05-ab63-1db7da3dd1fb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=63150cb7-dfea-4f05-ab63-1db7da3dd1fb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      