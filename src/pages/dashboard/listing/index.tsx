import React from 'react'
import ListViewIcon from '../../../assets/images/row-view-icon-colored.svg'
import GridViewIcon from '../../../assets/images/grid-view-icon.svg'
import PlusIcon from '../../../assets/images/plus-icon.svg'
import EditIcon from '../../../assets/images/edit-icon.svg'
import DeleteIcon from '../../../assets/images/delete-icon.svg'

import { Button } from '../../../components'
import { IUseListingMutation, getAllListings } from '../../../api/listing'
import { useMutation } from '@tanstack/react-query'

const Listing = () => {
  const [listings, setListings] = React.useState([])
  const { mutate, isLoading, isError }: IUseListingMutation = useMutation({
    mutationFn: getAllListings, onSuccess({ data }) {
      setListings(data.data.listings)
    }
  });

  React.useEffect(() => {
    mutate({})
  }, [mutate])
  console.log(listings)

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex gap-4 basis-10/12'>
          <img src={ListViewIcon} alt={ListViewIcon} className='w-5' />
          <img src={GridViewIcon} alt={GridViewIcon} className='w-5' />
        </div>
        <div className='basis-2/12'>
          <Button onClick={() => null} variant="primary" Icon={PlusIcon} hasIconPrefix>
            Add new Room
          </Button>
        </div>
      </div>
      <div className='w-full mt-8'>
        {/* listing card */}
        { !isLoading && !isError && listings?.map((listing: any) => {
          return  <div className='flex shadow-listing-card p-4 rounded border border-primary-color cursor-pointer mb-10'>
          <div className='flex gap-4 basis-10/12'>
            <div className='w-96 bg-primary-color h-52 rounded'>
              <img
                src={listing.roomImage}
                className="block w-96 h-52 object-cover rounded"
                alt="Listing pic"
              />
            </div>
            <div className='flex flex-col justify-between py-4'>
              <div>
                <h1 className='text-black font-bold text-xl mb-4'>{listing.roomName}</h1>
                <p className='text-secondary text-sm'>{listing.location}</p>
              </div>

              <p className='text-3xl text-primary-color font-bold'>${listing.roomPrice} <span className='text-sm text-black'>/ Day</span></p>
            </div>
          </div>
          <div className='basis-2/12 flex flex-col justify-between items-end py-4'>
            <div className='flex gap-4'>
              <div className='flex gap-2 cursor-pointer'>
                <img src={EditIcon} alt={EditIcon} className='w-4' />
                <p className='text-success-color text-sm'>Edit</p>
              </div>
              <div className='flex gap-2 cursor-pointer'>
                <img src={DeleteIcon} alt={DeleteIcon} className='w-3' />
                <p className='text-sm text-red-600'>Delete</p>
              </div>
            </div>
            <div className='w-40'>
              <Button onClick={() => null} variant="primary">
                Book now
              </Button>
            </div>
          </div>
        </div>
        })}
       
        {/* listing card ends */}
      </div>
    </div>
  )
}

export default Listing