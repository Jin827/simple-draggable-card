import styled from 'styled-components';
import Draggable from './draggable';


const Heading = styled.h1`
    text-align: center;
`;

const DraggableIndex = () => {
    return (
        <>
            <Heading>Draggable Card</Heading>
            <Draggable />
        </>
    );
};

export default DraggableIndex;