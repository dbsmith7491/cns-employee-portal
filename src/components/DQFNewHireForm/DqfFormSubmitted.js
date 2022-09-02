import { Typography, List, ListItem, ListItemText, Grid, Button, Box, Container, Link } from "@mui/material";
import { format, parseISO } from "date-fns";
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



const DqfReview = ({ submitForm, values, handleBack, dqf100BlobUrl }) => {
  
  const onDownload = () => {
    const link = document.createElement("a");
    link.href = dqf100BlobUrl;
    link.target = "_blank";
    link.click();
  }
  
  return (

    <Container maxWidth="sm" sx={{ px: { xs: 1 }, my: { xs: 1, sm: 4, md: 5 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 64 }} />
        <Typography variant="h4" align="center" gutterBottom sx={{mt: 1}}>
          We received your application.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{my: 1}}>
          <strong>Put some next steps here.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Button startIcon={<DownloadIcon/>} onClick={onDownload}>Download Your Application</Button>
      </Box>
    </Container>

  );
};

export default DqfReview;
