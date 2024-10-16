import React from 'react';
import { useForm } from '@formspree/react';

export const useSubmitFormData = () => {
    const [state, handleSubmit] = useForm('xldrljzz');
    return [state, handleSubmit];
};