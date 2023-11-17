const ChatReplySuggestions = () => {
  return (
    <div className="fixed flex justify-center items-center gap-3 z-10 bottom-28 w-full left-0 pl-96">
      <button className="btn  border-primary bg-transparent hover:border-primary">
        Is it still available?
      </button>
      <button className="btn  border-primary bg-transparent hover:border-primary">
        Where can we meet?
      </button>
      <button className="btn  border-primary bg-transparent hover:border-primary">
        Where is it located?
      </button>
    </div>
  );
};

export default ChatReplySuggestions;
