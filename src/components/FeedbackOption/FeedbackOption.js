import PropTypes from 'prop-types'
// import FeedbackOption from '.'
import stl from './feedbackOption.module.css'

function FeedbackOption({ options, onLeaveFeedback }) {

    const elements = options.map(option => (
        <button
            key={option}
            type='button'
            className={stl.feedback_btn}
            onClick={() => onLeaveFeedback(option)}>
            {option}</button>
    ))
    return (
        <div className={stl.feedback_btn_block}>
            {elements}
        </div>
        // <div className={stl.feedback_btn_block}>
        //     <h1 className={stl.title}>Please, leave feedback</h1>
        //     <ul className={stl.feedback_btn_list}>
        //         <li className={stl.feedback_btn}><button type='button' onClick={() => onGoodFb(good)}>Good</button></li>
        //         <li className={stl.feedback_btn}><button type='button' onClick={() => onNeuFb(neutral)}>Neutral</button></li>
        //         <li className={stl.feedback_btn}><button type='button' onClick={() => onBadFb(bad)}>Bad</button></li>
        //     </ul>
        // </div>

    )
};

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
};

FeedbackOption.defaultProps = {
    options: []
};

export default FeedbackOption;