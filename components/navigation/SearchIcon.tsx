import Svg, { SvgProps, Path } from "react-native-svg";

import { Colors } from "@/constants/Colors";

type IconProps = SvgProps & {
  focused: boolean;
};

const SearchIcon = (props: IconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.06 21.081 28 28m-4-14c0 5.523-4.477 10-10 10S4 19.523 4 14 8.477 4 14 4s10 4.477 10 10Z"
    />
  </Svg>
);
export default SearchIcon;
