import { Tooltip } from '@mui/material';
import IconRender from '../../components/funtamentals/icon-render';

const Home = () => {
  return (
    <div>
      <Tooltip title='add' placement='bottom-end'>
        <IconRender name='AddIcon' />
      </Tooltip>
    </div>
  );
};

export default Home;
