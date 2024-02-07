import React from 'react'
import Table from '../../../components/table'
import Avatar from '../../../assets/images/avatar.png'


const getUsersRows = ({ users, onRowClick }: any) => {
  return users.map((user: any, index: number) => {
    const userTableRecord = {
      ...user,
      name: (<div className='flex gap-1'>
        <div>
          <img src={Avatar} alt={Avatar} className='w-10 rounded-full' />
        </div>
        <div>
          <p>Igwe Chinonso</p>
          <p className='text-xs opacity-25'>#AB-23-2023</p>
        </div>
      </div>),
      dateOrder: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      room: (<div>
        <p>Standard</p>
        <p className='text-xs opacity-25'>Room 201</p>
      </div>),
      checkIn: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      checkOut: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      status: (<div>{user.status === 'active' ? <p className='text-success-color'>active</p> : <p className='text-secondary-color'>inactive</p>}</div>)
    }
    const { name, dateOrder, room, checkIn, checkOut, status } = userTableRecord;
    return {
      columns: [name, dateOrder, room, checkIn, checkOut, status],
      onRowClick: () => onRowClick(user),
      record: user,

    };
  });
};

const onRowClick = (user:any) => {
  console.log(user, 'userr')
}
const Rows = getUsersRows({
  users: [{ name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "active" },
  { name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "Inactive" },
  { name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "active" },
  { name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "Inactive" },
  { name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "active" },
  { name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "Inactive" },
  { name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "active" },
  { name: "chinonso", dateOrder: 30, room: 33, checkIn: "software enigneer", checkOut: "Go", status: "Inactive" }],
  onRowClick: onRowClick
});

const Guest = () => {
  return (
    <div className='bg-white p-4'>
      <Table headers={['Guest', 'Date Order', 'Room', 'Check In', 'Check Out', 'Status']} rows={Rows} hasAction={false} hasCheckBox={true} />
    </div>
  )
}

export default Guest