import { isPending } from '@reduxjs/toolkit';
import axios from 'axios';
import { useState } from 'react';
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
  const [disabled, setDisabled] = useState<boolean>(false);
  const dispatch = useDispatch();

  const account = useSelector((state: RootState) => state.filter.account);
  const startDate = useSelector((state: RootState) => state.filter.startDate);
  const endDate = useSelector((state: RootState) => state.filter.endDate);
  const unit = useSelector((state: RootState) => state.filter.unit);
  const history = useSelector((state: RootState) => state.history);
  const filterChanged = useSelector((state: RootState) => state.filter.changed);

  const fetchData = async () => {
    if (!account) {
      alert('Account form need to be filled.');
      return;
    }

    filterChanged && dispatch(setEmpty());
    dispatch(setPendingStatus(true));
    setDisabled(true);

    var query = makeQuery(
      account,
      startDate,
      endDate,
      unit,
      filterChanged ? 0 : history.data.length * 10
    );
    try {
      const result = await axios.get(query);

      dispatch(setResultData(result.data.actions));
      dispatch(setChangeStatus());
      dispatch(addSkip());
    } catch (e) {
      dispatch(setPendingStatus(false));
    }
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <button
      onClick={fetchData}
      className={`outline-none mb-20 ${
        history.isPending && history.skip !== 0 ? '' : 'mt-10'
      } text-gray-300 bg-[#151517] ${
        !disabled ? 'hover:bg-[#131315]' : ''
      } transition-all duration-150 w-fit px-20 py-3`}
      disabled={disabled}
    >
      {history.data.length === 0 || filterChanged ? 'Get Data' : 'Show More'}
    </button>
  );
};

export default ShowMoreButton;
