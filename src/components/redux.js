import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../redux/actions/dataAction";
import { connect } from "react-redux";

const Redux = (props) => {

    const {
        dataState: {
            data,
            loading,
        }
    } = props;

    //   const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        </>
    )
}

const mapStateToProps = (state) => ({
    dataState: state.data
});

export default connect(mapStateToProps, {
    getData
})(Redux);