
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=c6585764-c5d0-4964-b8f5-a2eb5cf701b0&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=c6585764-c5d0-4964-b8f5-a2eb5cf701b0&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      