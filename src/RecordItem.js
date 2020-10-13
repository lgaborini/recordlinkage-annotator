import React from 'react';
import 'typeface-roboto';

// import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function RecordItem(props) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText 
        primary={props.itemText} 
        primaryTypographyProps = {{component: "p"}}
        // secondary={props.itemLabel} 
        // secondaryTypographyProps = {{variant: "caption"}}
      />
      {/* <Typography component="p">
        {props.itemText}
      </Typography> */}
    </ListItem>

  );
}
