import React from 'react';

const AppError = (props) => {
    
    return (
        <div className="appErr">
            {props.errMsg}        
        </div>
    );
};
export default AppError;