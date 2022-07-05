import React from 'react';
import styles from './Buttons.module.css';

class Buttons extends React.Component {
    render() {
        return (
            <div className={styles.feedback_btn_block}>
                <p className={styles.title}>Please, leave feedback</p>
                <ul className={styles.feedback_btn_list}>
                    <li className={styles.feedback_btn}>Good</li>
                    <li className={styles.feedback_btn}>Neutral</li>
                    <li className={styles.feedback_btn}>Bad</li>
                </ul>
            </div>
        );
    };
};

// const Buttons = () => {
//     <div className={styles.feedback_btn_block}>
//         <p className={styles.title}>Please, leave feedback</p>
//         <ul className={styles.feedback_btn_list}>
//             <li className={styles.feedback_btn}>Good</li>
//             <li className={styles.feedback_btn}>Neutral</li>
//             <li className={styles.feedback_btn}>Bad</li>
//         </ul>
//     </div>
// };

export default Buttons;