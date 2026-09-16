import { List } from "./Statistics.styled";

export const Statistics = ({ total, percentage, ...options }) => {

    const optionsArr = Object.keys(options)

    return(
        <>
                <List>
          {optionsArr.map((option, index) => {
            
            return (
              <li key={index}>
                {option} : 
                {options[option]}
              </li>
            );
          })}
        </List>
        <p>Total feedbacks : {total}</p>
        <p>Positive feedback: {percentage} %</p>
        </>
    )
}