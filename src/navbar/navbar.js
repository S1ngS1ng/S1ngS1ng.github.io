import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: this.props.open}
    }

    handleToggle = () => this.setState({open: !this.state.open});

    closeNav = () => this.setState({open: false});
    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    title="S1ngS1ng">
                </AppBar>
                <Drawer
                    docked={false}
                    open={this.state.open}
                    width={300}
                    onRequestChange={(open) => this.setState({open})}>
                    <Card>
                        <CardHeader
                            title="S1ngS1ng"
                            subtitle="Xing Liu"
                            avatar="./lovejs.png"
                        />
                        <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
                            <img src="./back.jpg" alt="img"/>
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    </Card>
                    <MenuItem
                        onTouchTap={this.closeNav.bind(this)}
                        primaryText="Home"
                        href="#/"
                        leftIcon={
                            <FontIcon className="muidocs-icon-action-home" />
                        }>
                    </MenuItem>
                    <MenuItem
                        onTouchTap={this.closeNav.bind(this)}
                        primaryText="Blog"
                        href="http://singsing.io/blog"
                        leftIcon={
                            <FontIcon className="muidocs-icon-action-home" />
                        }>
                    </MenuItem>
                    <MenuItem
                        onTouchTap={this.closeNav.bind(this)}
                        primaryText="Music"
                        href="#/music"
                        leftIcon={
                            <FontIcon className="muidocs-icon-action-home" />
                        }>
                    </MenuItem>
                    <MenuItem
                        onTouchTap={this.closeNav.bind(this)}
                        primaryText="Apps"
                        href="#/apps"
                        leftIcon={
                            <FontIcon className="muidocs-icon-action-home" />
                        }>
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}
