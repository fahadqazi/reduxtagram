import React, {Component} from 'react';
import {Link} from 'react-router';

const Photo = ({post, i, comments}) => {
    return(
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${post.code}`}>
            {post.caption}
          </Link>
        </div>
      </figure>
    );
  }


export default Photo;