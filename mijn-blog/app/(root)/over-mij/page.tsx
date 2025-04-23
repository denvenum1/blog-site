export default function OverMij() {
  return (
    <main className=" mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Over mij</h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src="Ali_square.jpg"
          alt="Ali Soujaa"
          className=""
        />

  <div>
    <h2 className="text-2xl font-semibold mb-2">Wie ben ik?</h2>
    <p className="text-gray-700 leading-relaxed">
      Ik ben Ali Soujaa, een rustig en vriendelijk persoon die altijd met een glimlach en respect probeert te communiceren.
      Ik werk graag zelfstandig en denk technisch sterk na over wat ik doe. Daarnaast ben ik stressbestendig en blijf ik ook onder druk gefocust.  
      <br /><br />
      Op het vlak van communicatie en sociale interactie werk ik bewust aan mijn groei.
      Ik weet dat dit een belangrijk aspect is van professioneel samenwerken, en ik doe actief mijn best om me daar verder in te ontwikkelen.  
      <br /><br />
      Wanneer ik ergens vastzit, probeer ik eerst zelf tot een oplossing te komen.
      Ik zoek veel zelf op en pas toe wat ik leer. Als het écht niet lukt, stel ik doelgerichte vragen — ik ben dus niet bang om hulp te vragen als dat nodig is.
    </p>
    </div>
  </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">Stage</h2>
        <p className="text-gray-700 leading-relaxed">
        Ik loop stage als backend developer bij icapps, gevestigd in de haven van Antwerpen. 
        Binnen het team werk ik mee aan de technische kant van digitale toepassingen, voornamelijk met NestJS en TypeScript.
        Wat ik vooral waardeer aan mijn stage is de aangename sfeer en het feit dat ik bij iedereen terechtkan met vragen. 
        Er is een sterk gevoel van ondersteuning en samenwerking in het team, wat het leerproces alleen maar versterkt.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">Connecteer met mij</h2>
        <ul className="flex gap-4 mt-2">
          <li>
            <a
              href="https://www.linkedin.com/in/jouw-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:ali_soujaa_2660@hotmail.com"
              className="text-blue-600 hover:underline"
            >
              E-mail
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
