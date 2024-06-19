
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3747af1b-9a1d-43b4-8919-bf0204e7a422&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3747af1b-9a1d-43b4-8919-bf0204e7a422&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      