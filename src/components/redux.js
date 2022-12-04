import React, { useEffect } from "react";
import { getData } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const Redux = () => {

    const dispatch = useDispatch();

    // const {
    //     dataState: {
    //         data,
    //         loading,
    //     }
    // } = props;

    useEffect(() => {
        dispatch(getData())
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
