import React from 'react';

class Error extends React.Component {

    componentDidCatch(error, info) {
        console.log(error);
    }
}

export default Error;