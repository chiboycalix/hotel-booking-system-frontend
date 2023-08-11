import React from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Input } from '../../../components';

const UpdateListing = () => {
  const location = useLocation();
  console.log(location.state.listing, "listing")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='w-full px-10 h-fit pb-12'>
      <p className='mt-5 font-bold'>Edit Listing:</p>
      <form className='w-full flex flex-col mt-14' onSubmit={handleFormSubmit}>
        <div className='w-full flex justify-center items-center mb-10'>
          <img src={location.state.listing.roomImage} alt="" className='w-1/2 h-64 rounded'/>
        </div>
        <div className='flex w-full gap-4 mb-10'>
          <div className='basis-6/12'>
            <div className='mb-2'>
              <label htmlFor="roomName" className='text-sm font-bold'>Room Name:</label>
            </div>
            <Input onChange={() => null} type="text" placeHolder="hello" value={location.state.listing.roomName} id="" name=""/>
          </div>
          <div className='basis-6/12'>
            <div className='mb-2'>
             <label htmlFor="location" className='text-sm font-bold'>City:</label>
            </div>
            <Input onChange={() => null} type="text" placeHolder="hi" value={location.state.listing.location} id="" name=""/>
          </div>
        </div>

        <div className='flex w-full gap-4'>
          <div className='basis-6/12'>
            <div className='mb-2'>
              <label htmlFor="roomName" className='text-sm font-bold'>Bed Type:</label>
            </div>
            <Input onChange={() => null} type="text" placeHolder="hello" value={location.state.listing.roomBedType} id="" name=""/>
          </div>
          <div className='basis-6/12'>
            <div className='mb-2'>
             <label htmlFor="roomName" className='text-sm font-bold'>Price:</label>
            </div>
            <Input onChange={() => null} type="text" placeHolder="hi" value={`$${location.state.listing.roomPrice} / Night`} id="" name=""/>
          </div>
        </div>

      <div className='mt-14 w-40 flex justify-center items-center m-auto'>
        <Button onClick={() => null} variant='primary'>Save Details</Button>
      </div>
      </form>
    </div>
  )
}

export default UpdateListing