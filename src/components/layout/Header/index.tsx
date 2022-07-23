import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <header
      className={`fixed top-0 h-24 w-screen ${
        pathname == '/' ? 'bg-white/5 backdrop-blur' : 'bg-[#101015] shadow-xl'
      }`}
    >
      <NavLink to='/' className='px-20 w-full h-full flex items-center gap-5'>
        <img src='images/EOS-Coin.webp' alt='EOS' width={45} height={45} />
        <p className='text-white text-2xl'>EOS TRX Tracker</p>
      </NavLink>
    </header>
  );
};

export default Header;
