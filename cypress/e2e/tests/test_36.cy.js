
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=26f24b8c-8928-4e41-8c3b-165ade0317fb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=26f24b8c-8928-4e41-8c3b-165ade0317fb&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      