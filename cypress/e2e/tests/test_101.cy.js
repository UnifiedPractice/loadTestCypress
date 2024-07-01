
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9058e6b1-1482-4883-a2fb-c784ef313539&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9058e6b1-1482-4883-a2fb-c784ef313539&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      