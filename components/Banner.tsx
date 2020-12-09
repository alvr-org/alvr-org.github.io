import { cx } from "@emotion/css"
import { ReactNode } from "react"

export interface BannerProps {
    children: ReactNode;
    className?: string;
}

export const Banner = ({ children, className }: BannerProps) => {
    return <div
        className={cx("text-center py-2 p-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white font-medium text-lg shadow-lg fixed left-1/2 transform -translate-x-1/2 md:whitespace-nowrap", className)}
    >{children}</div>
}