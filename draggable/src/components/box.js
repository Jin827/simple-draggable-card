import React from 'react';
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

    const sortedCard = () => {
        const sorted = {
            'Sea': [],
            'Sky': []
        };

        list.forEach(data => sorted[data.category].push(data));

        return (
            <>{Object.keys(sorted).length !== 0
                ? sorted[category].map(card => (
                    <Card
                        key={card.id}
                        cardInfo={card}
                        onDragStart={onDragStart}
                    />))
                : null}</>
        );
    };

    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData('id', id);
    };

    const onDragOver = (ev) => {
        ev.preventDefault();
    };

    const onDrop = (ev, category) => {
        updateList(ev.dataTransfer.getData('id'), category);
    };

    return (
        <Wrapper>
            <span>{category}</span>
            <Board
                onDragOver={ev => onDragOver(ev)}
                onDrop={ev => onDrop(ev, category)}
            >
                {list && list.length ? sortedCard() : null}
            </Board>
        </Wrapper>
    );
};

export default Box;