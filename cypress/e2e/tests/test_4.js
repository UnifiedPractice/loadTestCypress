
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=a289c81c-b39e-49fd-983d-f9534f657c14&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true;https://staging.unifiedpractice.com/Public/Account/Login?token=296dd0b3-5197-4b54-80df-0ec200198e1a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=a289c81c-b39e-49fd-983d-f9534f657c14&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true;https://staging.unifiedpractice.com/Public/Account/Login?token=296dd0b3-5197-4b54-80df-0ec200198e1a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      