import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
    query launchList($limit: Int!){
        launchesPast(limit: $limit){
            id
            is_tentative
            mission_name
            links {
              flickr_images
              video_link
        }
    }
`