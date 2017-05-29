/**
 * Created by sanglnv on 5/27/17.
 */
export const changeCurrency = (item) => {
  console.log('change currency', item);
  return {
    type: 'CHANGE',
    item
  }
};