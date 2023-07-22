import { useRef, useEffect, useState } from 'react';
import { ICON_MAP } from "../utils/constants.js";

export default function useDynamicSVGImport(name, options = {}) {
  const ImportIconRef = useRef();
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState();

  const { onCompleted, onError } = options;

  const verifyIconName = (name) => {
    if (!Object.values(ICON_MAP).includes(name)) {
      throw Error('Invalid icon name');
    }
  }

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        verifyIconName(name);

        ImportIconRef.current = (await import(`../assets/icons/${name}.svg`)).ReactComponent;

        if (onCompleted) {
          onCompleted(name, ImportIconRef.current);
        }
      } catch(error) {
        if (onError) {
          onError(error);
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError])

  return { error, loading, SvgIcon: ImportIconRef.current };
}
