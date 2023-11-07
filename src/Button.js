import handleClick from './handleClick';
export default function Button (props) {
    return (
        <button id={props.id} onClick={handleClick}>{props.text}</button>
    )
}