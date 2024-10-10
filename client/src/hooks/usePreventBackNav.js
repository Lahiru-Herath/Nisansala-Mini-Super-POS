import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const usePreventBackNav = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.history.pushState(null, '', window.location.href);
        const handlePopState = () => navigate(1);

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);
}

export default usePreventBackNav;