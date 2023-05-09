import React from 'react';

const Topic = ({ topic }) => {
    const { id, log, name, total } = topic;
    console.log(topic);
    return (
        <div>
            <h2 className='text-center text-2xl my-10 border-2 py-5 border-fuchsia-400 w-1/2 m-auto rounded'>Topics {id} : {name}</h2>


        </div>
    );
};

export default Topic;