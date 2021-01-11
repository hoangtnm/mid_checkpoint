import React from "react";
import { Link } from "react-router-dom";
import { List, Avatar } from "antd";

const parseDateTime = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const time = date.getHours();
  const year = date.getFullYear();
  return `${year}-${day}-${time}`;
};

const SongLink = (props) => {
  const src = `/songs/${props.song.id}`;
  return (
    <Link to={src}>
      {props.song.title} ({parseDateTime(props.song.publishedDate)})
    </Link>
  );
};

const Home = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://static.wikia.nocookie.net/logopedia/images/d/da/Unused_music_icon.png" />
            }
            title={<SongLink song={item} />}
            description={item.lyric}
          />
        </List.Item>
      )}
    />
  );
};

export default Home;
