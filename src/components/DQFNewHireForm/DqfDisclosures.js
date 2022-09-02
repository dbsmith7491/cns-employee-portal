import { Typography, List, ListItem, ListItemText, Grid, Button, Box, FormGroup, FormControlLabel, Checkbox, Stack, Card, CardContent, CardActionArea, CardActions } from "@mui/material";
import { format, parseISO } from "date-fns";

const DqfDisclosures = ({ submitForm, values, handleBack }) => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Almost there.  Please review the following disclosures.
      </Typography>
      <Stack spacing={2} sx={{ mb: 3 }}>
        <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Privacy Statement
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Review Statement
            </Button>
          </CardActions>
        </Card>
        <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Background Check Statement
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Review Statement
            </Button>
          </CardActions>
        </Card>
      </Stack>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>Applicant Agreement</Typography>
      <Typography variant="body2" gutterBottom>
        This application was completed by me, and that all entries on it and information in it are
        true and complete to the best of my knowledge. I am giving authorization for the employer listed above to
        inquire and investigate my personal, employment, financial and medical history in regards to my employment
        status. I release any previous employer, school, and healthcare facility from all liability during the
        release of my information in regards to my application.
      </Typography>
      <FormGroup sx={{ mt: 1 }}>
        <FormControlLabel control={<Checkbox />} label="By checking this box, I agree with the applicant agreement listed above." />
      </FormGroup>
    </>
  );
};

export default DqfDisclosures;
