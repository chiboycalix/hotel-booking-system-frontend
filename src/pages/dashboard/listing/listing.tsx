import React from 'react'
import EditIcon from '../../../assets/images/edit-icon.svg'
import DeleteIcon from '../../../assets/images/delete-icon.svg'
import { Button } from '../../../components'
import { IListing } from '../../../interface/listing'

interface IListingCardProps {
  listing: IListing;
  handleEditListing: (listing: IListing) => void
}

const ListingCard = ({ listing, handleEditListing }: IListingCardProps) => {
  return (
    <div className='flex shadow-listing-card p-4 rounded border hover:border-primary-color cursor-pointer mb-10'>
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
          <p className='text-3xl text-primary-color font-bold'>${listing.roomPrice} <span className='text-sm text-black'>/ Night</span></p>
        </div>
      </div>
      <div className='basis-2/12 flex flex-col justify-between items-end py-4'>
        <div className='flex gap-4'>
          <div className='flex gap-2 cursor-pointer' onClick={() => handleEditListing(listing)}>
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
  )
}

export default ListingCard