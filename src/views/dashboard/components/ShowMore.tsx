import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setResultData } from '../../../redux/slices/historySlice';
import { RootState } from '../../../redux/store';
import { makeQuery } from '../../../utils/helper';

const ShowMoreButton = () => {
  const dispatch = useDispatch();

  const account = useSelector((state: RootState) => state.filter.account);
  const startDate = useSelector((state: RootState) => state.filter.startDate);
  const endDate = useSelector((state: RootState) => state.filter.endDate);
  const unit = useSelector((state: RootState) => state.filter.unit);

  const fetchData = async () => {
    if (!account) {
      alert('Account form need to be filled.');
      return;
    }

    var query = makeQuery(account, startDate, endDate, unit);
    alert(query);

    const result = await axios.get(query);
    console.log(result.data);
    dispatch(setResultData(result.data.actions));
  };

  return (
    <button
      onClick={fetchData}
      className='outline-none mt-5 text-gray-300 bg-[#151517] hover:bg-[#131315] transition-all duration-150 w-fit px-20 py-3'
    >
      Show More
    </button>
  );
};

export default ShowMoreButton;
