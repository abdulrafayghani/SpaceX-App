import React, { FC, Fragment } from 'react';
import { LaunchesPastResult } from '../../generated/graphql';
import { Button, Grid } from '@material-ui/core';
import './launchList.css';
import { useNavigate } from 'react-router-dom';

export const LaunchList: FC<LaunchesPastResult> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      {data?.map((launch, ind) => {
        return (
          launch?.links?.flickr_images?.[0] && (
            <div
              key={ind}
              className="bg"
              style={{ backgroundImage: `url(${launch.links.flickr_images})` }}
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-end"
                className="section-inner"
              >
                <Grid item container md={1} xs={1} />
                <Grid item>
                  <div className="text">
                    <h3>Misson completed</h3>
                    <h1>{launch.mission_name} </h1>
                    <Button
                      style={{ color: 'white', border: '1px solid white' }}
                      href={launch.links.video_link + ''}
                      variant="outlined"
                      size="large"
                      target="_blank"
                    >
                      Replay
                    </Button>
                    {data?.length > 5 && (
                      <Button
                        style={{
                          color: 'white',
                          border: '1px solid white',
                          marginLeft: '10px',
                        }}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          navigate(`/launches/${launch.id}`);
                        }}
                      >
                        Details
                      </Button>
                    )}
                  </div>
                </Grid>
              </Grid>
            </div>
          )
        );
      })}
    </Fragment>
  );
};
