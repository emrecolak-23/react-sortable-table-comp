import Panel from "./components/Panel"
import incoss from './assets/incoss.png'
import SortableTable from "./components/SortableTable"
import Button from "./components/Button"
import { BsDownload } from 'react-icons/bs'
import ReactPaginate from 'react-paginate'
import { data } from './utils/data'
import { useState } from "react"

const itemsPerpage = 6

const App = () => {

  const [page, setPage] = useState(1)

  const handlePageClick = ({selected}:any) => {
    setPage(selected)
  }

  const offset = page * itemsPerpage
  const pageData = data.slice(offset, offset + itemsPerpage)
  const pageCount = Math.ceil(data.length / itemsPerpage)

  const config = [
    {
      label: 'Branche',
      render: (table: any) => table.sector,
      sortValue: (table: any) => table.sector,
    },
    {
      label: 'Bildungsstand',
      render: (table: any) => table.educationStatus,
      sortValue: (table: any) => table.educationStatus,
    },
    {
      label: 'Fremdsprachen',
      render: (table: any) => table.foreignLanguage,
      sortValue: (table: any) => table.foreignLanguage,
    },
    {
      label: 'Führerschein',
      render: (table: any) => table.dirivingLicence,
      sortValue: (table: any) => table.dirivingLicence,
    },
    {
      label: 'Geburtsdatum',
      render: (table: any) => table.birthDate.substring(0, 10),
      sortValue: (table: any) => table.birthDate,
    },
    {
      label: 'Geschlect',
      render: (table: any) => table.gender,
      sortValue: (table: any) => table.gender,
    },
    {
      label: 'Familienstand',
      render: (table: any) => table.maritalStatus,
      sortValue: (table: any) => table.maritalStatus,
    },
    {
      label: 'Bevorzugte Statd',
      render: (table: any) => table.workingLocation,
      sortValue: (table: any) => table.workingLocation,
    },
    {
      label: 'Schengen-Visum',
      render: (table: any) => table.schengen,
      sortValue: (table: any) => table.schengen,
    },
    {
      label: 'Behinderungszustand',
      render: (table: any) => table.enabled,
      sortValue: (table: any) => table.enabled,
    },
    {
      label: 'Herunterladen',
      render: () => <div className=""><Button download={true}><BsDownload className="text-white" /></Button></div>,
    },
  ]

  const keyFn = (key: any) => {
    return key
  }

  return <div className="h-screen bg-white px-10 py-10">
    <div className="h-full flex-col items-center justify-between">
      <img className="h-12 w-62 mb-12" src={incoss} />
      <Panel className="w-full h-max bg-[#f0f2fc] rounded-2xl">
        <SortableTable data={pageData} config={config} keyFn={keyFn} />
        <div className="w-full flex items-center justify-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex"
            pageClassName="w-10 h-10 flex items-center justify-center mx-1 rounded-full  text-white bg-[#4641dc]"
            nextClassName="p-2"
            previousClassName="p-2"
            breakClassName="p-2"
            activeClassName="w-10 h-10 items-center justify-center mx-1 text-white bg-[#827eea]"
            previousLabel="<"
            pageCount={pageCount}
            renderOnZeroPageCount={undefined}
            forcePage={1}
          />
        </div>
      </Panel>
    </div>
  </div>

}

export default App