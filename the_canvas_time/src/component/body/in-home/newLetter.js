import React from 'react';

function NewLetter(){

    return(
        <div className='newletter'>
            <div className='row '>
                <div className='col-5'>
                    <h3 className='mb-4 mb-lg-0'>Sign up for Updates & Newsletters.</h3>
                </div>
                <div className='col-6'>
                    <form>
                        <input type='text' placeholder="Your Email Address"></input>
                        <button>Subscribe Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default NewLetter;