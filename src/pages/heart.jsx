import React, { useRef, useState } from 'react';
import img from '../assets/doctab.jpg';
import { TextField, Select, MenuItem, Button, CircularProgress, FormControl, InputLabel } from '@mui/material';
import Loader from '../components/loader';

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    age: undefined,
    chestPainType: undefined,
    BP: undefined,
    cholesterol: undefined,
    FBSOver120: undefined,
    maxHR: undefined,
    STDepression: undefined,
    slopeOfST: undefined,
    sex: undefined,
    exerciseAngina: undefined,
    EKGResults: undefined,
  });
  const [loading, setloading] = useState(false);
  const [modeloutput, setoutput] = useState(null);
  const submitbtn = useRef(null);
  // const apiurl = 'https://webcareapi.onrender.com/heart';
  const apiurl="https://reqres.in/api/users";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'number' ? parseFloat(e.target.value) : parseInt(e.target.value) || 0;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const datafomat = [
    'age',
    'sex',
    'chestPainType',
    'BP',
    'cholesterol',
    'FBSOver120',
    'EKGResults',
    'maxHR',
    'exerciseAngina',
    'STDepression',
    'slopeOfST',
  ];

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();

    // Check for null values in formData
    for (const key in formData) {
      if (formData[key] == null) {
        alert('Error: ' + key + ' is null, request does not get sent');
        setloading(false);
        return;
      }
    }

    const formatdata = [];
    for (const key of datafomat) {
      formatdata.push(formData[key]);
    }

    console.log('Formatted Data:', formatdata);

    try {
      const req = await fetch(apiurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ data: formatdata }),
      });

      console.log('Request Status:', req.status);

      if (!req.ok) {
        const errorResponse = await req.json();
        throw new Error(`HTTP error! Status: ${req.status}, Message: ${errorResponse.message}`);
      }

      const res = await req.json();
      setoutput(res);
      alert(res);
    } catch (e) {
      console.error('Error:', e.message);
      alert(`Error: ${e.message}`);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className=" container mx-auto bg-gray-100">
        {loading && <Loader />}

        <div className="bg-blue-400 flex justify-center m-8 p-4 items-center">
          <h2 className="text-2xl font-semibold mb-4 absolute">Heart Disease Prediction Form</h2>
          <img src={img} alt="" />
        </div>

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 mt-8 p-4 ">
          <TextField
            className="w-full mb-4"
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          <FormControl className="w-full mb-4">
            <InputLabel>Sex</InputLabel>
            <Select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={0}>Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="w-full mb-4">
            <InputLabel>Chest Pain Type</InputLabel>
            <Select
              name="chestPainType"
              label='>Chest Pain Type'
              value={formData.chestPainType}
              onChange={handleChange}
            >
              <MenuItem value={3}>Typical angina</MenuItem>
              <MenuItem value={1}>Atypical angina</MenuItem>
              <MenuItem value={2}>Non-anginal pain</MenuItem>
              <MenuItem value={0}>Asymptomatic</MenuItem>
            </Select>
          </FormControl>

          <TextField
            className="w-full mb-4"
            label="Resting Blood Pressure (BP)"
            type="number"
            name="BP"
            value={formData.BP}
            onChange={handleChange}
          />

          <TextField
            className="w-full mb-4"
            label="Cholesterol"
            type="number"
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
          />

          <FormControl className="w-full mb-4">
            <InputLabel id='fbs-label'>FBS over 120</InputLabel>
            <Select
              name="FBSOver120"
              value={formData.FBSOver120}
              onChange={handleChange}
              labelId='fbs-label'
              label='FBS over 120'
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="w-full mb-4">
            <InputLabel>EKG Results</InputLabel>
            <Select
                   label='EKG Results'
              name="EKGResults"
              value={formData.EKGResults}
              onChange={handleChange}
            >
              <MenuItem value={1}>Normal</MenuItem>
              <MenuItem value={2}>ST-T Wave abnormality</MenuItem>
              <MenuItem value={0}>Possible or definite left ventricular hypertrophy(LVH)</MenuItem>
            </Select>
          </FormControl>

          <TextField
            className="w-full mb-4"
            label="Maximum Heart Rate (maxHR)"
            type="number"
            name="maxHR"
            value={formData.maxHR}
            onChange={handleChange}
          />

          <FormControl className="w-full mb-4">
            <InputLabel>Exercise Induced Angina</InputLabel>
            <Select
            label='Exercise Induced Angina'
              name="exerciseAngina"
              value={formData.exerciseAngina}
              onChange={handleChange}
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Yes</MenuItem>
            </Select>
          </FormControl>

          <TextField
            className="w-full mb-4"
            label="ST Depression"
            type="number"
            name="STDepression"
            value={formData.STDepression}
            onChange={handleChange}
          />

          <FormControl className="w-full mb-4">
            <InputLabel>Slope of Peak Exercise ST Segment</InputLabel>
            <Select
            label='Slope of Peak Exercise ST Segment'
              name="slopeOfST"
              value={formData.slopeOfST}
              onChange={handleChange}
            >
              <MenuItem value={2}>Upsloping</MenuItem>
              <MenuItem value={1}>Flatsloping</MenuItem>
              <MenuItem value={0}>Downslopins</MenuItem>
            </Select>
          </FormControl>

          <button
            type="submit"
            className="w-15 justify-self-center bg-blue-700 text-white py-2 px-4 rounded hover:bg-gray-950 grid-cols-1 col-span-2"
            disabled={loading}
          
          >
            {loading ? (
              <>
                Submit <CircularProgress size={20} style={{ marginLeft: '10px' }} />
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default HeartDiseaseForm;
