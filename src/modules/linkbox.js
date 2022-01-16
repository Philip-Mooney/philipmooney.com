import './linkbox.css';
import '@fortawesome/free-brands-svg-icons';

function LinkBox(props) {
  return (

    <a class="linkbox-link" href={props.link}>
        <div class="linkbox-container">
            <p class="linkbox-text">
                {props.text}
            </p>
        </div>
    </a>
  );
}

export default LinkBox;
