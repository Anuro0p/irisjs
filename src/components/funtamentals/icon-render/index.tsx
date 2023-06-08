import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type Props = {
  name?: string;
  tooltip?: string;
};
const componentRegistry = {
  AddIcon: (props) => <AddIcon {...props} />,
  ShoppingCartRoundedIcon: (props) => <ShoppingCartRoundedIcon {...props} />,
  ErrorOutlineRoundedIcon: (props) => <ErrorOutlineRoundedIcon {...props} />,
  AccountCircleIcon: (props) => <AccountCircleIcon {...props} />,
};
const IconRender = ({ name }: Props) => {
  const ReturnComponent = componentRegistry[name!];
  if (ReturnComponent) {
    return <ReturnComponent />;
  } else return <ErrorOutlineRoundedIcon />;
};

export default IconRender;
