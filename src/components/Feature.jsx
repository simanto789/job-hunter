import React from 'react';

const Feature = ({feature}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary} = feature
    return (
        <div className='border border-gray-200 rounded-lg p-4'>
            <img src={company_logo} alt="" />
            <p>{company_name}</p>
        </div>
    );
};

export default Feature;