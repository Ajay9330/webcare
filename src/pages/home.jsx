import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const fieldNames = [
  'Age',
  'Chest pain type',
  'BP',
  'Cholesterol',
  'FBS over 120',
  'Max HR',
  'ST depression',
  'Number of vessels fluro',
  'Thallium',
  'Heart Disease',
  'Sex_0',
  'Sex_1',
  'Exercise angina_0',
  'Exercise angina_1',
  'Slope of ST_1',
  'Slope of ST_2',
  'Slope of ST_3',
  'EKG results_0',
  'EKG results_1',
  'EKG results_2'
];

function Home() {
  // Initialize state for form inputs
  const [formValues, setFormValues] = useState({});

  // Handle input changes and update state

  return (
    <>
      <div className='bg-slate-500'>
        <h1 className='w-full bg-slate-500 text-center text-6xl p-9'>
          Your Webcare is here
        </h1>
        <div>
        
<form >
 <fieldset className='border border-black flex flex-wrap justify-evenly '>
  <legend>Enter your Data</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"/>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"/>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"/>
  <input type="submit" value="Submit"/>
 </fieldset>
</form>
        </div>
      </div>
    </>
  );
}

export default Home;
