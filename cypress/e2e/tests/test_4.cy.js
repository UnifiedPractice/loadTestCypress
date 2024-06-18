
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=19d0f20b-35b8-4201-ab23-1fa78fa9e7ea&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=19d0f20b-35b8-4201-ab23-1fa78fa9e7ea&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      