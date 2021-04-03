import styled from 'styled-components';

const Wrapper = styled.div`
    width: 70%;
    height: 20%;
    border: 1px solid ${({ color, theme }) => color || theme.colors.mainBlue};
    background: ${({ color, theme }) => color || theme.colors.white};
    cursor: pointer;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = ({ cardInfo: { id, category, name, bgColor }, onDragStart }) => (
    <Wrapper
        onDragStart={ev => onDragStart(ev, id, category)}
        draggable
        color={bgColor}
    >
        <p>{name}</p>
    </Wrapper>
);

export default Card;