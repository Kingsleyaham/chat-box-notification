type PropTypes = {
  name: string;
  placeholder?: string;
};

const DatePicker = ({ name, placeholder }: PropTypes) => {
  return (
    <>
      <input
        type="text"
        className="input-control"
        name={name}
        placeholder={placeholder ?? "choose date"}
        onFocus={(e) => {
          e.target.type = "date";
          e.target.defaultValue = "1970-01-01";
        }}
      />
    </>
  );
};

export default DatePicker;
