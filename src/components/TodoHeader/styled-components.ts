import { motion } from "framer-motion";
import styled from "styled-components";

export const TodoHeaderEl = styled.div`
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
        margin-bottom: 40px;
    }

    @media(max-width:425px) {
        min-height: 20px;
    }
`;

export const Title = styled.h1`
    align-self: flex-start;

    font-size: var(--fs-hl);
    line-height: var(--lh-hl);
    font-weight: var(--fw-bold);
    color: var(--title);
    letter-spacing: 15px;
`;

export const ThemeButton = styled.button`
`;

export const SunIcon = styled(motion.img)`
    @media(max-width:425px) {
        width: 20px;
        height: 20px;
    }
`;

export const MoonIcon = styled(motion.img)`
    @media(max-width:425px) {
        width: 20px;
        height: 20px;
    }
`;

export const TitleIcon = styled.img`
`;

