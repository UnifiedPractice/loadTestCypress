
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d3092f0b-e2ec-40de-ab86-05dc47d72765&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d3092f0b-e2ec-40de-ab86-05dc47d72765&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      