
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=94ee965b-ceac-4cc9-995b-bc9ec7280cce&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=94ee965b-ceac-4cc9-995b-bc9ec7280cce&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      