import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startAddornmentIcon?: ReactNode
    endAddornmentIcon?: ReactNode
    content?: string
    sx?: React.CSSProperties
    classes?: string;
}

export default function IconButton ({startAddornmentIcon=<></>, content="", endAddornmentIcon=<></>, sx={}, classes = ""}: IconButtonProps) {
    return (
        <div className={`icon-button ${classes}`} style={sx}>
            {startAddornmentIcon}
            <span>{content}</span>
            {endAddornmentIcon}
        </div>
    )
}