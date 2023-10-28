import { Injectable } from '@angular/core';
import { Option } from './option.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  "genres": Option[] = [
    {
      "id": 28,
      "name": "Action",
      "imgSrc": "../../assets/genreImages/action.jpg",
      "description": "A film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tends to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a indestructible villain, or a pursuit which usually concludes in victory for the hero."
    },
    {
      "id": 12,
      "name": "Adventure",
      "imgSrc": "../../assets/genreImages/adventure.jpg",
      "description": 'A common theme of adventure films is of characters leaving their home or place of comfort and going to fulfill a goal, embarking on travels, quests, treasure hunts, heroic journeys; and explorations or searches for the unknown.'
    },
    {
      "id": 35,
      "name": "Comedy",
      "imgSrc": "../../assets/genreImages/comedy.jpg",
      "description": "These films are designed to make the audience laugh in amusement.Films in this style traditionally have a happy ending (dark comedy being an exception to this rule). Comedy is one of the oldest genres in film and it is derived from classical comedy in theatre"
    },
    {
      "id": 80,
      "name": "Crime",
      "imgSrc": "../../assets/genreImages/crime.jpg",
      "description": "Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense or noir."
    },
    {
      "id": 99,
      "name": "Documentary",
      "imgSrc": "../../assets/genreImages/documentary.jpg",
      "description": "A documentary film or documentary is a non-fictional motion-picture intended to document reality, primarily for the purposes of instruction, education or maintaining a historical record. Documentary in terms of a filmmaking practice, a cinematic tradition, and mode of audience reception  a practice without clear boundaries"
    },
    {
      "id": 18,
      "name": "Drama",
      "imgSrc": "../../assets/genreImages/drama.jpg",
      "description": "A primary element in a drama is the occurrence of conflict—emotional, social, or otherwise—and its resolution in the course of the storyline. All forms of cinema or television that involve fictional stories are forms of drama in the broader sense if their storytelling is achieved by means of actors who represent (mimesis) characters."
    },
    {
      "id": 36,
      "name": "History",
      "imgSrc": "../../assets/genreImages/history.jpg",
      "description": "A dramatic work set in a past time period, usually used in the context of film and television, which presents historical events and characters with varying degrees of fictional elements such as creative dialogue or fictional scenes which aim to compress separate events or illustrate a broader factual narrative"
    },
    {
      "id": 27,
      "name": "Horror",
      "imgSrc": "../../assets/genreImages/horror.jpg",
      "description": "Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes. Horror films often explore dark subject matter and may deal with transgressive topics or themes. Broad elements include monsters, apocalyptic events, and religious or folk beliefs."
    },
    {
      "id": 878,
      "name": "Science Fiction",
      "imgSrc": "../../assets/genreImages/science.jpg",
      "description": "Science fiction is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. Science fiction can trace its roots to ancient mythology."
    },
  ];

  "dates": Option[] = [
    {
      "name": "70s",
      "id": ['1970-01-01', '1979-12-30'],
      "imgSrc": "../../assets/periodImages/70s.jpg",
      "description": "In the 1970s, the film industry continued to thrive by doing what television could not: telling stories that were more complicated, violent, frightening, or sexy than what could be shown to families sitting at home. Two contrasting trends in movie-making were present in the 1970s."
    },
    {
      "name": "80s",
      "id": ['1980-01-01', '1989-12-30'],
      "imgSrc": "../../assets/periodImages/80s.jpg",
      "description": "The period was when 'high concept' films gained popularity, where films were expected to be easily marketable and understandable. Therefore, they had short cinematic plots that could be summarized in one or two sentences. The modern Hollywood blockbuster is the most popular film format from the 1980s."
    },
    {
      "name": "90s",
      "id": ['1990-01-01', '1999-12-30'],
      "imgSrc": "../../assets/periodImages/90s.jpg",
      "description": "The 1990s was a decade where pop culture took flight, we all made some Friends, dance moves were born and fast-food got even bigger.It was a time of mindblowing innovation, not just in terms of special effects but the kind of stories major studios felt comfortable telling."
    },
    {
      "name": "00s",
      "id": ['2000-01-01', '2009-12-30'],
      "imgSrc": "../../assets/periodImages/00s.jpg",
      "description": "The 2000s was an era of entertainment best characterized by over-the-top comedy, fun, action-packed popcorn flicks, and optimistic family movies. Not only did this era contain some of the most enduringly popular superhero movies, but it also enjoyed a fun streak of adventure movies and successful animated films",
    },
    {
      "name": "2010s",
      "id": ['2010-01-01', '2019-12-30'],
      "imgSrc": "../../assets/periodImages/10s.jpg",
      "description": "The decade of the 2010s in film involved many significant developments in the motion picture industry as Disney towered all over its competitors.Film series adaptations of popular young adult fiction novels became more prevalent",
    },
    {
      "name": "2020s",
      "id": ['2019-01-01', '2040-12-30'],
      "imgSrc": "../../assets/periodImages/20s.jpg",
      "description": "",
    }
  ]

  "includeAdult" : Option[] = [
    {
    "name": "18+",
    "id": 2,
    "imgSrc": '../../assets/ageImages/adult.jpg',
    },
    {
    "name": "12+",
    "id": 1,
    "imgSrc": '../../assets/ageImages/teens.jpeg',
    },
    {
      "name": "0+",
      "id": 0,
      "imgSrc": '../../assets/ageImages/kids.jpeg',
    }
  ]

  "countries": Option[] = [
    {
      "name": "Europe",
      "id": ["FR|IT|UA|PL|NL|IE|NO|ES|DE|SE|GR|AT|BE|BG|DK|PT|RS|HU|CH|LV|CZ|EE|SK"],
      "imgSrc": '',
     },
    
    {
      "name": "America",
      "id": ["US|AR|BR|CA|CL|MX"],
      "imgSrc": "",
    },
    {
      "name": "Asia",
      "id": ["ID|IN|JP|KR|TW"],
      "imgSrc": ''
    },
    {
      "name": "USA",
      "id": ["US"],
      "imgSrc": '',
    },
    {
      "name": "Great Britain",
      "id": ["GB"],
      "imgSrc": ''
    },
    {
      "name": "Africa",
      "id": ["ZA|ZM|ZW|UG|NG|NI|MG|MA"],
      "imgSrc": '',
    }
    
  ]



  constructor() { }
}
