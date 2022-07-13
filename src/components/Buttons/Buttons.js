import { Component } from 'react';
import stl from './Buttons.module.css';

class Buttons extends Component {
    render() {
        return (
            <div className={stl.feedback_btn_block}>
                <h1 className={stl.title}>Please, leave feedback</h1>
                <ul className={stl.feedback_btn_list}>
                    <li className={stl.feedback_btn}><button>Good</button></li>
                    <li className={stl.feedback_btn}><button>Neutral</button></li>
                    <li className={stl.feedback_btn}><button>Bad</button></li>
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