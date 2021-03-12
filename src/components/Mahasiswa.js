import { useDispatch } from "react-redux";
import Select from "./Select";
import {setAspek1, setAspek2, setAspek3, setAspek4} from '../config';
import UserImg from '../img/user.png';

const Mahasiswa = ({nama}) => {
    
    const dispatch = useDispatch();

    return (
        <div className="item">
            <div className="label w-20">
                <img src={UserImg} alt="user"/>
                <span>{nama}</span>
            </div>
            <Select onChange={e => {dispatch(setAspek1(nama, e.target.value))}} />
            <Select onChange={e => {dispatch(setAspek2(nama, e.target.value))}} />
            <Select onChange={e => {dispatch(setAspek3(nama, e.target.value))}} />
            <Select onChange={e => {dispatch(setAspek4(nama, e.target.value))}} />
        </div>
    )
}

export default Mahasiswa;