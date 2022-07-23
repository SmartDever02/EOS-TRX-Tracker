import { useDispatch } from 'react-redux';
import {
  setAccount,
  setEndDate,
  setStartDate,
  setUnit,
} from '../../../redux/slices/filterSlice';

const FilterForm = () => {
  const dispatch = useDispatch();

  const inputChange = (e: any) => {
    const inputName = e.target.name;
    const value = e.target.value;
    switch (inputName) {
      case 'account':
        dispatch(setAccount(value));
        return;
      case 'startDate':
        dispatch(setStartDate(value));
        return;
      case 'endDate':
        dispatch(setEndDate(value));
        return;
      case 'unit':
        dispatch(setUnit(value));
        return;
    }
  };

  return (
    <div className='pt-10 flex flex-wrap px-20 gap-10 justify-center'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='account' className='uppercase text-gray-400 pl-2'>
          EOS ACCOUNT
        </label>
        <input
          id='account'
          name='account'
          className='p-2 w-[200px] bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416] text-gray-300 placeholder-slate-500'
          placeholder='tsui.mlt'
          onChange={inputChange}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='startdate' className='uppercase text-gray-400 pl-2'>
          Beginning Date
        </label>
        <input
          type='date'
          name='startDate'
          id='startdate'
          className='p-2 text-gray-300 w-[200px] bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416]'
          placeholder='02/02/2022'
          onChange={inputChange}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='endDate' className='uppercase text-gray-400 pl-2'>
          End Date
        </label>
        <input
          type='date'
          id='endDate'
          name='endDate'
          className='p-2 w-[200px] text-gray-300 bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416]'
          placeholder='04/02/2022'
          onChange={inputChange}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='unit' className='uppercase text-gray-400 pl-2'>
          Money Unit
        </label>
        <input
          id='unit'
          name='unit'
          className='p-2 w-[200px] bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416] text-gray-300 placeholder-slate-500'
          placeholder='Ex. "USD"'
          onChange={inputChange}
        />
      </div>
      <button className='h-12 px-12 mt-8 outline-none bg-[#257e47] hover:bg-[#2ba75b] transition-all duration-150 text-white font-bold'>
        GET DATA
      </button>
    </div>
  );
};

export default FilterForm;
