const FilterForm = () => {
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
        />
      </div>
      <button className='h-12 px-12 bg-[#257e47] text-white font-bold'>
        GET DATA
      </button>
    </div>
  );
};

export default FilterForm;
