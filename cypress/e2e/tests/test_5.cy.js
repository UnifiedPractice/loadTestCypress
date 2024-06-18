
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=2c073b1d-0ccb-4b85-ae66-4db08ddb0786&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=2c073b1d-0ccb-4b85-ae66-4db08ddb0786&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      