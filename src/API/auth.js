import axios from 'axios';

export const usersignup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("http://localhost:5000/Signup", data, config);

  return response;
};

export const userLogin = async(data)=>{
    
}