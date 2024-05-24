import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "../objects/ui/Copyright";
import PageTemplate from "../objects/ui/PageTemplate";

const DashboardPage = () => {
  const sectionStyle = {
    m: "5px",
    display: "flex",
    flexDirection: "column",
    height: "40vh",
  };

  return (
    <PageTemplate>
      <Box
        sx={{
          gridColumn: "span 12",
          width: "70vw",
          height: "0px",
        }}
      >
        <Toolbar />
        <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={sectionStyle}> </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={sectionStyle}> </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={sectionStyle}> </Paper>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    </PageTemplate>
  );
};

export default DashboardPage;
