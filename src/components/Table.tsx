import { Fragment } from "react"

const Table = (props:any) => {

    const renderedHeaders = props.config.map((column: any) => {
        if(column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }

        return <th className="font-sans text-sm font-bold w-1/12" key={column.label}>{column.label}</th>
    })

    const renderedRows = props.data.map((rowData: any) => {
        const renderedCell = props.config.map((column: any) => {
            return (
                <td className="p-3 m-2 text-sm" key={column.label}>
                    {column.render(rowData)}
                </td>
            )
        })

        return (
            <tr className="border-b-8 border-b-[#f0f2fc]" key={props.keyFn(rowData)}>
                {renderedCell}
            </tr>
        )
    })

    return (
        <div>
            <table className="table-auto">
                <thead className="mb-4">
                    <tr>
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody className="h-full bg-white rounded-md">
                    {renderedRows}
                </tbody>
            </table>
        </div>
    )

}

export default Table