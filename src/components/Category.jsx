import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <div className='border border-gray-200 rounded-lg p-4 bg-orange-100'> 
                    <img src={category.logo} alt="" />
                    <p className='font-medium mt-2 mb-2'>{category.name}</p>
                    <p>{category.jobs_available}+ available job</p>
                </div>
        </div>
    );
};

export default Category;