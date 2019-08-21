import React, { Component } from 'react';
import firebase from './Firebase';
import {navigate} from '@reach/router';


class Checkin extends Component{
    constructor(props){ //all the props will now available anywhere in component
        super(props);
        this.state = {
            displayName:'',
            email:''
        }
    }

    handleChange=(e)=>{
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]:itemValue})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const ref = firebase.database().ref(`meetings/{$this.props.userID}/meetings/{$this.props.meetingID}/attendees`)
        ref.push({
            attendeeName: this.state.displayName,
            attendeeEmail: this.state.email
        });
        navigate(`/attendees/${this.props.userID}/${this.props.emailID}`)
    }

    render(){
        return(

        )
    }
}

export default Checkin;
