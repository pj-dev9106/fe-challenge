import { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import './style.css';

interface AccordionProps {
    items: {
        title: string;
        links: Array<{
            title: string;
            link: string;
        }>;
    }[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openItems.includes(index)}
                    onToggle={() => toggleItem(index)}
                >
                    <div className="accordion-links">
                        {item.links.map((link, linkIndex) => (
                            <div key={linkIndex} className="accordion-link">
                                <span className="link-title">{link.title}</span>
                            </div>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </div>
    );
} 