export interface IGuest {
  id: number;
  name: string;
  dateOrder: number;
  room: number;
  checkIn: string;
  checkOut: string;
  status: "active" | "inactive";
}
