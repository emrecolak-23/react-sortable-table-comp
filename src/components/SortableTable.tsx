import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import useSort from '../hooks/use-sort'
import Table from './Table'

const SortableTable = (props: any) => {


    const { config, allData, offset,  itemsPerpage} = props

    const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(allData, config)
    const pageData = sortedData.slice(offset, offset + itemsPerpage)

    const updatedConfig = config.map((column: any) => {
        if (!column.sortValue) {
            return column
        }

        return {
            ...column,
            header: () => {
                return (
                    <th
                        className='cursor-pointer hover:bg-gray-100 font-sans text-sm font-bold w-1/12'
                        onClick={() => setSortColumn(column.label)}
                    >
                        <div className='flex items-center'>
                            {getIcons(column.label, sortBy, sortOrder)}
                            {column.label}
                        </div>
                    </th>
                )
            }
        }
    })


    const getIcons = (label: string, sortBy: string | null, sortOrder: string | null) => {
        if (label !== sortBy) {
            return (
                <div>
                    <BiSolidUpArrow className="h-2 w-2" /> <BiSolidDownArrow className="h-2 w-2" />
                </div>
            )
        }

        if (sortOrder === null) {
            return (
                <div>
                    <BiSolidUpArrow className="h-2 w-2" /> <BiSolidDownArrow className="h-2 w-2" />
                </div>
            )
        } else if (sortOrder === 'asc') {

            return (
                <div>
                    <BiSolidUpArrow className="h-2 w-2" />
                </div>
            )

        } else if (sortOrder === 'desc') {
            return (
                <div>
                    <BiSolidDownArrow className="h-2 w-2" />
                </div>
            )
        }
    }

    return (
        <div className='w-full'>
            <Table {...props} data={pageData} config={updatedConfig} />
        </div>
    )

}


export default SortableTable