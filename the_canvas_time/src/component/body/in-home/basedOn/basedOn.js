import React from 'react';
import ReadingHistory from './in_basedOn/readingHistory';
import TheWeek from './in_basedOn/theWeek';

function BasedOn({ bgDarkHome }) {

    return (
        <div className='baseOn container'>
            <div className='row'>
                <ReadingHistory bgDarkHome={bgDarkHome} />
                <TheWeek bgDarkHome={bgDarkHome} />
            </div>
        </div>
    )
}
export default BasedOn;