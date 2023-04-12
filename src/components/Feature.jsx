import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({feature}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary} = feature
    return (
        <div className='border border-gray-200 rounded-lg p-4'>
            <img className='mb-3 w-25 h-10' src={company_logo} alt="" />
            <p className='mb-2 font-medium'>{job_title}</p>
            <p className='mb-2'>{company_name}</p>
            <div className='flex gap-5 mb-2'>
                <p className='border-solid border-2 border-yellow-600 p-2'>{remote_or_onsite}</p>
                <p className='border-solid border-2 border-yellow-600 p-2'>{fulltime_or_parttime}</p>                
            </div>
            <div className='flex gap-5 mb-2'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
           <Link to= {`/job/${feature.id}`}><button className='btn mb-5 mt-3'>View Details</button></Link>
            
        </div>
    );
};

export default Feature;