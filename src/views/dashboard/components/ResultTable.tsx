import TableHeader from './TableHeader';

import { headers, fakedata } from '../../../data/table';
import TableBody from './TableBody';

const ResultTable = () => {
  return (
    <div className='mt-10 grid grid-cols-7 px-20'>
      <TableHeader thArray={headers} />
      <TableBody data={fakedata} />
    </div>
  );
};

export default ResultTable;
