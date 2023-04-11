import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Assignment 1', mark: 57 },
  { name: 'Assignment 2', mark: 60 },
  { name: 'Assignment 3', mark: 60 },
  { name: 'Assignment 4', mark: 59 },
  { name: 'Assignment 5', mark: 60 },
  { name: 'Assignment 6', mark: 60 },
  { name: 'Assignment 7', mark: 52 },
];

const Statistics = () => {
    return (
        <div className='my-container'>
          <h1 className='font-semibold mb-2 text-lg'>Assignment Marks Statistics</h1>
          <p className='mb-10'>Here is an area chart displaying  marks per assignment.</p>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="mark" stroke="#CA6F1E" fill="#F39C12" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );
    };
    
export default Statistics;