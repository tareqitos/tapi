export const Footer = () => {
    
    const date = new Date()

    return (
        <footer className='footer'>
            <p>{`© ${date.getFullYear()} Tapi`}</p>
        </footer>
    )
}