import * as React from 'react';
import { useLaunchListQuery, LaunchListQuery } from '../../generated/graphql';


import styles from './launch.module.css';


interface Props {
  data: LaunchListQuery;
}



const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launches || !data.launches[0]) {
    return <div>No launch available</div>;
  }

  return (
    <div className={styles.Launch_wrapper}>
      <div>
        <span>Flight {data.launches[0].flight_number}: </span>
        
      </div>
      <h1>
        {data.launches[0].mission_name} : {data.launches[0].launch_year}
      </h1>
    </div>
  );
};



const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchProfile data={data} />;
};


function Launch() {
  return (
    <>
      <LaunchListContainer />
    </>
  );
}

export default Launch;

