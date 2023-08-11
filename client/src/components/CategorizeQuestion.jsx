import React, { useState } from 'react'
import axios from "axios";

const CategorizeQuestion = () => {
  // const Categories = [
  //   "Indoor Sports",
  //   "Outdoor Sports",
  //   "Games",
  // ];

  // const Items = [
  //   "Chess",
  //   "Snakes & Ladders",
  //   "Business",
  //   "Cricket",
  //   "Football",
  //   "Badminton",
  //   "Tennis",
  //   "Carrom",
  //   "Basketball",
  //   "BGMI",
  //   "FF",
  //   "COC",
  //   "CR",
  //   "Hockey",
  //   "Angry bird",
  // ]

  // const [categories, setCategories] = useState();
  // const [items, setItems] = useState();
  // const [belongsTo, setBelongsTo] = useState();

  const [category, setCategory] = useState({
    categorize: {
      categories: "",
      items: "",
      belongsTo: "",
    }
  });

  const { categorize: { categories, items, belongsTo } } = category;

  const inputChange = async (e) => {
    // console.log(e.target.value);
    // setCategory({ ...category, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [fieldName, nestedField] = name.split('.');
      setCategory((prevData) => ({
        ...prevData,
        [fieldName]: {
          ...prevData[fieldName],
          [nestedField]: value
        }
      }));
    } else {
      setCategory((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

const handleClick = async (e) => {
  alert('Categorize Data had been added successfully');
  console.log(category);
  await axios.post("http://localhost:5500/api/question/addQuestion", category);
  // navigate("/question")
};

return (
  <>
    <div>
      <input type="text" placeholder="Enter your categories" name="categorize.categories" onChange={(e) => inputChange(e)} value={categories}>
      </input>

      <input type="text" placeholder="Enter your items" name="categorize.items" onChange={(e) => inputChange(e)} value={items}>
      </input>

      <input type="text" placeholder="Enter your belongsTo" name="categorize.belongsTo" onChange={(e) => inputChange(e)} value={belongsTo}>
      </input>

      <button onClick={(e) => handleClick(e)}>Add</button>
    </div>
  </>
)
}

export default CategorizeQuestion


/*
   <div>
        <p>Question 1</p>
        <h2> Categorize</h2>
        <input type="text" placeholder="Enter your question" required autocomplete="off" />

        <br />
        <br />

        Categories -
        {
          Categories.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            )
          })
        }

        // <ul>
        //         <li><input type="text" placeholder="" /></li>
        //         <li><input type="text" placeholder="" /></li>
        //         <li><input type="text" placeholder="" /></li>
        //     </ul> 

            Items -

            {
              Items.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                )
              })
            }
    
            //  <ul>
            //   <li><input type="text" placeholder="" /></li>
            //   <li><input type="text" placeholder="" /></li>
            //   <li><input type="text" placeholder="" /></li>
            // </ul> 
    
            Belongs To -
            <select>
              {
                Categories.map((item, index) => {
                  return (
                    <option key={index} value="">{item}</option>
                  )
                })
              }
            </select>
    
            // <ul>
            //   <select>
            //     <option value=""></option>
            //     <option value=""></option>
            //     <option value=""></option>
            //   </select>
            // </ul> 
          </div>
*/