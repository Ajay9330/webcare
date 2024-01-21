import React, { useState } from 'react';
import img from '../assets/doctab.jpg'
const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    age: 0,
    sex: 0,
    chestPainType: null,
    BP: 0,
    cholesterol: 0,
    FBSOver120: 0,
    EKGResults: 0,
    maxHR: 0,
    exerciseAngina: 0,
    STDepression: 0,
    slopeOfST: 0,
    numVesselsFluro: 0,
    thallium: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
          >
            <option value={0}>Male</option>
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
          >
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
          >
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
          >
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
          >
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
          >
            <option value={0}>Normal</option>
            <option value={1}>Normal</option>
            <option value="6">Fixed Defect</option>
            <option value="7">Reversible Defect</option>
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
