import { motion, Reorder } from "framer-motion";
import styled from "styled-components";

export const TodoBodyEl = styled.div`
`;

export const TodoUl = styled(Reorder.Group)`
`;

export const EmptyList = styled(motion.div)`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);

    overflow: hidden;
    border-bottom: 1px solid var(--color-line);

    @media(max-width:425px) {
        font-size: var(--fs-bs);
        line-height: var(--lh-bs);
    }
`;

export const EmptyContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 54px 24px ;

    @media(max-width:425px) {
        padding: 44px 20px ;
    }
`;