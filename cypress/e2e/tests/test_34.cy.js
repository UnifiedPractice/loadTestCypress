
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=5ed42e6d-ec8b-42b5-b683-b6bd0ba56f8b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=5ed42e6d-ec8b-42b5-b683-b6bd0ba56f8b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      