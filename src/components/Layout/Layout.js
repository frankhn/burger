import React from 'react'
import Aux from "../../HOC/Aux";
import classes from './layout.css'

const layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
)

export default layout