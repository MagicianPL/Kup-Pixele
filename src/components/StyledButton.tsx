import styled from 'styled-components';

const StyledButton = styled.button<{primary?: boolean,}>`
    padding: 10px 18px;
    display: block;
    margin: 0 auto;
    background: ${(props) => props.primary ? "#150140" : "white"};
    color: ${(props => props.primary ? "white" : "#150140")};
    border-radius: 10px;
    transition: all 0.4s;
    cursor: pointer;
    border: none;
    font-size: 30px;
    font-weight: bold;

    &:hover {
        color: white;
        background: #381585;
    }
`;

export default StyledButton;