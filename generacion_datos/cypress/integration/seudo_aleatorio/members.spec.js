describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(1000);
    })
    it('Generacion de escenarios seudo aleatorios', () => {
        cy.get(".gh-nav-body a[href='#/members/']").click();
        cy.wait(1000);
        cy.get(".gh-canvas-header a[href='#/members/new/']").click();
        cy.wait(1000);

        cy.request({
            url: 'https://my.api.mockaroo.com/datos1.json?key=0bed1ab0'
          }).then((response) => {
            let datos = response.body;
            for (let i in datos)
            {
                let fila = datos[i];
                let nombre  = fila.nombre || "";
                let email  = fila.email || "";   
                let label  = fila.label || "";        
                let nota  = fila.nota || ""; 
                let email_limite_i  = fila.email_limite_i || "";        
                let email_limite_s  = fila.email_limite_s || "";
                let label_limite_i  = fila.label_limite_i || "";
                let label_limite_s  = fila.label_limite_s || "";      
                let nombre_limite_i  = fila.nombre_limite_i || "";
                let nombre_limite_s  = fila.nombre_limite_s || "";      
                let nota_limite_i  = fila.nota_limite_i || "";
                let nota_limite_s  = fila.nota_limite_s || "";     

                if(nombre_limite_i.length>0)
                {
                    nombre = nombre_limite_i;
                }

                if(nombre_limite_s.length>0)
                {
                    nombre = nombre_limite_s;
                }

                if(email_limite_i.length>0)
                {
                    email = email_limite_i;
                }

                if(email_limite_s.length>0)
                {
                    email = email_limite_i;
                }

                if(label_limite_i.length>0)
                {
                    label = label_limite_i;
                }

                if(label_limite_s.length>0)
                {
                    label = label_limite_s;
                }

                if(nota_limite_i.length>0)
                {
                    nota = nota_limite_i;
                }

                if(nota_limite_s.length>0)
                {
                    nota = nota_limite_s;
                }

                cy.get('#member-name').click(); 
                if(nombre.length>0)
                {
                    cy.get('#member-name').type(nombre,{force:true}); 
                }
                
                if(email.length>0)
                {
                    cy.get('#member-email').type(email,{force:true});
                }
                
                if(label.length>0)
                {
                    cy.get("input[type='search']").type(label+"{enter}",{force:true});
                }
                
                if(nota.length>0)
                {
                    cy.get('#member-note').type(nota,{force:true}); 
                }
               

                cy.get(".view-actions button.gh-btn-primary").click();
                cy.wait(1000);

                

                cy.get(".gh-nav-body a[href='#/members/']").click();
                cy.wait(1000);

                cy.get("body").then($body => {
                    if ($body.find("button[class='gh-btn gh-btn-red'] span").length > 0) {   
                        cy.get("button[class='gh-btn gh-btn-red'] span").click();
                    }
                });

                cy.wait(1000);

                cy.get(".gh-canvas-header a[href='#/members/new/']").click();
                cy.wait(1000);

            }
            

            
          })


    })
})