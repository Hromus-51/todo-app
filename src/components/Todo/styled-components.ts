import styled from "styled-components";

export const HeaderBackground = styled.header`
    width: 100%;
    padding-top: 300px;
    background: var(--bg-img) 0 0 / cover no-repeat;

    @media(max-width: 425px) {
        padding-top: 200px;
        background: var(--bg-img-m) 0 0 / cover no-repeat;
    }
`;

export const TodoEl = styled.main`
    margin-top: -230px;

    @media(max-width: 425px) {
        margin-top: -152px;
    }
`;

export const Group = styled.div`
    border-radius: var(--bdrr);
    background: var(--colors-bg-todo);
    box-shadow: var(--shadow);

    &:not(:last-child) {
        margin-bottom: 49px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 16px;
    }
    }
`;

export const Tip = styled.p`
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    color: var(--color-text-secondary);
    text-align: center;
`;

export const SortVisibility = styled.div`
    color: var(--color-text-secondary);

    display: none;
    padding: 15px 20px 19px;

    border-radius: var(--bdrr);
    background: var(--colors-bg-todo);
    box-shadow: var(--shadow);

    &:not(:last-child) {
        margin-bottom: 40px;
    }

    @media(max-width: 425px) {
        display: flex;
        justify-content: center;
    }
`;
