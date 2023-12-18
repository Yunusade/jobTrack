import { useEffect } from 'react';
import { StatsContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return (
    <>
      <StatsContainer />
    </>
  );
};
export default Stats;
