import React from "react";
import { gql, useQuery } from '@apollo/client'
import './Service.css';
const CHARACTERS_QUERY = gql`
query{
    episodes(filter:{episode: "S04"}){
      results{
        name
        air_date
        episode
      }
    }
  }`;

function EpisodeList() {
    const { loading, error, data } = useQuery(CHARACTERS_QUERY);
    if (loading)
        return <p>Loading...</p>;
    if (error)
        return <p>Error :( </p>;

    return data.episodes.results.map(episode => (
        <div key={episode.id} className="EpisodeLIST">
            <p>{episode.episode}</p>
            <div className="EpisodeContent"><p>{episode.name}</p>
            <p>{episode.air_date}</p></div>
            
        </div>
    ));
}

export default EpisodeList;