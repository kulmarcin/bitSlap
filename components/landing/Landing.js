import styles from '../../styles/Landing.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Landing() {
  const mobile = useMediaQuery('(max-width:600px');
  const desktop = useMediaQuery('(min-width: 700px)');

  let height;
  if (typeof window !== 'undefined') {
    // detect window screen width function
    height = window.innerHeight;
  }

  return (
    <div className={styles.landing}>

      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        className={styles.logo}
      >
        Logo
      </Typography>

      <Typography
        variant="h3"
        component="h3"
        className={styles.description}
      >
        Your End-To-End Web & Mobile Solution Partners
      </Typography>

      <Typography className={styles.arrow} variant="h5" component="h5">
        Services
        <ArrowDownwardIcon fontSize='large' />
      </Typography>
      {mobile && (
        <video
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: height,
            objectFit: 'cover',
            zIndex: '-99999',
            filter: 'grayscale(40%) contrast(80%)'
          }}
        >
          <source src={'/videos/bitSlapVertical.mp4'} type="video/mp4" />
        </video>
      )}
      {desktop && (
        <video
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: height,
            objectFit: 'cover',
            zIndex: '-99999',
            filter: 'grayscale(40%) contrast(80%)'
          }}
        >
          <source src={'/videos/bitSlap.mp4'} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
