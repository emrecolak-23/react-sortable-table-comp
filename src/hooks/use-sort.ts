import { useState } from "react";

const useSort = (data:any, config:any) => {

    const [sortOrder, setSortOrder] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState<string | null>(null)

    const setSortColumn = (label: string) => {
        if(sortBy && label !== sortBy) {
            setSortBy(label)
            setSortOrder('asc')
            return
        }


        if(sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    let sortedData = data

    if(sortBy && sortOrder) {
        const { sortValue } = config.find((column: any) => {
            return column.label === sortBy
        })

        sortedData = [...data].sort((a:any,b:any) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if(typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            } else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }


    return {
        sortBy,
        sortOrder,
        setSortColumn,
        sortedData
    }
}

export default useSort