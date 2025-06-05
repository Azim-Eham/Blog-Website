import { useState, useCallback } from "react";

function useToast(){
    const [toast, setToast] = useState({
        message: '',
        type: 'info',
        isVisible: false,
    });

    const showToast = useCallback((message, type = 'info') => {
        setToast({
            message,
            type,
            isVisible: true,
        });
    }, []);

    const hideToast = useCallback(() => {
        setToast(prev => ({
            ...prev,
            isVisible: false,
        }))
    }, []);

    return {
        toast,
        showToast,
        hideToast,
    }
}

export default useToast;