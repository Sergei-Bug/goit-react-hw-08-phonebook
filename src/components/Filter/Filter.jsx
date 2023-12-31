import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectStatusFilter } from 'redux/contacts/selectors';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={useSelector(selectStatusFilter)}
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </>
  );
}
