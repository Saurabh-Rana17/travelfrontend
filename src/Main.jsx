import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";

function Main() {

    const post = "A mystical land of mountains and mythologies, exquisite landscapes and exhilarating adventure, and wellness and yoga, Uttarakhand has something to offer every traveller. Popularly known as Devbhoomi, or the land of gods, the state is framed by the Himalayas and divided into two main regions, Garhwal and Kumaon. While Uttarakhand has several well-known destinations like Nainital, Mussoorie, Corbett National Park and Auli, and pilgrimage sites like Kedarnath, Badrinath, Rishikesh and Haridwar, explore the 13 lesser-known destinations from the state's 13 districts."

    return (<Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                    border: "2px gray"
                },
            }}
        >
            <Typography variant="h6" gutterBottom>
                Explore the Unexplored
            </Typography>
            <Divider/>
            <Box  className="markdown">
                {post}
            </Box>
        </Grid>);
}

export default Main;