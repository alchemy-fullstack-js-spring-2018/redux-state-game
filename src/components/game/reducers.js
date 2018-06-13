export const IMAGES_LOAD = 'IMAGES_LOAD';
export const CARD_SELECTED = 'CARD_SELECTED';

export const getImages = state => state.images;

export function images(
  state = null,
  { type, payload }) {

  switch (type) {
    case IMAGES_LOAD:
      return payload;
    default:
      return state;
  }
}

export function card(
  state = null,
  { type, payload }) {

  switch (type) {
    case CARD_SELECTED:
      return payload;
    default:
      return state;
  }
}
