interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export function AccordionItem({ title, children, isOpen = false, onToggle }: AccordionItemProps) {
    return (
        <div className="accordion-item">
            <button 
                className="accordion-header" 
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="accordion-title">{title}</span>
                <div className={`accordion-arrow ${isOpen ? 'open' : ''}`}>
                    <img src="/arrow-white.svg" alt="expand" />
                </div>
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    );
} 