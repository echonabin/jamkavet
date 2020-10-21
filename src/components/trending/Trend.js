import React from "react";
import { Link} from "react-router-dom";

const Trend = ({
  item,
  header,
  headlines,
  author,
  thumbnail,
  id,
  authorIcon,
}) => {
  return (
    
    <Link
      to={{ pathname: `/trend/${id}`, hash: `#${header}` }}
      className={`item-${item}`}
      style={{ textDecoration: "none" }}>
      <div className='card'>
        <div
          className='thumb'
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        />
        <article>
          <h1>{header}</h1>
          <span>
            {author}
            <img src={authorIcon} alt='author' />
          </span>
        </article>
      </div>
    </Link>
  );
};

export default Trend;
