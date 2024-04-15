import { useSelector } from "react-redux";


export function useAuth() {
    const {email, token, id, name, surname} = useSelector(state => state.user);

    return {
        isAuth: !!id,
        email,
        token,
        id,
        name,
        surname
    }
}


/*
export function useAuth() {
    const {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}
*/