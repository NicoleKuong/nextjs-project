import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail 
      image='link'
      title='A First Meetup'
      description='This is a first meetup'/>
  );
}

// all the dynamic segment values
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      }
    ]
  }
}

//  cannot use React Hooks in this function
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: 'link',
        id: meetupId,
        title: 'A First Meetup',
        description: 'This is a first meetup',
      }
    }
  }
}

export default MeetupDetails;
