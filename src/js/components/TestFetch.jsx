
import React from 'react'
import PropTypes from 'prop-types'

const TestFetch = ({ content, fetchBaidu }) => (
    <div onClick={() => fetchBaidu()}>
        TestFetch
        <div>
            {content}
        </div>
    </div>
)

export default TestFetch