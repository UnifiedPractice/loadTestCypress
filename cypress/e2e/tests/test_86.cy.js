
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=69e3aefe-77bf-40f1-a1ed-16e575d3b83c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=69e3aefe-77bf-40f1-a1ed-16e575d3b83c&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      