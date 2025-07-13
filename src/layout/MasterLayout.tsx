import type { ReactNode } from "react";
import Header from "../components/header/Header";
import './style.css'

export default function MasterLayout({ children }: { children: ReactNode }) {
    return (
        <div className="master-layout-container">
            <div className="master-layout-header">
                <Header isScrolling></Header>
            </div>
            <div className="master-layout-content master-content-container">
                {children}
            </div>
        </div>
    )
}