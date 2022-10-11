import React from 'react';
import ReadingHistory from './in_basedOn/readingHistory';
import TheWeek from './in_basedOn/theWeek';

function BasedOn(){

    return(
        <div className='baseOn container'>
            <div className='row'>
                <ReadingHistory />
                <TheWeek />
            </div>
        </div>
    )
}
export default BasedOn;