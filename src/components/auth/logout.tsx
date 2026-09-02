import { Button } from '../ui/button'
import { useAuthStore } from '@/stores/useAuthStote';
import { useNavigate } from 'react-router';

const Logout = () => {
    const { signOut } = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut();
            navigate("/signin")
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Button onClick={handleLogout}>Đăng Xuất</Button>
    )
}

export default Logout