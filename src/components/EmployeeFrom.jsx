import React from 'react';
import { Grid, TextField, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox, Button, FormLabel } from '@mui/material';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  border:1px solid black
 
`;

const EmployeeForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: '',
    languages: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'languages') {
      const updatedLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter((lang) => lang !== value);

      setFormData({ ...formData, [name]: updatedLanguages });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);
  };

  return (
    <FormWrapper>
      <h2 style={{textAlign:'center'}}>Employee Form</h2>
      <form onSubmit={handleSubmit} style={{padding:'20px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" required>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl required>
              <FormLabel component="legend">Languages Known</FormLabel>
              <FormControlLabel
                control={<Checkbox
                  checked={formData.languages.includes('telugu')}
                  onChange={handleChange}
                  name="languages"
                  value="telugu"
                />}
                label="Telugu"
              />
              <FormControlLabel
                control={<Checkbox
                  checked={formData.languages.includes('hindi')}
                  onChange={handleChange}
                  name="languages"
                  value="hindi"
                />}
                label="Hindi"
              />
              <FormControlLabel
                control={<Checkbox
                  checked={formData.languages.includes('english')}
                  onChange={handleChange}
                  name="languages"
                  value="english"
                />}
                label="English"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  );
};

export default EmployeeForm;
