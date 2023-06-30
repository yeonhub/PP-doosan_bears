import React from 'react';
import DoosanTable from './DoosanTable';

const DoosanProfile = ({ data }) => {
    return (
        <>
            <table className='tb profile'>
                <caption></caption>
                {
                    <DoosanTable data={data} />
                }

            </table>
        </>
    );
};

export default DoosanProfile;