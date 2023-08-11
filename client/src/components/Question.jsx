import React, { useState } from 'react'
import CategorizeQuestion from './CategorizeQuestion'
import ClozeQuestion from './ClozeQuestion'
import ComprehensionQuestion from './ComprehensionQuestion'
import { useNavigate } from 'react-router-dom';

import axios from "axios";

// const Question = () => {
//   let navigate = useNavigate();

//   const [selectedOption, setSelectedOption] = useState(false);

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value)
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5500/api/question/addQuestion");
//     // alert('Data had been added successfully');
//     // navigate("/question")
//   };


//   return (
//     <>
//       <form onSubmit={e => handleSubmit(e)}>
//         <select onChange={(e) => handleOptionChange(e)}>
//           <option value="Categorize">Categorize</option>
//           <option value="Cloze">Cloze</option>
//           <option value="Comprehension">Comprehension</option>
//         </select>

//         <div>
//             { selectedOption === 'Categorize' && <CategorizeQuestion />}
//             { selectedOption === 'Cloze' && <ClozeQuestion />}
//             { selectedOption === 'Comprehension' && <ComprehensionQuestion />}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )

// }

const Question = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  // dropdown
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  };

  const [quesForm, setQuesForm] = useState({
    questionTypeId: "",
    questionType: "",
    categorizeQuestion: {
      categories: "",
      items: "",
      belongsTo: ""
  },
    clozeQuestion: {
      cqQues: "",
      cqRes: ""
    },
    comprehensionQuestion: {
      compText: "",
      compQuesId: "",
      compQues: ""
    }
  })

  const { questionTypeId, questionType, categorizeQuestion: { categories, items, belongsTo }, clozeQuestion: { cqQues, cqRes }, comprehensionQuestion: { compText, compQuesId, compQues } } = quesForm;

  const inputChange = (e) => {
    // console.log({[e.target.name]: e.target.value});
    // setQuesForm({ ...quesForm, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    setQuesForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
    // console.log({ [name]: value });
  };

  const handleClick = async (e) => {
    alert('Categorize Data had been added successfully');
    console.log(quesForm.categorizeQuestion)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5500/api/question/addQuestion", quesForm);
      alert('Data had been added successfully');
      console.log(quesForm);
      // navigate("/question")
    }
    catch (err) {
      console.log(err)
    }
  };


  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <p>Question No - {questionTypeId} </p>

        <select onChange={(e) => handleOptionChange(e)}>
          <option value="Categorize">Categorize</option>
          <option value="Cloze">Cloze</option>
          <option value="Comprehension">Comprehension</option>
        </select>


        {/* Categorize Question */}
        <div>
          {/* <input type="text" placeholder="Enter your categories" name="categories" onChange={(e) => inputChange(e)} value={categories}>
          </input> */}

          <input type="text" placeholder="Enter your categories" name="categories" onChange={inputChange} autoComplete='off' required>
          </input>

          <input type="text" placeholder="Enter your items" name="items" onChange={inputChange} autoComplete='off' required>
          </input>

          <input type="text" placeholder="Enter your belongsTo" name="belongsTo" onChange={inputChange} autoComplete='off' required>
          </input>

          {/* <button onClick={(e) => handleClick(e)}>Add</button> */}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
};

export default Question


/*
let type = "";

{
  (type == "Categorize") ? <CategorizeQuestion /> : "Didn't found categories"
    (type == "Cloze") ? <Cloze /> : "Didn't found categories"
      (type == "Comprehension") ? <ComprehensionQuestion /> : "Didn't found categories"
}
{
  <>
    <option value="Categorize">Categorize</option>
    <div>
      {
        (type == "Categorize") ? <CategorizeQuestion /> : ""
      }
    </div>
  </>
}

*/