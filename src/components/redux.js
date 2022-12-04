import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../redux/actions/dataAction";

const Redux = () => {

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

    useEffect(() => {
        getData()
    },[])

    return(
        <>
        </>
    )
}

export default Redux