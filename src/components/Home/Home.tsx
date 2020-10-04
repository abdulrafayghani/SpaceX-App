import React, { FC } from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import { LaunchList } from '../launchList/LaunchList';

const Home: FC = () => {
  const { data, error } = useLaunchListQuery({
    variables: {
      limit: 5,
    },
  });

  if (error) return <h3> ...An error occured please try again</h3>;

  return <LaunchList data={data?.launchesPast} />;
};

export default Home