import useAppSelector from '../../hooks/use-app-selector';
import { selectError } from '../../store/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(selectError);

  return error ? <div className="error-message">{error}</div> : null;
}

export default ErrorMessage;
