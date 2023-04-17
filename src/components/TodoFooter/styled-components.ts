import styled from "styled-components";

export const TodoFooterEl = styled.div`
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    color: var(--color-text-secondary);

    padding: 16px 24px 20px 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 425px) {
        font-size: var(--fs-bmm);
        line-height: var(--lh-bmm);

        padding: 16px 20px 22px;

        margin-bottom: 16px;
    }
`;

export const ItemsLeft = styled.div`
    
`;

export const SortVisibility = styled.div`
    @media(max-width: 425px) {
        display: none;
    }
`;

export const Clear = styled.button`
    transition: color 0.15s ease 0s;

    &:hover {
        color: var(--color-text-hover)
    }

    &:disabled {
        cursor: default;

        &:hover {
        color: inherit
        }
    }
`;




