/**
 * Using a Base Component
 * There is tremendous amount of flexibility when it comes to composition in React – since components are essentially just functions.
 * By changing style details in a component to props we can make it more resuable.
 *
 * @Reference:
 * http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/
 */

// The color and backgroundColor properties have been moved up to the component’s props.
// Additionally, we’ve added a big prop to adjust the padding top and bottom.
const Button = ({
  big,
  color = colors.white,
  backgroundColor = colors.blue,
  ...props
  }) => {
  const sx = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: bold,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: big ? space[2] : space[1],
    paddingBottom: big ? space[2] : space[1],
    paddingLeft: space[2],
    paddingRight: space[2],
    border: 0,
    color,
    backgroundColor,
    WebkitAppearance: 'none',
    MozAppearance: 'none'
  };

  return (
    <button {...props} style={sx}/>
  )
};

// Usage Example
const Button = () => (
  <div>
    <Button>
      Blue Button
    </Button>
    <Button big backgroundColor={colors.red}>
      Big Red Button
    </Button>
  </div>
);

// By adjusting the props API of the base Button component, an entire set of button styles can be created.
const ButtonBig = (props) => <Button {...props} big/>;
const ButtonGreen = (props) => <Button {...props} backgroundColor={colors.green}/>;
const ButtonRed = (props) => <Button {...props} backgroundColor={colors.red}/>;
const ButtonOutline = (props) => <Button {...props} outline/>;
