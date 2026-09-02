import Logout from '@/components/auth/logout'
import { Button } from '@/components/ui/button';
import api from '@/lib/axios';
import { useAuthStore } from '@/stores/useAuthStote'
import { toast } from 'sonner';

const ChatAppPage = () => {
    const user = useAuthStore((s) => s.user);
    const handleOnClick = async () => {
        try {
            await api.get("/users/test", { withCredentials: true });
            toast.success("ok");
        } catch (error) {
            console.error(error);
            toast.error("thất bại")
        }
    }
    return (
        <>
            <Logout></Logout>
            {user?.username}

            <Button onClick={handleOnClick}>test</Button>
        </>

    )
}

export default ChatAppPage