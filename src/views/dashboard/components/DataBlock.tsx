const convertTime12to24 = (time12h: string) => {
  const [time, modifier] = time12h.split(' ');

  let hours = parseInt(time.split(':')[0]);
  let minutes = parseInt(time.split(':')[1]);
  let seconds = parseInt(time.split(':')[2]);

  if (hours === 12) {
    hours = 0;
  }

  if (modifier === 'PM') {
    hours = hours + 12;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

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
            <Cell>{row.date}</Cell>
            <Cell>{convertTime12to24(row.time)}</Cell>
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
            <Cell>{row.quantity}</Cell>
            <Cell addClass={row.correct ? 'text-green-600' : ''}>
              {row.price.toFixed(3)}
            </Cell>
            <Cell addClass={row.correct ? 'text-lime-600' : ''}>
              {(row.price * row.quantity).toFixed(3)}
            </Cell>
          </div>
        );
      })}
    </>
  );
};
export const Cell = ({ children, addClass }: CellProps) => {
  return <span className={`py-2 ${addClass ?? ''}`}>{children}</span>;
};

interface CellProps {
  children?: any;
  addClass?: string;
}

interface BlockProps {
  data: Array<any>;
}

export default DataBlock;
