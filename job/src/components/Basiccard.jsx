import * as React from 'react';
import '../App.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { blue } from '@mui/material/colors';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

export default function Basiccard() {
    const [data,setdata]=React.useState([])
    const getdata=()=>{
        axios.get('https://www.arbeitnow.com/api/job-board-api').then((r)=>setdata(r.data.data))
        
    }
    React.useEffect(()=>{
getdata()
console.log(data,'data')

    },[])
  return (
<Card className='main' style={{ display:'grid', gridTemplateColumns: '40% 40%'}}>
{data.map((e)=>{
    return (
<Card key={Math.random()*9.7678} >
<Card>
        <Card sx={{  minWidth: 275 ,width:400,height:200, marginTop:2 }} variant="outlined" >
        <CardContent>
        <Typography><b>{e.tags}</b></Typography>
        <Typography><b>company_name </b> {e.company_name}</Typography>
{/* 
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Description  </b>{e.description}
        </Typography> */}
        <Typography variant="h5" component="div">
          <b>Location : </b>{e.location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <b>Remote : </b>  {e.remote}
        </Typography>
        <Typography variant="body2">
         {e.tags}
          <br />
         
        </Typography>
</CardContent>
        </Card>
        </Card>
      
  </Card>  
)


})}

</Card>

  )}
    
  
        
   
    
      
      
        
    
      
   
   
     
    

    
 
