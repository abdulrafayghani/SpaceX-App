import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLaunchDetailsQuery } from '../../generated/graphql';
import { Grid } from '@material-ui/core';
import './launchDetails.css';

export const LaunchDetails = () => {
  const { launchId } = useParams();
  const { loading, data, error } = useLaunchDetailsQuery({
    variables: { id: launchId }
  });

  if (loading) return <h1> ...loading</h1>;

  if (error) return <h1>error</h1>;

  return (
      <div></div>
    // console.log(data?.launch?.id)
    // <div>
    //   {data?.launch?.links?.flickr_images?.[0] && (
    //     <div>
    //       <div
    //         key={data?.launch?.id}
    //         className="bg"
    //         style={{
    //           backgroundImage: `url(${data?.launch?.links?.flickr_images})`,
    //         }}
    //       >
    //         <Grid
    //           container
    //           direction="row"
    //           justify="flex-start"
    //           alignItems="flex-end"
    //           className=""
    //         ></Grid>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};
