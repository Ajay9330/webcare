import React, { useState } from 'react'
import Loader from '../components/loader'
import img from '../assets/heart.jpg';
import { FormControl ,Input,InputLabel} from '@mui/material';
function Deases() {
  const apiurl='https://localhost:5500/disaes';
  const [loading,setloading]=useState(false);
  const [disease,setdisease]=useState([]);
  const [suggest,setsuggest]=useState([]);
  const [currinput,setcurrinput]=useState("");
  const [remain,setremain]=useState(['itching', 'skin_rash', 'nodal_skin_eruptions',
  'continuous_sneezing', 'shivering', 'chills', 'joint_pain',
  'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting',
  'vomiting', 'burning_micturition', 'spotting_urination', 'fatigue',
  'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings',
  'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat',
  'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes',
  'breathlessness', 'sweating', 'dehydration', 'indigestion',
  'headache', 'yellowish_skin', 'dark_urine', 'nausea',
  'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain',
  'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever',
  'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure',
  'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes',
  'malaise', 'blurred_and_distorted_vision', 'phlegm',
  'throat_irritation', 'redness_of_eyes', 'sinus_pressure',
  'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs',
  'fast_heart_rate', 'pain_during_bowel_movements',
  'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus',
  'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity',
  'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes',
  'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties',
  'excessive_hunger', 'extra_marital_contacts',
  'drying_and_tingling_lips', 'slurred_speech', 'knee_pain',
  'hip_joint_pain', 'muscle_weakness', 'stiff_neck',
  'swelling_joints', 'movement_stiffness', 'spinning_movements',
  'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side',
  'loss_of_smell', 'bladder_discomfort', 'foul_smell_ofurine',
  'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching',
  'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain',
  'altered_sensorium', 'red_spots_over_body', 'belly_pain',
  'abnormal_menstruation', 'dischromic_patches',
  'watering_from_eyes', 'increased_appetite', 'polyuria',
  'family_history', 'mucoid_sputum', 'rusty_sputum',
  'lack_of_concentration', 'visual_disturbances',
  'receiving_blood_transfusion', 'receiving_unsterile_injections',
  'coma', 'stomach_bleeding', 'distention_of_abdomen',
  'history_of_alcohol_consumption', 'blood_in_sputum',
  'prominent_veins_on_calf', 'palpitations', 'painful_walking',
  'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling',
  'silver_like_dusting', 'small_dents_in_nails',
  'inflammatory_nails', 'blister', 'red_sore_around_nose',
  'yellow_crust_ooze', 'prognosis']);

  const addinput = (val) => {
    console.log(remain);
    const ind=remain.indexOf(val);
    console.log(ind);
    if(ind==-1){alert(val+" is not in the list");return;}
    setdisease([...disease, val]);
    // const ind=remain.indexOf(val);
    const newDiseaseList = [...remain];
    newDiseaseList.splice(ind, 1);
    setremain(newDiseaseList);
    console.log(disease);
    console.log(remain);
  }

  const remvoeinput = (index) => {
    setremain(...remain,disease[index]);
    console.log(remain);
    const newDiseaseList = [...disease];
    newDiseaseList.splice(index, 1);
    setdisease(newDiseaseList);
    console.log(disease);
    console.log(remain);
  
  }

  const handlesearchsuggest = (val) => {
    if (val === '' || val === undefined || val === null) {
      return;
    }
    setsuggest([]);
  }

  const handleSubmit = async () => {
    setloading(true);
    if (disease.length < 4) {
      alert("Add more than three diseases");
      setloading(false);
      return;
    }

    const newDiseaseList = [...disease];
    for (let i = 0; i < newDiseaseList.length; i++) {
      newDiseaseList.push("");
    }
    
    try {
      const req = await fetch(apiurl, {
        method: "post",
        headers: {
          'content-type': 'json'
        },
        body: JSON.stringify({ data: newDiseaseList }),
      });

      // Handle the response...
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setloading(false);
    }
  }


  return (<>

        <div>
          <div className=' justify-center flex m-6 items-center '>
            <img className='h-64 w-full' src={img} alt="" />
            <h1 className='absolute bg-slate-50 bg-opacity-45 md:text-6xl backdrop-blur-[2px]  backd p-6 backdrop-brightness-200 md:m-10 text-center'>We Predict the disaes based on the symtoms</h1>
          </div >
          <section className=' md:m-14  '>
            <div className='justify-center items-center flex  bg-blue-300 m-5  p-12 flex-wrap'>
            <FormControl className='flex-row '>
            <InputLabel   htmlFor="my-input border-4">Add Symtoms</InputLabel>
            <Input className=' border-4 bg-slate-200 outline-4' id="my-input"value={currinput} onChange={(e)=>setcurrinput(e.target.value)} aria-describedby="my-helper-text" />
      
          </FormControl>
          <button className='m-4 bg-red-100 p-2 rounded-xl transition-all active:bg-blue-500 active:text-white w-20' onClick={()=>addinput(currinput)}>Add</button>
          </div>
          <div className='mx-10 flex flex-wrap justify-evenly'>
{(disease.length<3)&&<> <p className='text-red-500'>"Please add atleast 3 symtoms"</p> <p className='text-green-500'>you can add still {17-disease.length} symtoms</p> </>}
          </div>
          <fieldset  className=' bg-gray-300 border-2 bg-opacity-65 border-orange-300'>
            <legend className='text-center'>Your selected Diseases</legend>
            <div className=' flex-start items-start m-3 mb-4'>
            {disease.map((x,v)=>{
            return( <div key={v} className='inline-flex items-center bg-opacity-75 border border-blue-500 bg-blue-300 m-3 p-2 rounded-lg'>
<span className=''>{x}</span><span class="material-symbols-outlined cursor-pointer" onClick={()=>remvoeinput(v)}>
close
</span>
            </div> )
          })}
             
            </div>
          </fieldset>
          </section>
        
         
        </div>
    
  </>
   
  )
}

export default Deases