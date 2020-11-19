import styled from 'styled-components'

export const CategoryContainer = styled.div`
    display: flex;
`

const fillCategoryBox = category => {
    switch (parseInt(category)) {
        case 1:
            return 'var(--category-specific)'
        case 2:
            return 'var(--category-general)'
        case 3:
            return 'var(--category-nonspecific)'
    }
}

export const CategoryBox = styled.div`
    width: 1rem;
    height: 1rem;
    background: ${({ categoryColor }) => fillCategoryBox(categoryColor)};
    margin-top: .2rem;
    margin-right: .3rem;
`

export const CategoryText = styled.p`
    font-size: 1.4rem;
    color: var(--secondary-p);
`