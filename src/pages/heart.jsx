import React, { useState } from 'react';
import img from '../assets/doctab.jpg'



const createBooleanArray = (n, i) => {
  if (n < 0 || i < 0 || i >= n) {
    throw new Error('Invalid array size or index');
  }

  return Array.from({ length: n }, (_, index) => (index === i ? 1 : 0));
};

// Example usage
const n = 5;
const i = 2;
const booleanArray = createBooleanArray(n, i);
console.log(booleanArray);

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    age: undefined,
    chestPainType: undefined,
    BP: undefined,

    cholesterol: undefined,
    FBSOver120: undefined,
    maxHR: undefined,
    STDepression: undefined,

    numVesselsFluro: undefined,
    thallium: undefined,
    slopeOfST: undefined,
    sex: undefined,
    exerciseAngina: undefined,
    EKGResults: undefined,
   
     });

  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'number' ? parseFloat(e.target.value) : parseInt(e.target.value) || 0;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 'Age', 'Chest pain type', 'BP', 'Cholesterol', 'FBS over 120', 'Max HR',
  //      'ST depression', 'Number of vessels fluro', 'Thallium', 'Heart Disease',
  //      'Sex_0', 'Sex_1', 'Exercise angina_0', 'Exercise angina_1',
  //      'Slope of ST_1', 'Slope of ST_2', 'Slope of ST_3', 'EKG results_0',
  //      'EKG results_1', 'EKG results_2']

  const datafomatandcount = [
    { "age": 1 }, { "chestPainType": 1 }, { "BP": 1 }, { "FBSOver120": 1 }, { "maxHR": 1 },
    { "STDepression": 1 }, { "numVesselsFluro": 1 }, { "thallium": 1 }, { "sex": 2 },
    { "exerciseAngina": 2 }, { "slopeOfST": 3 },  { "EKGResults": 3 }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    for (const key in formData) {
      if (formData[key] == null) {
        alert('Error: ' + key + ' is null');
        return; // Exit the loop if an error is found
      }
    }
    const formatdata = [];
    for (const item of datafomatandcount) {
      for (const key in item) {
        console.log(formData[key]);
        if(item[key]!=1){
          console.log("value:"+createBooleanArray(item[key],formData[key]));
          formatdata.push(...createBooleanArray(item[key],formData[key]));
        }else{
          formatdata.push(formData[key]);
        }
      }
    }
    
    console.log(formatdata);
    // If no error is found, proceed with form submission logic
    console.log('Form data submitted:', formData);
  };
  
  return (
    <div className=" container mx-auto bg-gray-100">
      <div className='bg-blue-400 flex justify-center m-8 p-4 items-center'>
      <h2 className="text-2xl font-semibold mb-4 absolute">Heart Disease Prediction Form</h2>
      <img src={img} alt="" />
      </div>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 mt-8 p-4 ">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Sex:</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >   <option value="none" selected disabled hidden>Select an Option</option> 
            <option value={1}>Male</option>
            <option value={0}>Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Chest Pain Type:</label>
          <select
            name="chestPainType"
            value={formData.chestPainType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
             <option value="none" selected disabled hidden>Select an Option</option> 
            <option value={0}>Typical angina</option>
            <option value={1}>Atypical angina</option>
            <option value={2}>Non-anginal pain</option>
            <option value={3}>Asymptomatic</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Resting Blood Pressure (BP):</label>
          <input
            type="number"
            name="BP"
            value={formData.BP}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Cholesterol:</label>
          <input
            type="number"
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">FBS over 120:</label>
          <select
            name="FBSOver120"
            value={formData.FBSOver120}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          > <option value="none" selected disabled hidden>Select an Option</option> 
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">EKG Results:</label>
          <select
            name="EKGResults"
            value={formData.EKGResults}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          > <option value="none" selected disabled hidden>Select an Option</option> 
            <option value={0}>Nothing to note</option>
            <option value={1}>ST-T Wave abnormality</option>
            <option value={2}>Possible or definite left ventricular hypertrophy</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Maximum Heart Rate (maxHR):</label>
          <input
            type="number"
            name="maxHR"
            value={formData.maxHR}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Exercise Induced Angina:</label>
          <select
            name="exerciseAngina"
            value={formData.exerciseAngina}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          > <option value="none" selected disabled hidden>Select an Option</option> 
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">ST Depression:</label>
          <input
            type="number"
            name="STDepression"
            value={formData.STDepression}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Slope of Peak Exercise ST Segment:</label>
          <select
            name="slopeOfST"
            value={formData.slopeOfST}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          > <option value="none" selected disabled hidden>Select an Option</option> 
            <option value={0}>Upsloping</option>
            <option value={1}>Flatsloping</option>
            <option value={2}>Downslopins</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Number of Major Vessels (Fluro):</label>
          <input
            type="number"
            name="numVesselsFluro"
            value={formData.numVesselsFluro}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Thallium Stress Result:</label>
          <select
            name="thallium"
            value={formData.thallium}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          > <option value="none" selected disabled hidden>Select an Option</option> 
            <option value={0}>Normal</option>
          
            <option value={1}>Fixed Defect</option>
            <option value={2}>Reversible Defect</option>
          </select>
        </div>

        <button
          type="submit"
          className=" justify-self-center w-32 bg-blue-500 text-white py-2 px-4 rounded col-start-1 sm:col-span-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HeartDiseaseForm;
