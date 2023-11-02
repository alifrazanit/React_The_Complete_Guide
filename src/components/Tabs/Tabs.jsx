export const Tabs = ({children, buttons, ButtonContainer}) => {
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    )
}