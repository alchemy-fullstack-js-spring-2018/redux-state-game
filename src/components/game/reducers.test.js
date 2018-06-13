// describe('forcing travis to pass, not a real test', () => {
//   it('is a forced way to pass travis', () => {
//     const first = 1;
//     expect(first).toBe(1);
//   });
// });
import { IMAGES_LOAD, images } from './reducers';

const images1 = [];

describe('image loader', () => {

  it('loads arrays of images', () => {
    const state = images(images1, { type:IMAGES_LOAD, payload:[] });
    expect(state).toEqual([]);
  });

});