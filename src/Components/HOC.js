import React, { Component} from 'react';

const subjects =(STUDENT)=>{
    class Subject extends Component{
        render(){
            return(
                <STUDENT hocsub="Java" hocsubone="JavaScript" hocsubtwo="CSS" hocsubthree="HTML">
                </STUDENT>
            )
        }
    }
    return Subject;
}

export default subjects
