
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a54af188-f528-49fc-93f9-7dfa0085b28d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a54af188-f528-49fc-93f9-7dfa0085b28d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      