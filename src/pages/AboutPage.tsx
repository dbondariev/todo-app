import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1> Information Page</h1>
            <p>
                This is To Do List App v1.0.0
                Using React, TypeScript, React Router, React Hooks, Context, Materialize CSS
            </p>
            <button className="btn" onClick={() => navigate('/')}>
                Back to the list
            </button>
        </>
    );
};
