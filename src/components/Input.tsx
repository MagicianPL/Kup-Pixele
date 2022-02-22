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

    input, textarea {
        font-size: 20px;
        padding: 5px 10px;

        &:focus {
            outline: 1px solid #150140;
        }
    }

    textarea {
        min-height: 100px;
    }
`;

interface Props {
    id: string,
    label: string,
    name?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    type?: string,
    placeholder?: string,
    textarea?: boolean,
    testId?: string,
}

const Input: React.FC<Props> = ({id, label, value, onChange, type, placeholder, name, textarea, testId}) => {

    return(
        textarea ?
            <StyledWrapper>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} name={name}></textarea>
        </StyledWrapper>
        :
        <StyledWrapper>
        <label htmlFor={id}>{label}</label>
        <input data-testid={testId} id={id} value={value} onChange={onChange} type={type ? type : "text"} placeholder={placeholder} name={name} />
        </StyledWrapper>
        
    );
};

export default Input;