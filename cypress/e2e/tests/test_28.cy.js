
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0c0545ec-08cd-4e25-acf7-6c87e8c01a18&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0c0545ec-08cd-4e25-acf7-6c87e8c01a18&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      