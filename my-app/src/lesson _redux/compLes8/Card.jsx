import React from 'react'
// import { useDispatch } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { discover } from '../Storeless8/Memory'

const Card = (props) => {

    const dispatch = useDispatch()
    const { id, name, status } = { ...props }

    return (
        <>
            <div
                onClick={() => dispatch(discover(props))}

                id={id} style={{ height: '150px', width: '200px', backgroundColor: 'aqua', borderStyle: 'solid red',margin:'15px' }}>card</div>
        </>
    )

}
export default Card