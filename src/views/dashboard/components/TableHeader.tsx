const TableHeader = ({ thArray }: HeaderProps) => {
  return (
    <>
      {thArray.map((one, index) => (
        <div
          key={'header' + index}
          className='bg-[#161618] text-gray-200 py-3 text-center'
        >
          {one}
        </div>
      ))}
    </>
  );
};

interface HeaderProps {
  thArray: Array<string>;
}

export default TableHeader;
