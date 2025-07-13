const PageButtonType = {
    PAGE: 'PAGE',
    FORWARD: 'FORWARD',
    BACKWARD: 'BACKWARD'
} as const;

type PageButtonType = typeof PageButtonType[keyof typeof PageButtonType];

interface PageButtonPropTypes {
    page: string
    currentPage: number,
    type: PageButtonType,
    pages: number,
    onPageClick?: (page: number) => void,
    onNext?: () => void,
    onPrev?: () => void
}

export default function PageButton ({page, currentPage, type, pages, onPageClick, onNext, onPrev}: PageButtonPropTypes) {
    const handlePageClick = () => {
        if (type === PageButtonType.PAGE && page !== '...' && onPageClick) {
            onPageClick(parseInt(page))
        } else if (type === PageButtonType.FORWARD && onNext) {
            onNext()
        } else if (type === PageButtonType.BACKWARD && onPrev) {
            onPrev()
        }
    }

    return (
        type === PageButtonType.PAGE ? page !== '...' ? 
            <button 
                className="pagination-page-button" 
                style={{backgroundColor: +page === currentPage ? '#5762D5' : 'transparent'}}
                onClick={handlePageClick}
            >
                {page}
            </button>
        : <div style={{color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>...</div>
        : <button 
            className="pagination-handler-button" 
            disabled={(currentPage === 1 && type === PageButtonType.BACKWARD) || (currentPage === pages && type === PageButtonType.FORWARD)}
            onClick={handlePageClick}
        >
            {
                type === PageButtonType.FORWARD ? '>' : '<'
            }
        </button>
    )
}