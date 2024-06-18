
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=104fde7c-5a31-4e80-ac6a-2afb8bbaeb76&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=104fde7c-5a31-4e80-ac6a-2afb8bbaeb76&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      