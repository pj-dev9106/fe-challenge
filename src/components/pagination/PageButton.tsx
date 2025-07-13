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
    pages: number
}

export default function PageButton ({page, currentPage, type, pages}: PageButtonPropTypes) {
    return (

        type === PageButtonType.PAGE ? page !== '...' ? <button className="pagination-page-button" style={{backgroundColor: +page === currentPage ? '#5762D5' : 'transparent'}}>
            {page}
        </button>
        : <div style={{color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>...</div>
        : <button 
            className="pagination-handler-button" 
            disabled={(currentPage === 1 && type === PageButtonType.BACKWARD) || (currentPage === pages && type === PageButtonType.FORWARD)}
        >
            {
                type === PageButtonType.FORWARD ? '>' : '<'
            }
        </button>
    )
}