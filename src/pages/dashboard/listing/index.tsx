import React from 'react'
import ListViewIcon from '../../../assets/images/row-view-icon-colored.svg'
import GridViewIcon from '../../../assets/images/grid-view-icon.svg'
import PlusIcon from '../../../assets/images/plus-icon.svg'
import { Button } from '../../../components'
import { IUseListingMutation, getAllListings } from '../../../api/listing'
import { useMutation } from '@tanstack/react-query'
import { ROUTES } from '../../../constants/routes'
import { useNavigate } from 'react-router-dom'
import { IListing } from '../../../interface/listing'
import ListingCard from './listing'

const Listing = () => {
  const navigate = useNavigate()
  const [listings, setListings] = React.useState<IListing[]>([])
  const { mutate, isLoading, isError }: IUseListingMutation = useMutation({
    mutationFn: getAllListings, onSuccess({ data }) {
      setListings(data.data.listings)
    }
  });

  React.useEffect(() => {
    mutate({})
  }, [mutate])

  const handleEditListing = (listing: IListing) => {
    console.log(listing, "listing")
    navigate(`${ROUTES.UPDATE_LISTING}`, {
      state: {
        listing: listing
      }
    })
  }

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
        { !isLoading && !isError && listings?.map((listing: IListing) => {
          return  <ListingCard key={listing.roomImage} listing={listing}  handleEditListing={handleEditListing} />
        })}
      </div>
    </div>
  )
}

export default Listing