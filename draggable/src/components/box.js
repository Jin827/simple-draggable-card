import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './card';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: calc(100vh - 170px);
    text-align: center;
    margin-top: 10px;

    span {
        padding: 10px 0px;
        font-size: 1.3em;
        background: ${({ theme }) => theme.colors.gray200}
    }
`;

const Board = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-top: none;
    height: 100%;
`;

const Box = ({ category, list, updateList }) => {

    const onDragStart = (ev, id, categoryFrom) => {
        ev.dataTransfer.setData('info', JSON.stringify({ 'id': id, 'categoryFrom': categoryFrom }));
    };

    const onDragOver = (ev) => {
        ev.preventDefault();
    };

    const onDrop = (ev, categoryTo) => {
        const parsedInfo = JSON.parse(ev.dataTransfer.getData('info'));
        updateList(parsedInfo.id, parsedInfo.categoryFrom, categoryTo);
    };

    return (
        <Wrapper>
            <span>{category}</span>
            <Board
                onDragOver={ev => onDragOver(ev)}
                onDrop={ev => onDrop(ev, category)}
            >
                {list && Object.keys(list).length !== 0 ? list[category].map(card => (
                    <Card
                        key={card.id}
                        cardInfo={card}
                        onDragStart={onDragStart}
                    />))
                    : null}
            </Board>
        </Wrapper>
    );
};

export default Box;