import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
        id: 'k2', name: `La vie est bell`, category: 'Sky', bgColor: 'skyblue'
    },
    {
        id: 'k3', name: `Vivre ce moment`, category: 'Sky', bgColor: 'pink'
    }
];

const Draggable = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        const sorted = {};

        categories.forEach((category) => {
            sorted[category] = [];
        });

        data.forEach(card => sorted[card.category].push(card));
        setList(sorted);
    }, []);

    const updateList = (id, categoryFrom, categoryTo) => {
        const copied = { ...list };
        const formList = copied[categoryFrom];
        const updatedIdx = formList.findIndex(card => card.id === id);
        const removed = formList.splice(updatedIdx, 1)[0];

        if (categoryFrom === categoryTo) {
            // card that moves up and down.
        } else {
            setList(prev => {
                return {
                    ...prev,
                    [categoryTo]: [
                        ...prev[categoryTo],
                        { ...removed, category: categoryTo }
                    ],
                    [categoryFrom]: formList
                };
            });
        }
    };

    return (
        <>
            <Heading>Drag around the card !</Heading>
            <BoxWrapper>
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