import React from 'react';
import successProfileAvatar from './successProfile.svg';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <div className='successPageMain commonContentWrapper'>
            <div className='successPageWrapper'>
                <div className='successPageAvatar padding-top-bottom-20'>
                    <img alt="" src={successProfileAvatar} />
                </div>
                <div className='successMessage padding-top-bottom-20'>Lead added to Sales Pipeline successfully!</div>
                <div className='successSubMessage padding-top-bottom-20'>This is Awesome!</div>
                <div className='successBtnWrappers padding-top-bottom-20'>
                    <Button variant="outlined" disabled>Sales Pipeline</Button>
                    <Button variant="outlined">
                        <Link to='/'>Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default SuccessPage;