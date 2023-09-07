import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const aRoom = new ClassRoom(19);
  const bRoom = new ClassRoom(20);
  const cRoom = new ClassRoom(34);

  return [aRoom, bRoom, cRoom];
}
