import styled from 'styled-components';
import theme from './styles/theme';

const Wrapper = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    height: 3em;
    font-size: 1.1em;
`;

const Box = styled.div`
    padding: 1em 0px;
    color: ${({ theme }) => theme.colors.mainBlue}
`;

const Link = styled.a`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mainBlue}
`;

const Footer = () => (
    <Wrapper>
        <Box>
            <Link
                className="github-link"
                href="https://github.com/Jin827/simple-draggable-card"
                target="_blank"
                rel="noopener noreferrer"
            >
                Link to Github
            </Link> | 이지아 Front-End Developer
        </Box>

    </Wrapper>
);

export default Footer;;;;;