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
import { fetchWithLooping } from '../../../utils/api';
import DownloadButton from './DownloadButton';

const INIT = 'INIT';
const LOADING = 'LOADING';
const FINISHED = 'FINISHED';

const ShowMoreButton = () => {
  const [status, setStatus] = useState<string>(INIT);
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const account = useSelector((state: RootState) => state.filter.account);
  const startDate = useSelector((state: RootState) => state.filter.startDate);
  const endDate = useSelector((state: RootState) => state.filter.endDate);
  const unit = useSelector((state: RootState) => state.filter.unit);
  const history = useSelector((state: RootState) => state.history);
  const filterChanged = useSelector((state: RootState) => state.filter.changed);

  const fetchData = async () => {
    if (!account || !startDate || !endDate) {
      alert('Account form need to be filled.');
      return;
    }

    filterChanged && dispatch(setEmpty());
    dispatch(setPendingStatus(true));
    localStorage.setItem('skip', '-1000');
    var skip = parseInt(localStorage.getItem('skip') ?? '-1000');

    setStatus(LOADING);
    while(true) {
      skip += 1000;
      localStorage.setItem('skip', skip.toString());
      let result = await fetchWithLooping(account, startDate, endDate, unit, skip);
      if (result.stop) {
        dispatch(setResultData(result.data));
        dispatch(setChangeStatus());
        break;
      } else {
        dispatch(setResultData(result.data));
        dispatch(setChangeStatus());
        dispatch(addSkip());
      }
    }
    dispatch(setPendingStatus(false));
    setStatus(FINISHED);
    setTimeout(() => {
      setModal(true);
    }, 800);
  };

  switch (status) {
    case INIT:
      return (
        <button
          onClick={fetchData}
          className={`outline-none mb-20 ${
            history.isPending && history.skip !== 0 ? '' : 'mt-10'
          } text-gray-300 bg-[#151517] transition-all duration-150 w-fit px-20 py-3`}
        >
          {history.data.length === 0 || filterChanged ? 'Get Data' : 'Show More'}
        </button>
      );
    case LOADING:
      return <></>;
    default:
      return (
        <div className='mt-10 mb-20'>
          <div className={`${modal ? 'visible z-10' : '-z-10 invisible'} transition-all duration-500n`}>
            <div className='fixed top-0 left-0 w-screen h-screen bg-black/25 backdrop-blur' />
            <div className='fixed w-2/3 lg:w-1/2 bg-black/80 py-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-xl'>
              <h2 className='text-white font-bold text-2xl w-full text-center pb-5'>ESO TRX TRACKER</h2>
              <p className='text-gray-200 px-20 text-center pb-10'>Historical transaction data is prepared for you. You can download it as XLSX format.</p> 
              <div className='px-10 flex justify-center'>
                <DownloadButton />
                <button onClick={() => setModal(false)} className='ml-20 text-white text-xl h-fit outline-none px-16 py-3 bg-[#161618]  hover:bg-[#141416] transition-all duration-150'>Dismiss</button>
              </div>
            </div>
          </div>
          <DownloadButton/>
          <button onClick={() => window.scrollTo(0, 0)} className='ml-20 text-white text-xl h-fit w-fit mr-20 outline-none px-16 py-3 bg-[#161618]  hover:bg-[#141416] transition-all duration-150'>Go Up</button>
        </div>
      );
  }
};

export default ShowMoreButton;
