import React, { Component } from 'react';
import { storage } from '../firebase';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
            console.log(image);
        }
    }
    handleUpload = () => {
        const { image } = this.state;
        const name = image.name + '-' + Date.now();
        const uploadTask = storage.ref(`images/${name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                })
            });
    }
    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            <div style={style}>
                <progress value={this.state.progress} max="100" />
                <br />
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleUpload}>Upload</button>
                <br />
                <div>
                    <img src={this.state.url || 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2FshalE.png?alt=media&token=f0ff8080-682c-453d-b29c-c2cd67ea4709'}
                        alt="Uploaded images" height="400" border="3" margin-right="150" margin-left="150" />
                </div>
            </div>
        )
    }
}

export default ImageUpload;
