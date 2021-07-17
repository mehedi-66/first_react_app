
// CSS file import for use this....
import './ExpenseDate.css';
// we can use CSS on this file 

function ExpenseDate(props) {
    // use some javascript code..
    // date varibale should be base on the given (props vaibale) name 

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const Year = props.date.getFullYear();

    return (

        <div>
            <div> {month} </div>
            <div>{Year}</div>
            <div>{day}</div>
        </div>
    );

}
export default ExpenseDate;