// import React, { useState } from 'react';

// function useOptimistic(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   const [optimistic, setOptimisticValue] = useState(initialValue);

//   const updateOptimistic = (newValue) => {
//     setOptimisticValue(newValue); 
//     setValue(newValue); 
//   };

//   return [optimistic, updateOptimistic];
// }

// function Form() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [optimisticUsername, setOptimisticUsername] = useOptimistic(formData.username);
//   const [optimisticPassword, setOptimisticPassword] = useOptimistic(formData.password);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'username') {
//       setOptimisticUsername(value);
//     } else if (name === 'password') {
//       setOptimisticPassword(value);
//     }
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Form Submitted:', formData);
    

//     setFormData({
//       username: '',
//       password: '',
//     });
//     setOptimisticUsername('');
//     setOptimisticPassword('');
//   };

//   return (
//     <div>
//       <h2>Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={optimisticUsername} 
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={optimisticPassword} 
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

// import { prerender } from 'react-dom/static';

// async function handler(request) {
//   const {prelude} = await prerender(<exta/>, {  
//   });
//   return new Response(prelude, {
//     headers: { 'content-type': 'text/html/tsx' },
    
//   });
// }
// console.log("hey");

// function Form() {
//   return (
//     <div>      
// <button onClick={handler}>HEY</button>
//     </div>
//   )
// }
// export default Form



import React,{use} from 'react'

const fetchWeather = async () => {
    const response = await fetch('https://api.weather.com/today');
    if (!response.ok) {
      throw new Error('Failed to fetch weather');
    }
    return response.json();
  };
function Form() {
        const weather = use(fetchWeather());
  return (
    <div>
        <p style={{ color: theme.color, fontSize: theme.fontSize }}>
        This is a themed text.
      </p>
    <h1>Today's Weather</h1>
    <p>Temperature: {weather.temperature}°C</p>        
    </div>
  )
}

export default Form