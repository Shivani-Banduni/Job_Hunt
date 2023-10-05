import axios from 'axios';
import '../App.css'
// import { useNavigate} from 'react-router-dom'

import {Box, Card, CardContent, Typography, Grid, cardClasses} from '@mui/material';
import React from 'react';

const Layout = () => {
    // const navigate=useNavigate()
    const [data,setdata]=React.useState([])
    const getdata=()=>{
        axios.get('https://www.arbeitnow.com/api/job-board-api').then((r)=>setdata(r.data.data))
        
    }
    React.useEffect(()=>{
getdata()
console.log(data,'data')

    },[])
    return (

<Grid container spacing={1}>

    {data.map((e)=>{ return <Grid item xs={12} md={4} sm={6} border={1} ><item><b className='title'>{e.title}</b></item><br/><br/>
    <div className='company_name'><item> <b>{e.company_name}</b></item> <a href='https:\/\/www.arbeitnow.com\/jobs\/companies\/primal-state-performance-gmbh\/head-of-support-berlin-139004'>Go To</a></div>  <br/>

    <item>{e.job_types}</item><br/>
    <item>{e.location}</item>
    <item>{e.remote}</item>


    
    
    </Grid>})}
</Grid>


        
    );
}

export default Layout;
