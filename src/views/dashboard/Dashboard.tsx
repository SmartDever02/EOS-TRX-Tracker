import FilterForm from './components/FilterForm';
import ResultTable from './components/ResultTable';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen bg-[#232325] pt-24'>
      <FilterForm />
      <ResultTable />
    </div>
  );
};

export default Dashboard;
