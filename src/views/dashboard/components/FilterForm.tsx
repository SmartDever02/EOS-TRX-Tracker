import axios from 'axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setResultData } from '../../../redux/slices/historySlice';

const makeQuery = (
  account: string | undefined,
  start: string | undefined,
  end: string | undefined,
  unit: string | undefined
): string => {
  var baseURI = 'https://eos.hyperion.eosrio.io/v2/history/get_actions';
  var noQuery = true;
  if (account) {
    baseURI += `?account=${account}`;
    noQuery = false;
  }
  if (start) {
    baseURI += noQuery ? '?' : '&';
    baseURI += 'after=' + new Date(start).toUTCString();
  }
  if (end) {
    baseURI += noQuery ? '?' : '&';
    baseURI += 'before' + new Date(end).toUTCString();
  }
  return baseURI;
};

const FilterForm = () => {
  const accountRef = useRef<HTMLInputElement>(null);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const fetchData = async () => {
    var account = accountRef.current?.value;
    var startDate = startRef.current?.value;
    var endDate = endRef.current?.value;
    var unit = unitRef.current?.value;

    var query = makeQuery(account, startDate, endDate, unit);
    alert(query);

    const result = await axios.get(query);
    console.log(result.data);
    dispatch(setResultData(result.data.actions));
  };

  return (
    <div className='pt-10 flex px-20 gap-10 items-end justify-center'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='account' className='uppercase text-gray-400 pl-2'>
          EOS ACCOUNT
        </label>
        <input
          id='account'
          className='p-2 w-[200px] bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416] text-gray-300 placeholder-slate-500'
          placeholder='tsui.mlt'
          ref={accountRef}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='startdate' className='uppercase text-gray-400 pl-2'>
          Beginning Date
        </label>
        <input
          type='date'
          id='startdate'
          className='p-2 text-gray-300 w-[200px] bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416]'
          placeholder='02/02/2022'
          ref={startRef}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='enddate' className='uppercase text-gray-400 pl-2'>
          End Date
        </label>
        <input
          type='date'
          id='enddate'
          className='p-2 w-[200px] text-gray-300 bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416]'
          placeholder='04/02/2022'
          ref={endRef}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='account' className='uppercase text-gray-400 pl-2'>
          Money Unit
        </label>
        <input
          id='account'
          className='p-2 w-[200px] bg-[#121214]/30 outline-none transition-all duration-150 border-[4px] border-[#191921] focus:border-[#141416] text-gray-300 placeholder-slate-500'
          placeholder='Ex. "USD"'
          ref={unitRef}
        />
      </div>
      <button
        onClick={fetchData}
        className='h-12 px-12 outline-none bg-[#257e47] hover:bg-[#2ba75b] transition-all duration-150 text-white font-bold'
      >
        GET DATA
      </button>
    </div>
  );
};

export default FilterForm;
