export default function Button(props) {
    return (
        <button onClick={() => props.generateAdvice(props.prompt)}>{props.text}</button>
    );
}