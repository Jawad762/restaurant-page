const Header = (props) => {
    return (
        <div className={props.menu && !props.modal ? 'header black-underline': props.modal && props.menu ? 'blurred-header black-underline': 'header bisque-underline'}>
            <div className="left-side">
                <img className="header-img" src='https://th.bing.com/th/id/R.eb16629ef0f5c8dc02a0fb6870a0efdf?rik=pAP%2f1XnWna2fAg&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2009%2f11%2f55267-cross-of-fork-and-knife-on-a-plate-to-not-eat.png&ehk=PJiRytOjKIYNkNx%2bmJO8eLH%2fzs4Ceqw%2f7xh67QSgnok%3d&risl=&pid=ImgRaw&r=0'/>
                <h1 className={props.menu ? 'black': 'bisque'}>Food Resto</h1>
            </div>
            <div className="nav-bar">
                <button className={props.home ? 'btn bisque bisque-underline': props.menu ? 'btn black no-border': 'btn bisque no-border'} onClick={props.NavigateHome}>Home</button>
                <button className={props.menu ? 'btn black black-underline': 'btn bisque no-border'} onClick={props.NavigateMenu}>Menu</button>
                <button className={props.about ? 'btn bisque bisque-underline': props.menu ? 'btn black no-border': 'btn bisque no-border'} onClick={props.NavigateAbout}>About us</button>
            </div>
        </div>
    )
}

export default Header