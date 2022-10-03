import { images } from "../constants";

const {demoDay, homageToErik, dotnet, SteffenMiniProject, breakdownDay, triviaNight } = images;
const {Ghais, Tor, Iro, Aksel, Kristian} = images

const articles = [
  {
    Id: 1,
    AuthorNameId: 97846,
    AuthorName: 'Ghais',
    AuthorImage: Ghais,
    Title: 'Demo Day vel overstått!',
    Content:
      'Det har etterhvert blitt en fin tradisjon med Demo Day, der Ikomm inviterer inn en rekke interesserte mennesker for å vise frem studentenes Case Study-prosjekter. Dette er prosjekter det har blitt jobbet med i en månede, og markerer både siste del av kursperioden, og siste dagen med Erik som kursholder. Etter dette er det praksis, og forberedelser til den, som står på menyen. Dagen bød på en rekke fine presentasjoner og tilogmed noen overraskelser, her har vi laget en liten oppsummering av de prosjektene som ble vist frem. ',
    ArticleImage: demoDay,
    CanPublish: true,
    IsPublished: true,
  },
  {
    Id: 2,
    AuthorNameId: 55969,
    AuthorName: 'Tor',
    AuthorImage: Tor,
    Title: 'En homage til Erik',
    Content:
      'Erik har vært fantastisk med oss, så vi ønsket å være litt fantastiske tilbake. Her har vi laget en collage av gode minner som vi kaller for «En homage til Erik». Stykket er tonesatt av Kjetil Nordbye på Flygel og Kristian Enge på Tamburin.   ',
    ArticleImage: homageToErik,
    CanPublish: true,
    IsPublished: true,
  },
  {
    Id: 3,
    AuthorNameId: 33466,
    AuthorName: 'Argyro',
    AuthorImage:  Iro,
    Title: 'Why I love .NET?',
    Content:
      '.NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is primarily developed by Microsoft employees by way of the .NET Foundation, and released under the MIT License.',
    ArticleImage: dotnet,
    CanPublish: true,
    IsPublished: true,
  },
  {
    Id: 4,
    AuthorNameId: 36824,
    AuthorName: 'Aksel',
    AuthorImage: Aksel,
    Title: 'Når Ikomm Academy gikk full blown hipster',
    Content:
      'At Steffen ligger litt foran de fleste av oss når det kommer til kreativ frontend-utvikling, tok det ikke lang tid før vi forstod. Allikevel ble vi tatt på senga når det var dags for å presentere mini-prosjekter. Hjemmelaga Pixelart er vi ikke bortskjemte med! Les mer om både Steffens miniprosjekt, og de andre mini-prosjektene, som har preget påsken i Akademiet. ',
    ArticleImage: SteffenMiniProject,
    CanPublish: true,
    IsPublished: true,
  },
  {
    Id: 5,
    AuthorNameId: 36824,
    AuthorName: 'Aksel',
    AuthorImage: Aksel,
    Title: 'Det første sammenbruddet er et faktum!',
    Content:
      'Det er ikke mange ting vi vet på forhånd når vi starter opp en ny runde med Ikomm Academy, men at det kommer et sammenbrudd eller fire i løpet av de tre første kursukene, det føler vi oss ganske sikre på. Det må selvfølgelig feires, og ufarliggjøres. Vi letter litt på sløret fra dagbøkene våres. ',
    ArticleImage: breakdownDay,
    CanPublish: true,
    IsPublished: true,
  },
  {
    Id: 6,
    AuthorNameId: 67645,
    AuthorName: 'Kristian',
    AuthorImage: Kristian,
    Title: 'Suverene vinnere på allmennquizen',
    Content:
      'Vi prøvde et nytt konsept i årets introuke, og det var en tradisjonsrik allmennquiz til å avslutte ukens begivenheter. Quizmaster Aksel hadde ikke spart på konfekten, og det var en serie med tøffe spørsmål som ventet de tre lagene. Ekstra gledelig var det at vi fikk med Erlend og Jens Ole fra NAV, og mentor Michael fra Eidsiva, på begivenhetene. Her har vi nok skapt en ny tradisjon. Klikk deg inn for å se både spørsmålene, svarene, og resultatene. ',
    ArticleImage: triviaNight,
    CanPublish: true,
    IsPublished: true,
  },
];

export default articles;
