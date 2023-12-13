import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(0);
   

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://challenge3-nine.vercel.app/api/random');
      // setNumber(response.data.randomNumber);
      setRandomNumber(response.data.randomNumber);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (randomNumber < 0) {
      fetchData();
    }
  }, [randomNumber]);

const decreaseNum = num => {
  if(num < 1 ){
    fetchData();
  }
  setRandomNumber(num => num-1);
}

  useEffect(() => {
    const interval = setInterval(() => {
      decreaseNum(randomNumber);
      }, 1000);
      console.log(randomNumber, 'ques')
    return () => clearInterval(interval);
  }, [randomNumber]);

  const fetchData = async () => {
    const response = await axios.get('https://challenge3-nine.vercel.app/api/random');
    // setNumber(response.data.randomNumber);
    setRandomNumber(response.data.randomNumber);
  
  };
  const arrayWithIndices = Array.from({ length: randomNumber }, (_, index) => index);
  return (
    <div className="App bg-blue-800 w-[100%] min-h-screen  flex justify-center items-center">
     
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {arrayWithIndices.map((num,index) => 
        {return (<div key={index} className='h-[10rem] w-[10rem] bg-blue-600 p-5 rounded-lg shadow-lg  border-white border flex justify-center items-center text-white font-bold mx-5 my-3'>{num + 1}</div>)})}
        
      </div>
    </div>
  );
};

export default App;
