import React, { FC } from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import { LaunchList } from '../launchList/LaunchList';

export const Home: FC = () => {
  const { loading, data, error } = useLaunchListQuery({
    variables: {
      limit: 5,
    },
  });

  if (loading) return <h3> ...loading </h3>;

  if (error) return <h3> ...An error occured please try again</h3>;

  return <LaunchList data={data?.launchesPast} />;
};
