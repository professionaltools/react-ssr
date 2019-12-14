import React from 'react'
import {Link} from 'react-router-dom'
class Header extends React.PureComponent {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Link to='/'>home</Link>
                <Link to='/about'>abut</Link>
                <Link to='/home'>home</Link>
            </div>
        )
    }
}

export default Header
