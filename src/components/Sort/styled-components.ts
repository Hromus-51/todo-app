import styled from "styled-components";

export const SortEl = styled.div`
    display: flex;
    column-gap: 18px;
    align-items: center;
`;

export const SortItem = styled.button<{
    active: string,
    hover: string,
}>`
    &:first-letter {
        text-transform: uppercase;
    }
    color: var(${props => props.active});
    font-weight: var(--fw-bold);

    cursor: pointer;
    transition: color 0.15s ease 0s;

    &:hover {
        color: var(${props => props.hover});
    }

    &:disabled {
        color: inherit;
        cursor: default;

        &:hover {
        color: inherit;
        }
    }

    @media(max-width: 425px) {
        font-size: var(--fs-bs);
        line-height: var(--lh-bs);
    }
`;
