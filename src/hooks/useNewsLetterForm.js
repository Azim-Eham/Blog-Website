import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useNewsLetterForm(){
    const [subscribers, setSubscribers] = useLocalStorage('newsLetter-subscribers', []);
    const [formState, setFormState] = useState({
        formData: {
            email: '',
            name: '',
            interests: [],
        },
        errors:{
            isSubmitting:false,
            isSuccess: false,
        }
    });
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const validateForm = () => {
        const errors = {};
        if (!formState.formData.email){
            errors.email = 'Email is required'
        }else if(!validateEmail(formState.formData.email)){
            errors.email = 'Please enter a valid email address'
        }

        setFormState((prev) => ({...prev, errors}))

        return Object.keys(errors).length === 0;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState((prev) => ({...prev, formData: {...prev.formData, [name]: value}}));
    }

    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        setFormState((prev) => {
            const interests = prev.formData.interests || [];

            if (checked){
                return{
                    ...prev, formData: {
                        ...prev.formData, interests: [...interests, name],
                    },
                }
            }else{
                return{
                    ...prev, formData: {
                        ...prev.formData, interests: interests.filter((interest) => interest !== name),
                    }
                }
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validateForm()){
            return;
        }

        setFormState((prev) => ({...prev, isSubmitting: true,}));

        try{
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubscribers([...subscribers, formState.formData]);

            setFormState({
                formData: {
                    email: '',
                    name: '',
                    interests: [],
                },
                errors:{
                    isSubmitting: false,
                    isSuccess: true,
                }
            })

            setTimeout(() => {
                setFormState((prev) => ({...prev, isSuccess: false}))
            }, 3000);
        }catch(error){
            setFormState((prev) => ({
                ...prev, 
                errors:{...prev.errors, form: 'Failed to subscribe.Please try again later'},
                isSubmitting: false,
            }))
        }
    }

    return {
        formState,
        handleChange,
        handleCheckboxChange,
        handleSubmit,
        resetForm: () => setFormState({
            formData: {
                email: '',
                name: '',
                interests: [],
            },
            errors:{
                isSubmitting: false,
                isSuccess: false
            }
        })
    }
}

export default useNewsLetterForm;