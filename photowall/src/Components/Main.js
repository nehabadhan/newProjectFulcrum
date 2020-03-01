import React, {Component} from 'react';
import Title  from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://cdn1.imggmi.com/uploads/2019/4/7/d5b8182953c53594f887479a47125744-full.jpg"
            },
            {
                id: "1",
                description: "Aliens???",
                imageLink: "https://cdn1.imggmi.com/uploads/2019/4/7/5d00563854d26509eef6d83c9a2bdd17-full.jpg"
            },
            {
                id: "2",
                description: "On a vacation",
                imageLink: "https://cdn1.imggmi.com/uploads/2019/4/7/fe177d329d33d2dc4467671b81fad20f-full.jpg"
            }
            
            
            ],
          //  screen: 'photos' //photos, addPhoto

        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state) =>({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    // navigate(){
    //     this.setState({
    //         screen: 'addPhoto'
    //     })
    // }

    // componentDidMount() {
    // }
    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevState.posts)
    //     console.log(this.state)
    // }
//     render() {
    render() {
        return <div>
<Title title={'Photowall'}/>
<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>

        </div>
    }
}

export default Main