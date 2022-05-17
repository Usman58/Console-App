import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const applist = [
  { label: "Facebook", icon: <FacebookRoundedIcon sx={{color:"blue"}} fontSize="large" />},
  { label: "YouTube", icon: <YouTubeIcon sx={{color:"red"}} fontSize="large" />},
  { label: "LinkdIn", icon: <LinkedInIcon sx={{color:"blue"}} fontSize="large" />},
  { label: "Email", icon: <EmailIcon sx={{color:"#f2f2f2"}} fontSize="large" />},
];

const AppsListScreen = () => {
  var showapps = applist.slice(0, 3);
  let count=1;
  return (
    <div>
       <Autocomplete 
        id="free-solo-demo"
        freeSolo
        sx={{ width: 300,marginTop:'14px' }}
        options={applist}
        renderInput={(params) => <TextField {...params}  label="Search apps..."/>}
        
      />
      <List>
        {showapps.map((app,index) => (
          <ListItem id="li" key={index}>
            <ListItemAvatar>
              <Avatar>
                {app.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={app.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AppsListScreen;
