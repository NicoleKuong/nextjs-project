import { useEffect, useState } from "react"
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'link',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm1',
        title: 'A Second Meetup',
        image: 'link',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    },
    {
        id: 'm1',
        title: 'A Third Meetup',
        image: 'link',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    }, {
        id: 'm1',
        title: 'A Fourth Meetup',
        image: 'link',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup'
    }
]

function HomePage() {

// no longer need this part because of getStaticProps()
    // // set the state
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // // useEffect is used when you want to send a HTTP request and fetch data
    // useEffect(() => {
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // }, []);
    return <MeetupList meetups={props.meetups}/>
}

// when you need data before the component rendered 
// it would call the getStaticProps function before the render function
// prepare props for this component (contain the data) during build time
// faster site because of caching and data that does not change constantly
export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        // regenerate the data after this many second 
        revalidate: 10,
    }
}

// always run on the server after deployment
// only for data that update constantly and for incoming request
// export async function getServerSideProps(context) {
//     const req = context.reql
//     const res = context.res;
//     return {
//         props: DUMMY_MEETUPS
//     }
// }

export default HomePage