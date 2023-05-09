import React from 'react';

const Quiz = ({q}) => {
    const { id, options, question } = q;
    console.log(q);
    return (
        <div>
            <p className='text-center text-xl my-8 w-1/2 m-auto text-lime-500'> Quiz : {question}</p>
            <div className='grid grid-cols-2 gap-5 w-3/4 m-auto text-center'>
                <p className='border-2 border-purple-500 py-8 rounded'>{options[0]}</p>
                <p className='border-2 border-purple-500 py-8 rounded'>{options[1]}</p>
                <p className='border-2 border-purple-500 py-8 rounded'>{options[2]}</p>
                <p className='border-2 border-purple-500 py-8 rounded'>{options[3]}</p>
            </div>

        </div>
    );
};

export default Quiz;