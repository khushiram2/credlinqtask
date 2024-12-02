'use client';
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Link,
  AppBar,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const HeaderBackground = styled(AppBar)({
  backgroundImage: 'url("/header-bg.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
});

const HeaderContent = styled(Toolbar)({
  justifyContent: 'space-around',
  padding: '24px 192px',
  '@media (max-width: 1200px)': {
    padding: '24px 64px',
  },
  '@media (max-width: 600px)': {
    padding: '24px 16px',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const SectionHeader = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(96, 26, 121)',
  color: 'white',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SectionNumber = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'rgb(96, 26, 121)',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
}));

const UploadArea = styled(Box)(({ theme }) => ({
  border: `2px dashed rgb(96, 26, 121)`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(5),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(96, 26, 121, 0.05)',
}));

const CheckmarkText = styled('span')({
  color: 'rgb(96, 26, 121)',
  marginRight: '5px',
});

export default function Form() {
  const defaultFormData = {
    firstSection: {
      companyUEN: '',
      companyName: '',
    },
    secondSection: {
      fullName: '',
      position: '',
      email: '',
      reEnteredEmail: '',
      mobileNumber: '',
    },
    thirdSection: {
      file: '',
    },
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [formStatus, setFormStatus] = useState({
    first: false,
    second: false,
    third: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload here
    }
  };
  useEffect(() => {
    if (
      formData.firstSection.companyUEN.length !== 0 &&
      formData.firstSection.companyName.length !== 0
    ) {
      setFormStatus((prev) => ({ ...prev, first: true }));
    } else if (
      formData.secondSection.fullName.length !== 0 &&
      formData.secondSection.position.length !== 0 &&
      formData.secondSection.email.length !== 0 &&
      formData.secondSection.reEnteredEmail.length !== 0 &&
      formData.secondSection.mobileNumber.length !== 0
    ) {
      setFormStatus((prev) => ({ ...prev, second: true }));
    }
  }, [formData]);

  return (
    <>
      <HeaderBackground position="static">
        <HeaderContent>
          <Box component="img" src="/logo.svg" alt="Logo" height={80} />
          <Typography variant="h4" component="h1" color="white">
            SME HealthCheck - Get Started
          </Typography>
        </HeaderContent>
      </HeaderBackground>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3}>
          <form>
            <Box mb={4}>
              <SectionHeader>
                <SectionNumber>1</SectionNumber>
                <Typography variant="h6">Company Information</Typography>
              </SectionHeader>
              <Box p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company UEN"
                      variant="outlined"
                      value={formData.firstSection.companyUEN}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      variant="outlined"
                      value={formData.firstSection.companyName}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box mb={4}>
              <SectionHeader>
                <SectionNumber>2</SectionNumber>
                <Typography variant="h6">Applicant Information</Typography>
              </SectionHeader>
              <Box p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={formData.secondSection.fullName}
                      disabled={!formStatus.firstSection}
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Position within company"
                      variant="outlined"
                      value={formData.secondSection.position}
                      disabled={!formStatus.firstSection}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      type="email"
                      value={formData.secondSection.email}
                      disabled={!formStatus.firstSection}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Re-enter Email Address"
                      variant="outlined"
                      type="email"
                      value={formData.secondSection.reEnteredEmail}
                      disabled={!formStatus.firstSection}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Code</InputLabel>
                          <Select label="Code" defaultValue="+65">
                            <MenuItem value="+65">+65</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={9}>
                        <TextField
                          fullWidth
                          label="Mobile Number"
                          variant="outlined"
                          value={formData.secondSection.mobileNumber}
                          disabled={!formStatus.firstSection}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Typography variant="caption" color="textSecondary" mt={2}>
                  The report will be delivered on this email address
                </Typography>
              </Box>
            </Box>

            <Box mb={4}>
              <SectionHeader>
                <SectionNumber>3</SectionNumber>
                <Typography variant="h6">Upload Documents</Typography>
              </SectionHeader>
              <Box p={3}>
                <UploadArea onDrop={handleDrop}>
                  <CloudUploadIcon
                    sx={{ fontSize: 48, color: 'rgb(96, 26, 121)', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Click to upload or drag and drop
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Bank Statements
                  </Typography>
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    accept=".pdf"
                    style={{ display: 'none' }}
                  />
                </UploadArea>
                <Box mt={3}>
                  <Typography variant="body2" paragraph>
                    <CheckmarkText>✓</CheckmarkText> PDFs (not scanned copies)
                    of companys operating bank current account(s) statements for
                    the past 6 months.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Example: If today is 02 Dec 24, then please upload bank
                    statements from Jun 24 to Nov 24 (both months inclusive)
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <CheckmarkText>✓</CheckmarkText> If your company is
                    multi-banked, then please upload 6 months bank statements
                    for each bank account
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <CheckmarkText>✓</CheckmarkText> If your file is password
                    protected, we request you to remove the password and upload
                    the file to avoid submission failure
                  </Typography>
                  <Typography variant="body2">
                    <CheckmarkText>✓</CheckmarkText> In case if you are facing
                    any issue while uploading bank statements, Please contact us
                    on{' '}
                    <Link href="mailto:support@credilinq.ai">
                      support@credilinq.ai
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box p={3}>
              <Button
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  backgroundColor: 'rgb(96, 26, 121)',
                  '&:hover': {
                    backgroundColor: 'rgb(76, 6, 101)',
                  },
                }}
              >
                Submit Application
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
}
