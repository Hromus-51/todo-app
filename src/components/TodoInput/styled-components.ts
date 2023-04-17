import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled.form`
    position: relative;
    box-shadow: var(--shadow);

    &:not(:last-child) {
        margin-bottom: 24px;
    }

    @media(max-width:425px) {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

export const InputEl = styled.input.attrs(props => ({
    placeholder: "Create a new todo…"
}))`
    width: 100%;
    background: var(--colors-bg-todo);
    border-radius: var(--bdrr);

    padding: 23px 66px 23px 72px;

    font-size: var(--fs-bm);
    line-height: var(--lh-bm);

    &::placeholder {
        color: var(--color-text-placeholder);
    }

    @media(max-width:425px) {
        padding: 18px 66px 18px 52px;

        font-size: var(--fs-bmm);
        line-height: var(--lh-bmm);
    }
`;

export const Circle = styled.div`
    width: 24px;
    height: 24px;

    border-radius: 50%;
    border: 1px solid var(--color-line);

    position: absolute;
    top: 50%;
    left: 24px; 

    transform: translateY(-50%) ;

    @media(max-width:425px) {
        width: 20px;
        height: 20px;
        left: 20px; 
    }
`;

export const CrossIcon = styled(motion.img)`
    width: 18px;
    height: 18px;

    cursor: pointer;

    position: absolute;
    top: 50%;
    right: 24px;

    transform: translateY(-50%);

    @media(max-width:425px) {
        width: 12px;
        height: 12px;
        right: 20px; 
    }
`;