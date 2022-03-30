import { Typography } from '@mui/material';
import styles from '../../styles/Services.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import CallIcon from '@mui/icons-material/Call';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DiamondIcon from '@mui/icons-material/Diamond';

import Card from './Card';

export default function Services() {
  const mobile = useMediaQuery('(max-width:767px');
  const desktop = useMediaQuery('(min-width: 768px)');

  return (
    <div id="services" className={styles.services}>
      <Typography variant="h4" component="h4">
        Our Services
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        style={{
          color: 'white',
          fontSize: 15,
          marginTop: 20,
          textAlign: 'center',
          textShadow: '5px 5px 5px black'
        }}
      >
        <span style={{ color: 'orange' }}>Enjoy</span> great applications
        tailored to your needs
      </Typography>
      <div
        style={{
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card
          Icon={ComputerIcon}
          desktop={desktop}
          title="Web Development"
          description="Build powerful and responsive applications for desktop"
        />
        <Card
          Icon={SmartphoneIcon}
          desktop={desktop}
          title="Mobile Apps"
          description="Create truly cross-platform applications for iOS/Android"
        />
        <Card
          Icon={CloudIcon}
          desktop={desktop}
          title="Cloud services"
          description="Deploy your projects on Amazon Web Services or Google Cloud Platform"
        />
      </div>
      <div
        style={{
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'no-wrap',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{ color: 'white', alignSelf: 'center', marginTop: 5 }}
        >
          Why people <span style={{ color: 'orange' }}>choose</span> to work
          with <span style={{ color: 'orange' }}>bitSlap</span>?
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'left',
              marginTop: 5
            }}
          >
            <ThumbUpAltIcon fontSize="large" sx={{ marginRight: 1.5 }} />
            100% satisfaction guaranteed
          </Typography>
          <Typography
            variant="caption"
            style={{
              color: 'lightgray',
              fontSize: desktop ? 18 : 14,
              textAlign: 'left'
            }}
          >
            <p style={{ marginLeft: 20 }}>
              Your satisfaction is our very first priority. We are here to solve
              any concerns in every possible manner with flexibility.
            </p>
          </Typography>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'left',
              marginTop: 3
            }}
          >
            <CallIcon fontSize="large" sx={{ marginRight: 1.5 }} />
            24/7 Communication
          </Typography>
          <Typography
            variant="caption"
            style={{
              color: 'lightgray',
              fontSize: desktop ? 18 : 14,
              textAlign: 'left'
            }}
          >
            <p style={{ marginLeft: 20 }}>We are always here for you</p>
          </Typography>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'left',
              marginTop: 3
            }}
          >
            <DiamondIcon fontSize="large" sx={{ marginRight: 1.5 }} />
            Support
          </Typography>
          <Typography
            variant="caption"
            style={{
              color: 'lightgray',
              fontSize: desktop ? 18 : 14,
              textAlign: 'left'
            }}
          >
            <p style={{ marginLeft: 20 }}>
              We support you even after the product is delivered to your hands
            </p>
          </Typography>
        </div>
      </div>
    </div>
  );
}
