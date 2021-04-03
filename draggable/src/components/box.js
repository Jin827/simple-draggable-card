import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: block;     
    width: 100px;
    height: 100px;
    background: ${({ theme }) => theme.colors.mainBlue};
    cursor: pointer;
`;

const Box = () => {
    return (
        <Card />
    );
};

export default Box;