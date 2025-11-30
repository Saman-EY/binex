import React from 'react'
import AddSubscription from './AddSubscription'
import ContinueShopping from './ContinueShopping'

function AddBox() {
  return (
    <>

      <div className="lg:bg-head-table-color rounded-xl lg:px-8 px-0 lg:py-5 py-0  gap-y-2 flex flex-col lg:shadow-xl">
        <AddSubscription />
        <AddSubscription />
        <AddSubscription />
        <div className="">
          <ContinueShopping />
        </div>
      </div>

    </>
  )
}

export default AddBox