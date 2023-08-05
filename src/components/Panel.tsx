import classNames from "classnames"
import { FC, ReactNode } from "react"

interface PanelProps {
    children: ReactNode,
    className: string
}


const Panel: FC<PanelProps> = ({ children, className }) => {

    const finallClassNames = classNames('border p-3 w-full', className)

    return (
        <div className={finallClassNames}>
            {children}
        </div>
    )
}

export default Panel