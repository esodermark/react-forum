import React, { useEffect } from 'react'

import {
    CategoryText,
    CategoryContainer,
    CategoryBox
} from './elements/CategoryElements'

const Category = ({ category }) => {
    const renderCategory = (categoryType) => {
        switch (categoryType) {
            case 1:
                return 'Specific'
            case 2:
                return 'General'
            case 3:
                return 'Nonspecific'
        }
    }

    useEffect(() => {
        renderCategory(category)
    }, [])

    return (
        <CategoryContainer>
            {category && (
                <>
                    <CategoryBox categoryColor={category} />
                    <CategoryText>{renderCategory(category)}</CategoryText>
                </>
            )}
        </CategoryContainer>
    )
}

export default Category
