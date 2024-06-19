
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=977d1bb1-9069-4ae2-96c1-2aa99b3dd5bc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=977d1bb1-9069-4ae2-96c1-2aa99b3dd5bc&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      