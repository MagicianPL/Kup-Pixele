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

        &:focus {
            outline: 1px solid #150140;
        }
    }
`;

interface Props {
    id: string,
    label: string,
    name?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>  void,
    type?: string,
    placeholder?: string,
}

const Input: React.FC<Props> = ({id, label, value, onChange, type, placeholder, name}) => {
    return(
        <StyledWrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} value={value} onChange={onChange} type={type ? type : "text"} placeholder={placeholder} name={name} />
        </StyledWrapper>
    );
};

export default Input;