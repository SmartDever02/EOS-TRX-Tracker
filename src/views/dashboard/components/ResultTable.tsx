import TableHeader from './TableHeader';

import { headers } from '../../../data/table';
import TableBody from './TableBody';

const ResultTable = () => {
  return (
    <div className='mt-10 px-20'>
      <TableHeader thArray={headers} />
      <TableBody />
    </div>
  );
};

export default ResultTable;
