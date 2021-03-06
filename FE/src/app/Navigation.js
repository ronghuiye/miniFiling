import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3f5a72',
    flex: 240,
    height: '100vh',
    minWidth: 240,
    overflowX: 'hidden',
    overflowY: 'auto',
    maxWidth: 240,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: 240,
    height: '100%',
  },
  links: {
    flex: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}))

const Navigation = ({links}) => {
  const classes = useStyles();

  const renderIcon = icon => React.createElement(icon)

  const renderLinkItem = (link, index) => {
    return (
      <ListItem
        key={`link-item-${index}`}
        component="li"
        button
        style={{paddingTop:'20px',paddingBottom:'20px', color: 'white'}}
        disableRipple
        onClick={() => link.action()}
      >{renderIcon(link.icon)}<span style={{paddingLeft:'20px'}}>{link.label}</span>
      </ListItem>
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.links}>
          {links.map((link,index) => renderLinkItem(link, index))}
        </div>
      </div>
    </div>
  )

}


export default Navigation
