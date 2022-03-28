import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardServices({Icon, title, description, desktop}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth:275, maxHeight:165, minHeight:165, borderRadius: 3, boxShadow: '5px 5px 5px rgba(25,25,25,0.6)', backgroundColor:'black', color: 'white', marginBottom: '20px', marginRight: desktop ? '20px' : '0' }}>
      <CardContent>
        <Typography variant="h5" component="div" style={{display:'flex', alignItems:'center'}}>
          <Icon sx={{marginRight: 1.5, fontSize: 30}}/>{title}
        </Typography>
        <Typography variant="body2" sx={{maxWidth: 250, textAlign:'left', marginTop: 3 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
