import type { ReactNode } from "react";
import './style.css'

export default function Paper ({children}: {children: ReactNode}) {
    return (
        <div className="paper-container">
            {
                children
            }
        </div>
    )
}