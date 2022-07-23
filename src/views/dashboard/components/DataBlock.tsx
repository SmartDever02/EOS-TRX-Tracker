import Loader from '../../../components/Loading/Loader';

const DataBlock = ({ data }: BlockProps) => {
  return (
    <>
      {data.length === 0 ? (
        <div className='flex flex-col items-center justify-center text-white font-bold'>
          <p className='text-[64px]'>{`(>__<)`}</p>
          <p className='text-3xl'>Ooops, No data To Display</p>
        </div>
      ) : (
        <></>
      )}
      {data.map((row: any, rIndex: number) => {
        return (
          <div
            key={'row' + rIndex}
            className={`text-gray-400 grid grid-cols-7 text-center ${
              rIndex % 2 === 0 ? '' : 'bg-[#181820]'
            }`}
          >
            <Cell>{new Date(row.timestamp).toLocaleDateString()}</Cell>
            <Cell>{new Date(row.timestamp).toLocaleTimeString()}</Cell>
            <Cell>
              {row.act.account === 'eosmarketplc'
                ? row.act.data.account
                : row.act.data.from}
            </Cell>
            <Cell>
              {row.act.account === 'eosio'
                ? row.act.data.receiver
                : row.act.account === 'eosmarketplc'
                ? row.act.data.business
                : row.act.data.to}
            </Cell>
            <Cell>{row.act.data.amount}</Cell>
            <Cell>{10}</Cell>
            <Cell>{10 * row.act.data.amount}</Cell>
          </div>
        );
      })}
    </>
  );
};

const Cell = ({ children }: CellProps) => {
  return <span className='py-2'>{children}</span>;
};

interface CellProps {
  children: any;
}

interface BlockProps {
  data: Array<any>;
}

export default DataBlock;
