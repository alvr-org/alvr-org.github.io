import { cx } from "@emotion/css"
import { ReactNode } from "react"

interface CardProps {
    icon?: ReactNode
    label?: ReactNode
    children: ReactNode
    className?: string
}

export const Card = ({ icon, label, children, className }: CardProps) => {
    return (
        <div
            className={cx(
                "rounded-2xl text-white flex flex-col items-center space-y-4 p-8 bg-blue-500 shadow-lg",
                className,
            )}
        >
            {icon ? icon : null}
            {label ? (
                <h2 className="text-white font-bold text-4xl opacity-95 text-center">{label}</h2>
            ) : null}

            <div>{children}</div>
        </div>
    )
}
