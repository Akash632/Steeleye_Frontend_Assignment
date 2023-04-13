import React, { useState,memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  text,
}) => {
  const [style,setStyle] = useState(false);

  const onClickHandler = (index) =>{
    setStyle(!style)
  }
  return (
    <li
      style={style?{backgroundColor:'green',cursor:"pointer"}:{backgroundColor:'red',cursor:"pointer"}}
      onClick={()=>onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          key={index}
          text={item.text}
          index={index}
        />
      ))}
    </ul>
  )
};

  WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired
  };

WrappedListComponent.defaultProps = {
  items: [{text:"HTML"},{text:"CSS"},{text:"JavaScript"},{text:"React"}],
};

const List = memo(WrappedListComponent);

export default List;