
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ceacc1af-5dd5-450f-8a2a-eae988618562&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ceacc1af-5dd5-450f-8a2a-eae988618562&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      