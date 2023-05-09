import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Details = () => {
    const data = useLoaderData();
    const quiz = data.data;
    const questions = quiz.questions;

    console.log(quiz);
    return (
        <div>
            <h2 className='text-center text-2xl py-10'>Quiz of {quiz.name} </h2>

            {
                questions.map(q => <Quiz
                    key={q.id}
                    q={q}
                ></Quiz>)
            }

        </div>
    );
};

export default Details;