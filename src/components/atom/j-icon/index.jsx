import useDynamicSVGImport from '../../../hooks/useDynamicSVGImport.js';

const JIcon = ({ name, color = 'white', height = '32px', onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, { onCompleted, onError });

  if (error) {
    return error.message;
  }
  if (loading) {
    return 'Loading...';
  }

  if (SvgIcon) {
    return (
      <SvgIcon height={height} {...rest} color={color}/>
    );
  }
};

export default JIcon;
