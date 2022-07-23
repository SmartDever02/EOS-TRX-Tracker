import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const TableBody = ({ data }: ArrayDataProps) => {
  const history = useSelector((state: RootState) => state.history.data);

  return (
    <>
      {data?.map((row, rIndex) => (
        <div className='grid grid-cols-7'>
          {row.map((cell, cIndex) => (
            <span
              key={'row' + rIndex + 'col' + cIndex}
              className={`${
                rIndex % 2 === 0 ? '' : 'bg-[#181820]'
              } py-2 text-center text-slate-300`}
            >
              {cell}
            </span>
          ))}
        </div>
      ))}
    </>
  );
};

interface ArrayDataProps {
  data?: Array<Array<string>>;
}

export default TableBody;
