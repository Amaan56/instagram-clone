import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Story.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

function Story() {
  const classes = useStyles();
  const stories = [
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83639244_187705492295818_9221091469350141952_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=ma5Yw1PI8_IAX-b1V4F&_nc_tp=25&oh=212594a42db841ea827f21820a06e443&oe=5FDBE121',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93412085_612088426331822_6961755736112103424_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=94PtYLBzjKUAX_eQi2m&tp=25&oh=575963126f6e0c6b2eb00554b5737022&oe=5FDE86A5',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122821744_1442306945967480_496791532967701291_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=hC8m_zl7KhcAX8NCMII&tp=1&oh=59df63b0aed8439f439eeabb4df6b0f5&oe=5FDECB5D',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/121117304_2732086437014275_1311531874313108900_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=WGWOu9ek2fAAX9o4BRh&tp=1&oh=6403460fb586455f2bdd8e9add4539f5&oe=5FDFD34B',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/18011246_288272001630727_2179170623924731904_a.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=aWQzOmsrnh4AX-MZk_z&tp=25&oh=d3fa19e41084e3c7b4bf851f1b8b828e&oe=5FE03CFA',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96052410_272325743910182_411088473999540224_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=6GE5sdZJKsYAX-owRa7&tp=25&oh=ab7efdc29754ab949cea7cd59773c2c4&oe=5FE11017',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123216631_2788660911415609_2324833357357858739_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=Ur8uZ2aBVTcAX-eIQ3G&tp=25&oh=01d553e2d501c8d87c864a1b999c1b9f&oe=5FDE97D7',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72404257_779650272492838_7586421710992179200_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=GNsVcHfLaKYAX9DY0dw&tp=1&oh=97020ca2a0e9542d2c1260555a98e361&oe=5FDF6B07',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72404257_779650272492838_7586421710992179200_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=GNsVcHfLaKYAX9DY0dw&tp=1&oh=97020ca2a0e9542d2c1260555a98e361&oe=5FDF6B07',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72404257_779650272492838_7586421710992179200_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=GNsVcHfLaKYAX9DY0dw&tp=1&oh=97020ca2a0e9542d2c1260555a98e361&oe=5FDF6B07',
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/98175057_304325590570794_5974626050804547584_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=S85XavI_O1oAX88TsSO&tp=25&oh=bd7de8daf0735793582a8793ed958552&oe=5FE0021C',
  ];
  return (
    <div className="story">
      {stories.map((story, i) => (
        <Avatar
          className={`${classes.large} story__single`}
          key={i}
          src={story}
        />
      ))}
    </div>
  );
}

export default Story;
