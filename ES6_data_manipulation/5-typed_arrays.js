export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw('Position outside range');
  }
  let arrBuff = new ArrayBuffer(length);
  let view = new DataView(arrBuff);
  view.setInt8(position, value);
  return view;
}
