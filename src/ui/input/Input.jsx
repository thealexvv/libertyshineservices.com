import React from 'react';

const Input = (props) => {
  const inputClassName = props.long
    ? 'min-w-[200px] sm:min-w-[540px] md:min-w-full border md:max-w-[770px] rounded-lg bg-primary-500 px-5 py-3 placeholder-white mb-5 text-white text-xl'
    : 'min-w-[200px] border rounded-lg bg-primary-500 px-5 py-3 placeholder-white mb-5 text-white text-xl';

  return <input {...props} className={inputClassName} />;
};

export default Input;
