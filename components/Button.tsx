import { cx } from "@emotion/css"
import { ReactNode } from "react"

export interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export const Button = ({children, className}: ButtonProps) => {
    return <button
        className={cx("px-4 py-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white font-medium text-lg", className)}
    >{children}</button>
}