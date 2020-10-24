import React from "react";
import "./Podcast.css";
import HeadingButton from "../../../../components/Buttons/HeadingButton";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../../../../components/Loading/Loading";

const Podcast = () => {
  const [podcastUrl, setPodcastUrl] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jamkabhet.com/wp-json/wp/v2/podcasts")
      .then((res) => setPodcastUrl(res))
      .catch((err) => console.log(err));
  }, []);
  const { data } = podcastUrl;
  return (
    <>
      <HeadingButton text='पडकास्ट' />
      <div className='podcast_container'>
        {!data ? (
          <Loading />
        ) : (
          data.map((data) => (
            <div
              className='holds-the-iframe'
              dangerouslySetInnerHTML={{ __html: data.acf.podcast_embed_url }}
              key={data.id}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Podcast;
