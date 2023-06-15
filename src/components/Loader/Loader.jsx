import { ThreeDots } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <ThreeDots
        height="60"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderBackdrop>
  );
};
