import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AppsIcon from '@mui/icons-material/Apps';
import AppsListScreen from "../Screens/AppsListScreen";
const Main = () => {

  return (
    <>
      <Container style={{ marginTop: "25px", borderRadius: "30px" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col>
            <Card>
              <Card sx={{ backgroundColor: "#FF4500", width: "100%" }}>
                <CardContent sx={{paddingLeft:"100px",color:"white"}} >
                  <Typography gutterBottom variant="h6" component="div">
                    1.Trigger
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    A trigger is an event that starts your zap
                  </Typography>
                </CardContent>
              </Card>
              <Container style={{padding:"40px"}}>
              <Row>
                <Col xs={12} md={8}>
                  <Card sx={{ backgroundColor: "#f2f2f2" }} >
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    <AppsIcon fontSize="large" style={{color:"#FF4500"}} />    App Event
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    Start the zap when something happens in an app
                  </Typography>
                      <AppsListScreen />
                    </CardContent>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card id="sc"
                    sx={{ backgroundColor: "#f2f2f2", textAlign: "center" }}
                  >
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div" >
                        Schedule
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        Start the Zap every day, hour or a custom interval
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: "#f2f2f2",
                      marginTop: "16px",
                      textAlign: "center",
                    }}
                  >
                    <CardContent  id="rss">
                      <Typography gutterBottom variant="h6" component="div">
                        RSS
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        Start the Zap when RSS feed updates
                      </Typography>
                    </CardContent >
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: "#f2f2f2",
                      marginTop: "16px",
                      textAlign: "center",
                    }}
                  >
                    <CardContent  id="we">
                      <Typography gutterBottom variant="h6" component="div">
                        Webhook
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        Start the Zap when another app sends a webhook
                      </Typography>
                    </CardContent>
                  </Card>
                </Col>
              </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
