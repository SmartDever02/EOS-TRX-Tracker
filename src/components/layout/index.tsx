import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <div className='relative'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
