import React, { Component } from 'react';
import axios from 'axios';

class AjaxButton extends Component {
    handleClick() {
        console.log('Clicked');
        axios.get('https://auth.shopfriend.test/ping')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.put('https://auth.shopfriend.test/public/facebook/login')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div onClick={() => this.handleClick()}>Click Me</div>
        );
    }
}

export default AjaxButton
