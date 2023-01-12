import React, { ReactPropTypes } from 'react';

/**
 * @exports GenericButton
 * * The concept is to style our component to match theme of site.
 * * passing props to make it as usable as possible. Also additional style options to
 * * make minor changes for UI/UX. Like a confirm button styled the a cancel button thats
 * * slightly lighter with darker font
 */

const GenericButton = ({ innerText, style = { border: '1px solid purple' } }) => {
  return <button style={style}>{innerText}</button>;
};

GenericButton.propTypes = {
  innerText: ReactPropTypes.string,
  style: ReactPropTypes.object,
};

export default GenericButton;
