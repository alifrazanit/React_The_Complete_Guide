export const TabButton = props => {
    return (
        <li>
            <button className={props.isSelected} onClick={props.onClick}>{props.children}</button>
        </li>
    )
}