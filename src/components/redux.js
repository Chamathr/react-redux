import React, { useEffect } from "react";
import { fetchData } from "../redux/slices/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectDataList } from "../redux/selectors/dataSelector";

const Redux = () => {

    const dispatch = useDispatch();
    const dataList = useSelector(selectDataList)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    console.log(dataList)

    return (
        <>
        </>
    )
}

export default Redux
