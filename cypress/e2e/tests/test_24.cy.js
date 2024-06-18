
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=15655e32-7b32-44c7-9063-af5495b35895&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=15655e32-7b32-44c7-9063-af5495b35895&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      