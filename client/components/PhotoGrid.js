import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    console.log(this.props.posts)
    return (
      <div className="photo-grid">
        {
          this.props.posts.map((post, i) => {
            return <Photo key={i} i={i} {...this.props} post={post}/>
          })
        }
      </div>
    )
  }
});
export default PhotoGrid;