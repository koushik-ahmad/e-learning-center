import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
    const topics = useLoaderData();
    const topicsData = topics.data;
    return (
        <div>
            {
                topicsData.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
            
        </div>
    );
};

export default Topics; 