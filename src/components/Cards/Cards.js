import './Cards.css';
export const Cards = props => {
    return <div className={props.className + ' card'}>{props.children}</div>
}