import React from 'react'
import TopQuickFilters from '../common/TopQuickFilters'
import Filters from '../common/Filters'
import AvailableFilters from '../common/AvailableFilters'
import FilterCart from '../common/FilterCart'

const Filtering = () => {
  return (
    <div className=" mt-52  flex flex-col gap-16">
      <div className='flex gap-4'>
        <div className='w-[23.5%]'>
          <Filters />
        </div>
        <div className='w-full  '>
          <TopQuickFilters />
          <AvailableFilters />
          <FilterCart/>
        </div>
      </div>
    </div>
  )
}

export default Filtering
