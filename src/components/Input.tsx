import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;

    label {
        font-weight: bold;
    }

    input {
        font-size: 20px;
        padding: 5px 10px;
    }
`;

interface Props {
    id: string,
    label: string,
    name?: string,
    value: string,
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
    type?: string,
    placeholder?: string,
}

const Input: React.FC<Props> = ({id, label, value, onClick, type, placeholder}) => {
    return(
        <StyledWrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} value={value} onClick={onClick} type={type ? type : "text"} placeholder={placeholder} />
        </StyledWrapper>
    );
};

export default Input;