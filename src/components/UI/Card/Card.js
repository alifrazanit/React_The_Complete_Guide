import moduleCss from './Card.module.css';
export const Card = props => {
    return <div className={`${moduleCss['card']} ${props.className}`}>{props.children}</div>
}