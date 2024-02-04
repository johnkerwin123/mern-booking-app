import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../api-client';
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {

    const queryClient = useQueryClient();

    const { showToast } = useAppContext();
 
    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {  
            // show toast
            await queryClient.invalidateQueries("validateToken");
            showToast({ message: "Signed Out!", type: "SUCCESS" });
        },
        onError: (error: Error) => {
            // show toast
            showToast({ message: error.message, type: "ERROR" });
        },
    });

    const handleClick = () => {
        mutation.mutate();
    };

    return (
        <button 
          onClick={handleClick} 
          className="text-white px-3 py-1 font-medium bg-gray-500 rounded-sm hover:text-orange-400"
        >
          Sign Out
        </button>
    );
};

export default SignOutButton;