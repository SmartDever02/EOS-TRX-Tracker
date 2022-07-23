const TableBody = ({ data }: ArrayDataProps) => {
  return (
    <>
      {data?.map((row, rIndex) => (
        <>
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
        </>
      ))}
    </>
  );
};

interface ArrayDataProps {
  data?: Array<Array<string>>;
}

export default TableBody;
