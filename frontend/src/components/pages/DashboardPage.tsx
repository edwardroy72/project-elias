import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "../objects/ui/Copyright";
import PageTemplate from "../objects/ui/PageTemplate";
import { Typography } from "@mui/material";

const DashboardPage = () => {
  const sectionStyle = {
    m: "5px",
    display: "flex",
    flexDirection: "column",
    height: "40vh",
  };

  const titleStyle = {
    textAlign: "center",
    fontWeight: "500",
    pt: "20px",
    fontSize: "1.2rem",
    color: "#c9c9c9",
  };

  return (
    <PageTemplate>
      <Box
        sx={{
          gridColumn: "span 12",
          width: "80vw",
          height: "0px",
          mx: "auto",
          px: "0",
        }}
      >
        <Toolbar />
        <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={sectionStyle}>
                <Typography sx={{ ...titleStyle }}>Analytics</Typography>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={sectionStyle}>
                <Typography sx={{ ...titleStyle }}>To Do</Typography>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={sectionStyle}>
                <Typography sx={{ ...titleStyle }}>Recent Tree</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </PageTemplate>
  );
};

export default DashboardPage;
