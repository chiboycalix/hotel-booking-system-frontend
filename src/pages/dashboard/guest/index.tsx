import React from 'react';
import Table from '../../../components/table'
import getUsersRows from './getUserRows';
import { guestHelpers } from './helpers';



const Guest = () => {
  const [selectedCheckBox, setSelectedCheckBox] = React.useState(0)

  const Rows = getUsersRows({
    users: guestHelpers.users,
    onRowClick: (e: React.ChangeEvent<HTMLInputElement>) => handleChecked(e),
    isChecked: selectedCheckBox
  });

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheckBox(parseInt(e.target.value))
  }

  return (
    <div className='bg-white p-4'>
      <Table headers={guestHelpers.usersHeaders} rows={Rows} hasAction={false} hasCheckBox={true} />
    </div>
  )
}

export default Guest;