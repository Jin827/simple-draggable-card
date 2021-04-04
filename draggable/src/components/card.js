import styled from 'styled-components/macro';

const Wrapper = styled.div`
    display: block;     
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

const Card = ({ cardInfo: { id, name, bgColor }, onDragStart }) => (
    <Wrapper
        color={bgColor}
        data-cy="card"
        draggable
        onDragStart={ev => onDragStart(ev, id)}
    >
        <p>{name}</p>
    </Wrapper>
);

export default Card;