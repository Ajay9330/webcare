import React, { useEffect, useState } from 'react'
import Loader from '../components/loader'
import img from '../assets/doctab.jpg';
import { FormControl ,Input,InputLabel} from '@mui/material';
import img2 from '../assets/bgrnd.jpg';
function Deases() {
  const apiurl='https://webcareapi.onrender.com/disease';
  const [loading,setloading]=useState(false);
  const [modeloutput, setoutput] = useState(-1);
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
    console.log(disease);
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
    // alert(index)
    setremain([...remain,disease[index]]);
    console.log(remain);
    const newDiseaseList = [...disease];
    newDiseaseList.splice(index, 1);
    setdisease(newDiseaseList);
    console.log(disease);
    console.log(remain);
  
  }

  const handlesearchsuggest = (val) => {
    if (val === '' || val === undefined || val === null) {
      setsuggest([]);
      return;
    }
  
    if (val.length > 0) {
      const matchingSuggestions = remain.filter((symptom) =>
        symptom.toLowerCase().includes(val.toLowerCase())
      );
      setsuggest(matchingSuggestions);
    } else {
      setsuggest([]);
    }
  };
  
  useEffect(() => {
    handlesearchsuggest(currinput);
  }, [currinput]);
  
  useEffect(() => {
    console.log(suggest);
  }, [suggest]);
  

  const handleSubmit = async () => {
    // alert("hi")
    setloading(true);
    if (disease.length < 3) {
      alert("Add more than three diseases");
      setloading(false);
      return;
    }

    var newDiseaseList = [...disease];
    for (let i = 0; i < 17-disease.length; i++) {
      newDiseaseList.push('');
    }
    console.log(disease);
    // return;
    try {
      const req = await fetch(apiurl, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ inputs: newDiseaseList }),
      });

      if(req.ok){
        const d=await req.json();
        setoutput(d.disease);
        // alert(JSON.stringify(d));
        // alert(d.disease);
        // alert(d);
        
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setloading(false);
    }
  }


  return (<>
{loading && <Loader/>}
        <div >
          <div className=' justify-center flex sm:p-6 items-center bg-gray-300'>
            <img className='h-64 w-full object-cover' src={img} alt="" />
            <h1 className='absolute bg-slate-50 bg-opacity-45 md:text-6xl backdrop-blur-[2px]  backd p-6 backdrop-brightness-200 md:m-10 text-center'>I'll Predict the Disease based on the symtoms</h1>
          </div >
          <section className=' md:m-14   '>
            <div className='justify-center items-center flex border-2 border-black rounded-lg border-opacity-30 bg-blue-100 m-5 mt-0 p-1 sm:p-12 flex-wrap'>
            <FormControl fullWidth className='flex-row '>
            <InputLabel   htmlFor="my-input border-4">Add Symtoms</InputLabel>
            <Input className=' border-4 bg-slate-200 outline-4' id="my-input"value={currinput} onChange={(e)=>setcurrinput(e.target.value)} aria-describedby="my-helper-text" />
            <div className='w-full bg-white flex-wrap  justify-center flex'>
                {
                    suggest.map(sym => <div onClick={() => {addinput(sym);setsuggest([])} } className=' break-al justify-around  border-2 rounded-md py-1 px-1 m-2 cursor-pointer  border-blue-500 bg-blue-200 flex items-center' ><span className='border-2 rounded-md px-2 cursor-pointer break-words'>{sym}</span><span class="material-symbols-outlined ">
                    add_circle
                    </span> </div>)
                }
            </div>
          </FormControl>
         
          <button className='m-4 bg-red-100 p-2 rounded-xl transition-all active:bg-blue-500 active:text-white w-20' onClick={()=>handleSubmit()}>Check</button>
          </div>
          <div className='mx-10 flex flex-wrap justify-evenly'>
{(disease.length<3)&&<p className='text-red-500'>"Please add atleast 3 symtoms"</p> }<p className='text-green-500'>you can add still {17-disease.length} symtoms</p> 
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
        
          <div className={`m-2 sm:m-10 text-center p-3 ${modeloutput === 0 ? "bg-red-400" : modeloutput === -1 ? "bg-gray-400 text-black" : "bg-green-400 text-blue-800"}`}>
    <span className=" text-xl">
        {modeloutput != -1
            ? modeloutput
            :
               "Model output is not available"
             }
    </span>
          <button className='block m-auto bg-blue-300 p-4 rounded-lg w-32 text-black uppercase mt-4 active:bg-blue-400' onClick={()=>setoutput(-1)} >clear</button>
</div>
        </div>
    
  </>
   
  )
}

export default Deases