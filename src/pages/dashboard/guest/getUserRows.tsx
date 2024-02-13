import Avatar from '../../../assets/images/avatar.png'
import { IGuest } from '../../../interface/user';

const getUsersRows = ({ users, onRowClick, isChecked }: any) => {
  return users.map((user: IGuest) => {
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
      onRowClick: (e:React.ChangeEvent<HTMLInputElement>) => onRowClick(e, user),
      record: user,
      isChecked: isChecked === user.id,
      value: user.id
    };
  });
};

export default getUsersRows