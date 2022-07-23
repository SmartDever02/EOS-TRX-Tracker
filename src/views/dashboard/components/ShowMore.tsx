import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setChangeStatus } from '../../../redux/slices/filterSlice';

import {
  addSkip,
  setEmpty,
  setPendingStatus,
  setResultData,
} from '../../../redux/slices/historySlice';
import { RootState } from '../../../redux/store';
import { makeQuery } from '../../../utils/helper';

const ShowMoreButton = () => {
  const dispatch = useDispatch();

  const account = useSelector((state: RootState) => state.filter.account);
  const startDate = useSelector((state: RootState) => state.filter.startDate);
  const endDate = useSelector((state: RootState) => state.filter.endDate);
  const unit = useSelector((state: RootState) => state.filter.unit);
  const history = useSelector((state: RootState) => state.history.data);
  const filterChanged = useSelector((state: RootState) => state.filter.changed);

  const fetchData = async () => {
    if (!account) {
      alert('Account form need to be filled.');
      return;
    }

    filterChanged && dispatch(setEmpty());
    dispatch(setPendingStatus(true));

    var query = makeQuery(
      account,
      startDate,
      endDate,
      unit,
      filterChanged ? 0 : history.length * 10
    );

    const result = await axios.get(query);

    dispatch(setResultData(result.data.actions));
    dispatch(setChangeStatus());
    dispatch(addSkip());
  };

  return (
    <button
      onClick={fetchData}
      className='outline-none mt-10 mb-20 text-gray-300 bg-[#151517] hover:bg-[#131315] transition-all duration-150 w-fit px-20 py-3'
    >
      Show More
    </button>
  );
};

export default ShowMoreButton;
