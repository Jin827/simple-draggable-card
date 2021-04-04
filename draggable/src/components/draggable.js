import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Box from './box';

const Heading = styled.h1`
    text-align: center;
    font-weight: normal;
`;

const BoxWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const categories = ['Sea', 'Sky'];
const data = [
    { id: 'k1', name: 'Jiah Lee', category: 'Sea', bgColor: 'LightSalmon' },
    {
        id: 'k2', name: `La vie est belle`, category: 'Sky', bgColor: 'skyblue'
    },
    {
        id: 'k3', name: `Vivre ce moment`, category: 'Sky', bgColor: 'pink'
    }
];

const Draggable = () => {
    const [list, setList] = useState(data);

    const updateList = (id, category) => {
        const updated = list.map(card => {
            if (card.id === id) {
                return { ...card, category };
            };
            return card;
        });
        setList(updated);
    };

    return (
        <>
            <Heading>Drag around the card !</Heading>
            <BoxWrapper data-cy="boards">
                {categories.map(category =>
                    < Box
                        key={category}
                        category={category}
                        list={list}
                        updateList={updateList}
                    />)}
            </BoxWrapper>
        </>
    );
};

export default Draggable;