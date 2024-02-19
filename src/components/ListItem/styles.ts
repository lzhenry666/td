import styled, { CSSObject, CSSProp } from "styled-components";

type ContainerProps = {
    done: boolean;
};

export const Container = styled.div<ContainerProps>(( { done}: ContainerProps) => ({
    display: 'flex',
    backgroundColor: '#20232a',
    color: 'white',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '10px',
    alignItems: 'center',
    input: {
        marginRight: '5px',
    },
    label: {
        textDecoration: done ? 'line-through' : 'initial',
    },
}) as CSSObject & CSSProp)
