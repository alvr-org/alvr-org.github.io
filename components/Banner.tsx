import { cx } from "@emotion/css"
import { ReactNode } from "react"

type typeProps = {
    warn: string;
    error: string;
    success: string;
    info: string;
    none: string;
};

let types: typeProps = {
    warn: 'from-yellow-400 to-yellow-600',
    error: 'from-red-500 to-yellow-800',
    success: 'from-green-400 to-green-600',
    info: 'from-blue-500 to-blue-700',
    none: ' '
}
export interface BannerProps {
    children: ReactNode;
    className?: string;
    type?: 'warn'|'error'|'success'|'info'|'none';
}

export const Banner = ({ children, className, type }: BannerProps) => {
    return <div
        className={cx(`text-center py-2 p-5 bg-gradient-to-br ${type != null ? types[type] || types.info : types.info} rounded-2xl text-white font-medium text-lg shadow-lg md:mx-20 lg:mx-36`, className)}
    >{children}</div>
}