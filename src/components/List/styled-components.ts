import { Reorder } from "framer-motion";
import styled from "styled-components";

export const TodoLi = styled(Reorder.Item)`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);

    position: relative;
    border-radius: var(--bdrr) var(--bdrr) 0 0;

    background: var(--colors-bg-todo);
    overflow: hidden;

    &:hover img{
        opacity: 1;
        transition: opacity 0.15s ease 0s;
    }

    @media(max-width: 425px) {
        font-size: var(--fs-bmm);
        line-height: var(--lh-bmm);
    }
`;

export const LiContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 24px;

    padding: 20px 24px 20px 24px;
    border-bottom: 1px solid var(--color-line);

    @media(max-width: 425px) {
        column-gap: 12px;
        padding: 16px 20px 16px 20px;
    }
`;

export const IconCross = styled.img`
    flex: 0 0 18px;
    height: 18px;

    cursor: pointer;
    opacity: 0;

    transition: opacity 0.15s ease 0s;

    @media(max-width: 425px) {
        opacity: 1;
        flex: 0 0 12px;
        height: 12px;
    }
`;

export const Check = styled.div<{ bg: string }>`
    flex: 0 0 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    border-radius: 50%;
    background: var(${props => props.bg});

    &:hover{
        background: var(--check-bg-hover);
    }

    @media(max-width: 425px) {
        flex: 0 0 20px;
        height: 20px;
    }
`;

export const CheckIcon = styled.img`
    @media(max-width: 425px) {
        width: 8px;
        height: 7px;z
    }
`;

export const CheckCircle = styled.div<{ visible: string }>`
    width: 22px;
    height: 22px;

    opacity: ${props => props.visible};
    
    border-radius: 50%;
    background: var(--colors-bg-todo);

    position: absolute;
    top: 50%;
    left:50%;

    transform: translate(-50%, -50%);
    transition: opacity 0.1s ease 0s;

    @media(max-width: 425px) {
        width: 19px;
        height: 19px;
    }
`;

export const Content = styled.p<{ decoration: string, color: string }>`
    flex-grow: 1;
    color: var(${props => props.color});
    text-decoration: ${props => props.decoration};
`;

