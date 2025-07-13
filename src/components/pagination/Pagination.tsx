import { useEffect, useState } from 'react';
import PageButton from './PageButton';
import './style.css';

interface PaginationPropTypes {
    pages: number
    currentPagge: number
    setCurrentPage: () => void
    handleNext: () => void
    handlePrev: () => void
}

export default function Pagination({ pages, currentPagge, setCurrentPage, handleNext, handlePrev }: PaginationPropTypes) {

    const [pageArray, setPageArray] = useState<string[]>([])

    useEffect(() => {
        console.log('currentPage: ', currentPagge, pages)

        if (pages < 8) {
            setPageArray(['1', '2', '3', '4', '5', '6', '7'])
        } else {
            if (currentPagge <= 4) {
                setPageArray(['1', '2', '3', '4', '...', `${pages}`])
            }

            if (currentPagge > 4 && currentPagge <= pages - 3) {
                setPageArray(['1', '...', `${currentPagge - 1}`, `${currentPagge}`, `${currentPagge + 1}`, '...', `${pages}`])
            }

            if (currentPagge > pages - 3) {
                setPageArray(['1', '...', `${pages - 2}`, `${pages - 1}`, `${pages}`])
            }
        }
    }, [currentPagge]);

    return (
        <div className='pagination-container'>
            <PageButton type='BACKWARD' currentPage={currentPagge} page={'0'} key={-1} pages={pages} />
            {
                pageArray.map((item, index) => {
                    return (
                        <PageButton type='PAGE' currentPage={currentPagge} page={item} key={index} pages={pages} />
                    )
                })
            }
            <PageButton type='FORWARD' currentPage={currentPagge} page={'0'} key={pages + 1} pages={pages} />
        </div>
    )

}