import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function Infobox({Info}){
    


    const init_url="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI="
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL="https://media.istockphoto.com/id/516351793/photo/majestic-storm-clouds.webp?b=1&s=170667a&w=0&k=20&c=xwhgkSp8ggOGhEnDAfUINCLEHYeTbxziOfUmI21tjqU="

    return(  

        <div className="Infobox"><h3>Weather Info-{Info.temp}&deg;C</h3>
        <div className="Cardcon">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={Info.humidity>80?RAIN_URL:Info.temp>15?HOT_URL:COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}{Info.humidity>80?<ThunderstormIcon/>:Info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Temperature:  {Info.temp}&deg;C;
           <p>Max:     {Info.tempMax}&deg;C</p>
           <p>Min:     {Info.tempMin}&deg;C</p>
           <p>Weather:    {Info.weather}</p>
           <p>Humidity:    {Info.humidity}</p>
           
           
           
          </Typography>
        </CardContent>
 
      </Card>
      </div>
      </div>
    
    )
}