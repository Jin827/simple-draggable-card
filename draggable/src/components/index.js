import styled from 'styled-components';
import Draggable from './draggable';


const Heading = styled.h1`
    text-align: center;
`;

const Board = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    height: calc(100% - 170px);
    width: 95%;
    margin: 0 auto;
`;

const DraggableIndex = () => {
    return (
        <>
            <Heading>Drag around the card !</Heading>
            <Board>
                <Draggable />
            </Board>
        </>
    );
};

export default DraggableIndex;