import { useEffect, useState } from 'react';
import PageButton from './PageButton';
import './style.css';

interface PaginationPropTypes {
    pages: number
    currentPagge: number
    setCurrentPage: (page: number) => void
    handleNext: () => void
    handlePrev: () => void
}

export default function Pagination({ pages, currentPagge, setCurrentPage, handleNext, handlePrev }: PaginationPropTypes) {

    const [pageArray, setPageArray] = useState<string[]>([])

    useEffect(() => {
        if (pages <= 8) {
            setPageArray(Array.from({ length: pages }, (_, i) => (i + 1).toString()));
        } else {
            if (currentPagge <= 4) {
                setPageArray(['1', '2', '3', '4', '5', '6', '7', '8', '...', `${pages}`])
            }

            if (currentPagge > 4 && currentPagge <= pages - 4) {
                setPageArray(['1', '...', `${currentPagge - 2}`, `${currentPagge - 1}`, `${currentPagge}`, `${currentPagge + 1}`, `${currentPagge + 2}`, '...', `${pages}`])
            }

            if (currentPagge > pages - 4) {
                setPageArray(['1', '...', `${pages - 7}`, `${pages - 6}`, `${pages - 5}`, `${pages - 4}`, `${pages - 3}`, `${pages - 2}`, `${pages - 1}`, `${pages}`])
            }
        }
    }, [currentPagge, pages]);

    return (
        <div className='pagination-container'>
            <PageButton 
                type='BACKWARD' 
                currentPage={currentPagge} 
                page={'0'} 
                key={-1} 
                pages={pages}
                onPrev={handlePrev}
            />
            {
                pageArray.map((item, index) => {
                    return (
                        <PageButton 
                            type='PAGE' 
                            currentPage={currentPagge} 
                            page={item} 
                            key={index} 
                            pages={pages}
                            onPageClick={setCurrentPage}
                        />
                    )
                })
            }
            <PageButton 
                type='FORWARD' 
                currentPage={currentPagge} 
                page={'0'} 
                key={pages + 1} 
                pages={pages}
                onNext={handleNext}
            />
        </div>
    )

}