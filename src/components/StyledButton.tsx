import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 18px;
    display: block;
    margin: 0 auto;
    background: white;
    color: #150140;
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