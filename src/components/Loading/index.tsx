import './style.css';

const Loading = () => {
  return (
    <div className='inset-0 bg-gray-800 fixed flex w-full h-full items-center justify-center duration-300 transition-opacity'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
