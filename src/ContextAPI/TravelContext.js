import React , {createContext , useState } from 'react'
import ActOne from '../Assets/Images/slide2.jpg'
import travelhd from '../Assets/Images/travel-hd.jpg'

//Create Context Api for state Managment 
export const TravelContext = createContext();

const TravelProvider = (props) => {
    //Activities state
    const [Avtivities , setActivities ] = useState([
        {id:1 , Title:'Taipei 101 Observatory E-Ticket' , Stars:4 , Reviews:300 , Ticket:200 , Price:250 , date:'Available From 26 May 2020', Img:`${travelhd}`},
        {id:2 , Title:'Hong Kong Disneyland Meal Coupon' , Stars:5 , Reviews:500 , Ticket:897 , Price:300 , date:'Available From 26 May 2020' , Img:`${travelhd}`},
        {id:3 , Title:'Taipei 101 Observatory E-Ticket' , Stars:4.3 , Reviews:100 , Ticket:158 , Price:690 , date:'Available From 26 May 2020', Img:`${travelhd}`},
        {id:4 , Title:'Taipei 101 Observatory E-Ticket' , Stars:4.8 , Reviews:336 , Ticket:980 , Price:980 , date:'Available From 26 May 2020' , Img:`${travelhd}`},
        {id:5 , Title:'Taipei 101 Observatory E-Ticket' , Stars:4.9 , Reviews:859 , Ticket:120 , Price:250 , date:'Available From 26 May 2020' , Img:`${travelhd}`},
        {id:6 , Title:'Taipei 101 Observatory E-Ticket' , Stars:4.7 , Reviews:99 , Ticket:230 , Price:250 , date:'Available From 26 May 2020' , Img:`${travelhd}`},
        {id:7 , Title:'Taipei 101 Observatory E-Ticket' , Stars:4, Reviews:698 , Ticket:250 , Price:250 , date:'Available From 26 May 2020' , Img:`${travelhd}`},
    ]);
    //Events State
    const [Events , setEvents] = useState([
        {id:1, Name:'Musical' , Title:'Name Of Event ' , date:'25 Jan 2020' , Img:`${ActOne}`},
        {id:2,Name:'Games' , Title:'Name Of Event ' , date:'15 Jan 2020' , Img:`${ActOne}`},
        {id:3,Name:'Sports' , Title:'Name Of Event ' , date:'15 Feb 2020' , Img:`${ActOne}`},
        {id:4,Name:'Art' , Title:'Name Of Event ' , date:'5 May 2020' , Img:`${ActOne}`},
        {id:5,Name:'Games' , Title:'Name Of Event ' , date:'26 March 2020' , Img:`${ActOne}`},
        {id:6 ,Name:'Art', Title:'Name Of Event ' , date:'8 Apr 2020' , Img:`${ActOne}`},
    ])
    return(
        <TravelContext.Provider value={{Avtivities , Events}}>
            {props.children}
        </TravelContext.Provider>
    )
}
export default TravelProvider;