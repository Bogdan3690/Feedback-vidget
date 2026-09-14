export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return(
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
