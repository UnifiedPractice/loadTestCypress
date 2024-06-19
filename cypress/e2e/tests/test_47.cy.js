
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=79892fef-22b8-4845-b736-1bb56d7f2df3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=79892fef-22b8-4845-b736-1bb56d7f2df3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      