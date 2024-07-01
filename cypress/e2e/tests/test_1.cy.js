
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=92d5b707-692b-4b6a-9ce9-71b848b3a470&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=92d5b707-692b-4b6a-9ce9-71b848b3a470&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      