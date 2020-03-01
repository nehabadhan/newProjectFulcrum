import React, { Component } from 'react';
import PostData  from '../data/post.json';


class PostList extends Component {


  render() {
    return (
        <div class="card box-border" id="middle">
{PostData.map((postDetails, index) =>{
return <div>
<h1>{postDetails.groupName}</h1>
<p>{postDetails.groupcategory}</p>
</div>
})}

      </div>
      

      
      
    );
  }
}
export default PostList

//render(<App />, document.getElementById('root'));
