
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=03215f8e-4eed-40ee-9a74-4a7a05a380d3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=03215f8e-4eed-40ee-9a74-4a7a05a380d3&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      