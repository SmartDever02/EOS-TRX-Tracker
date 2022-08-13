import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import DataBlock, { Cell } from './DataBlock';

const TableBody = () => {
  const history = useSelector((state: RootState) => state.history);

  useEffect(() => {
    !history.fetchingPrice && window.scrollTo(0, document.body.scrollHeight);
  });

  return (
    <>
      {history.data.map((one, index) => (
        <DataBlock key={'block' + index} data={one} />
      ))}
      {(history.quantity !== 0 || history.volume !== 0) && (
        <div className={`text-gray-400 grid grid-cols-7 text-center`}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell addClass='text-red-400'>{history.quantity}</Cell>
          <Cell></Cell>
          <Cell addClass='text-red-500'>{history.volume}</Cell>
        </div>
      )}
    </>
  );
};

export default TableBody;
