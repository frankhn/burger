import React from 'react'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavogationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/backdrop'
import Aux from '../../../HOC/Aux/Aux'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Closed]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    )
}

export default sideDrawer