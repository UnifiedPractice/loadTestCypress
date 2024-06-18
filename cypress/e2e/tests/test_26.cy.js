
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ff468347-d3a6-437a-ba79-e9915a7983a8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ff468347-d3a6-437a-ba79-e9915a7983a8&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      