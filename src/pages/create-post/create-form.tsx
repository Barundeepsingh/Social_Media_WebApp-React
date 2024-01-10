import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';


//creating interface for the form data
interface createFormData{
    title: string;
    description: string;
}

export const CreateForm = () => {
    const [user] =useAuthState(auth);
    const navigate = useNavigate();

    //creating Schema for the Form
    const schema = yup.object().shape({
        title: yup.string().required("Title is Required"),
        description: yup.string().required("Description is Required"),
    });
    
    //using the useForm hook to register the form
    const {register, handleSubmit, formState: {errors}} = useForm<createFormData>({
        resolver: yupResolver(schema),
    });


    //connecting to database
    const postsRef = collection(db, "posts");

     //Handling Data of the form after submit in database
    const onCreatePost = async (data: createFormData) =>{
        await addDoc(postsRef,{
            ...data,
            username: user?.displayName,
            userId: user?.uid
        })
        //navigating to homePage after Submiting the Form
        navigate('/');
    };

    return( 
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title...' {...register("title")}/>
            <textarea placeholder='Description...'{...register("description")} />
            <p>{errors.description?.message}</p>
            <p>{errors.title?.message}</p>
            <input type='submit' className='submitForm'/>
        </form>
    );
};