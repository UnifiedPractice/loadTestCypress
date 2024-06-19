
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9ecf969a-9114-49b0-a46c-2f21ac2a3e42&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9ecf969a-9114-49b0-a46c-2f21ac2a3e42&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      