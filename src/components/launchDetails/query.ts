import { gql } from "@apollo/client";

export const QUERY_LAUNCH_DETAILS = gql`
    query launchDetails($id: ID!){
        launch(id: $id){
          mission_name
          id
          details
          launch_year
          launch_success
          rocket {
            rocket_name
            rocket_type
          }
          upcoming
          ships {
            name
          }
          links {
            flickr_images
            video_link
            article_link
          }
          launch_site {
            site_id
            site_name
          }
        }
    }
`
