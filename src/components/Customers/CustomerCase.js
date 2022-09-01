import {
  Container,
  Paper,
  Breadcrumbs,
  Link,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useParams, useLocation } from "react-router";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const ReadOnlyLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  padding: theme.spacing(0),
  width: "100%",
}));

const ReadOnlyValue = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(0),
  width: "100%",
}));

export default function CustomerCase() {
  const location = useLocation();
  const navigate = useNavigate();
  let { customerID, caseID } = useParams();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      label: "New Hire Submitted Application Data",
      subtitle: "10/20/2021",
      status: "completed",
    },
    {
      label: "Permission to Proceed",
      status: "current",
      content: (
        <StepContent>
          <Typography>
            Notification was sent to customer on 10/20/2021.
          </Typography>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                Resend Notification
              </Button>
            </div>
          </Box>
        </StepContent>
      ),
    },
    {
      label: "Onboarding",
      description: `For each ad campaign that you create, you can control how much
                  you're willing to spend on clicks and conversions, which networks
                  and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Pre-Driving Audit",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Qualifiying",
      description: `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`,
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Cases
    </Link>,
    <Typography key="3" color="text.primary">
      {caseID}
    </Typography>,
  ];
  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ m: 2 }}>
        {breadcrumbs}
      </Breadcrumbs>
      <Box>
        <Container component="main" maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step
                      key={step.label}
                      completed={step.status === "completed" ? true : false}
                      active={step.status === "current" ? true : false}
                    >
                      <StepLabel
                        optional={
                          step.subtitle ? (
                            <Typography variant="caption">
                              {step.subtitle}
                            </Typography>
                          ) : null
                        }
                      >
                        {step.label}
                      </StepLabel>
                      {step.content}
                    </Step>
                  ))}
                </Stepper>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <ReadOnlyLabel>Case Type</ReadOnlyLabel>
                <ReadOnlyValue>New Hire DQF</ReadOnlyValue>
                <ReadOnlyLabel>Origin</ReadOnlyLabel>
                <ReadOnlyValue>Customer Portal</ReadOnlyValue>
                <Divider sx={{ my: 2 }} />
                <ReadOnlyLabel>Customer</ReadOnlyLabel>
                <ReadOnlyValue>Really Great Trucking LLC</ReadOnlyValue>
                <ReadOnlyLabel>Applicant Name</ReadOnlyLabel>
                <ReadOnlyValue>James Monroe</ReadOnlyValue>

                <Divider sx={{ my: 2 }} />
                <ReadOnlyLabel>CNS Assignment</ReadOnlyLabel>
                <ReadOnlyValue>Adam Galante</ReadOnlyValue>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
