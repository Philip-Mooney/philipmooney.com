import './linkicon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-brands-svg-icons';

function LinkIcon(props) {
  return (

    <a href={props.link}>
      <span class="linkicon-container">
          <FontAwesomeIcon icon={props.favicon}/>
      </span>
    </a>
  );
}

export default LinkIcon;
