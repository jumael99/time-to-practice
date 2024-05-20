import './FlexBoxRow.css'

const FlexBoxRow = (props) => {
  const classes = 'flexbox-row ' + props.className;

  return (
    <div className={classes} >{props.children}</div>
  )
};

export default FlexBoxRow;