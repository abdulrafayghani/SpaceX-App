import React from 'react'
import { useLaunchListQuery } from '../../generated/graphql';
import { LaunchList } from '../launchList/LaunchList'

export const Launches = () => {
    const { data } = useLaunchListQuery({
        variables: {
          limit: 10,
        },
      });

    return <LaunchList data={data?.launchesPast} />
}
