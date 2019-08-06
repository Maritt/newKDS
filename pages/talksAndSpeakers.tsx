import Layout from "./components/Layout";
import Talk from "./components/Talk";
import "../styling/talksAndSpeakersStyles.scss";

import { program as Program } from "../models/data.json";

export default function TalksAndSpeakers() {
  return (
    <div className="talksAndSpeakers">
      <Layout>
        <h1> Talks and speakers</h1>

        {Program.days
          .map(day => day.slots
            .filter(function (slot) {
              return slot.rooms !== undefined
            })
            .map(slot => slot.rooms
              .map(room => room.talks
                .map(talk => talk.speakers
                  .map(speaker =>
                    <Talk
                      description={talk.description}
                      speakerInfo={speaker.info}
                      speaker={speaker.name}
                      title={talk.title}
                      id={talk.talkId} >

                    </Talk>
                  )
                )
              )
            )
          )
        }

      </Layout>
    </div >
  );
}


