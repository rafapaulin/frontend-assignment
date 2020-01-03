import msLogo from 'Images/ms-logo.png';
import iconPin from 'Images/icon-pin.png';
import iconVideo from 'Images/icon-video.png';
import iconCloud from 'Images/icon-cloud.png';
import iconDelivery from 'Images/icon-delivery.png';
import iconDns from 'Images/icon-dns.png';
import iconShield from 'Images/icon-shield.png';
import icontraffic from 'Images/icon-traffic.png';
import similar from 'Images/similar.png';
import history from 'Images/history.png';
import graph from 'Images/graph.png';


export default {
    data() {
        return {
            name: 'Microsoft',
            logo: msLogo,
            location: 'Redmond, WA USA',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam fugit, ab magni doloribus eaque aliquid neque ipsa consectetur dolore quas. Laboriosam consequuntur eum quos. Rerum, eius. Distinctio nisi consequatur ullam?',
            images: {
                locationIcon: iconPin,
                similar: similar,
                graph: graph,
                history: history,
            },
            activities: [
                {
                    datetime: '2020-01-03 14:40:00',
                    icon: iconShield,
                    desc: 'Lorem ipsum dolor, sit amet consectetur'
                },
                {
                    datetime: '2019-12-29 14:40:00',
                    icon: iconVideo,
                    desc: 'Lorem ipsum dolor, sit amet consectetur'
                },
                {
                    datetime: '2019-12-22 14:40:00',
                    icon: iconCloud,
                    desc: 'Lorem ipsum dolor, sit amet consectetur'
                },
                {
                    datetime: '2019-12-18 14:40:00',
                    icon: iconDelivery,
                    desc: 'Lorem ipsum dolor, sit amet consectetur'
                },
                {
                    datetime: '2019-12-13 14:40:00',
                    icon: iconDns,
                    desc: 'Lorem ipsum dolor, sit amet consectetur'
                },
                {
                    datetime: '2019-12-07 14:40:00',
                    icon: iconShield,
                    desc: 'Lorem ipsum dolor, sit amet consectetur'
                },
                {
                    datetime: '2019-12-03 14:40:00',
                    icon: icontraffic,
                    desc: 'Lorem ipsum dolor, sit amet consectetur'
                },
            ]
        }
    },
    created() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('bg-blue');
    }
}
