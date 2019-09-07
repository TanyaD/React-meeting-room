import React, { Component } from 'react';
import { Link } from '@reach/router';

class AttendeesList extends Component{
        constructor(props){
        super(props);
        }
    }
    render(){
        const admin = this.props.adminUser == this.props.userID ? true : false;
        const attendees = this.props.attendees;
        const myAttendees = atttendees.map(item=>{
            return(
                <div
                className="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
                key={item.attendeeID}>
                  <div className="card ">
                    <div className = {
                        "card-body px-3 py-2 d-flex align-items-center" +
                        (admin ? '' : 'justify-content-center')
                    }>
                      <div>{item.attendeeName}</div>
                    </div>
                  </div>
                </div>
            );
        });
    }
}

export default AttendeesList;
