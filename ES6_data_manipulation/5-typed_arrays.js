export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const arrBuff = new ArrayBuffer(length);
  const view = new DataView(arrBuff);
  view.setInt8(position, value);
  return view;
}
