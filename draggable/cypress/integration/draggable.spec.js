describe('Draggable page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('boards and cards should be listed correctly', () => {
        cy.get('[data-cy="boards"] > div')
            .eq(0)
            .should('contain', 'Sea');
        cy.get('[data-cy="boards"] > div')
            .eq(1)
            .should('contain', 'Sky');

        cy.get('[data-cy="boards"] > div').eq(0).within(() => {
            cy.get('[data-cy="board"]')
                .children('[data-cy="card"]')
                .should('have.length', 1);

            cy.get('[data-cy="board"]')
                .should('not.have.value', 'Jiah Lee');
        });

        cy.get('[data-cy="boards"] > div').eq(1).within(() => {
            cy.get('[data-cy="board"]')
                .children('[data-cy="card"]')
                .should('have.length', 2);
        });
    });

    it('Card is dragged to another board.', () => {

        cy.get('[data-cy="boards"]').within(() => {
            const draggable = cy.get('[data-cy="board-Sea"]').children('[data-cy="card"]').eq(0);
            draggable.should('have.value', 'Jiah Lee');

            const droppable = cy.get('[data-cy="board-Sky"]');
            droppable.should('have.value', 'La vie est belle');

            cy.wait(3000);
            draggable.dragTo(droppable);




        });

        cy.wait(1000);

        cy.get('[data-cy="boards"] > div').eq(0).should('not.have.value', 'Jiah Lee');
        cy.get('[data-cy="boards"] > div').eq(1).should('have.value', 'Jiah Lee');
    });
});

