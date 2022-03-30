import styles from '../../styles/Pricing.module.css';
import { Typography } from '@mui/material';
import Calculator from './calculator/Calculator';

export default function Pricing() {
  return (
    <div name="pricing" className={styles.pricing}>
      <Typography variant="h3" component="h3">
        Pricing
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        sx={{ marginTop: 3, marginBottom: 2 }}
      >
        Check estimated price of your project
      </Typography>
      <Typography variant="body1">
        Select items below which best describes your app and the features you
        require
      </Typography>
      <Calculator />
    </div>
  );
}
