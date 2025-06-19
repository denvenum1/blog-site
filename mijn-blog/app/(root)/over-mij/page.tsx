import Button from "@/components/Button";
import SkillSection from "@/components/SkillCard";

export default function OverMij() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-gray-800">
      {/* Profielheader */}
      <div className="flex flex-col items-center text-center mb-16">
        <img
          src="/ali_square.jpg"
          alt="Ali Soujaa"
          className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold">Over mij</h1>
        <p className="mt-2 max-w-xl text-gray-600">
          Ik ben een gedreven en leergierige ontwikkelaar die altijd streeft
          naar groei, zowel op technisch als persoonlijk vlak. Door mijn stage
          heb ik niet alleen mijn programmeervaardigheden versterkt, maar ook
          geleerd om vlotter samen te werken binnen een teamomgeving.
        </p>
        <a href="/Ali_Ayoub_Soujaa_CV.pdf" className="m-4" target="_blank">
          <Button>Bekijk CV</Button>
        </a>
      </div>

      <div className="line_bottom mb-16" />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Opleiding</h3>
          <p>
            <strong>Programming</strong>
            <br />
            AP Hogeschool, 2023–2025
          </p>
          <p className="text-gray-600 mt-2">
            Ik volg een graduaat in programmeren, met een focus op
            webontwikkeling en software engineering.
          </p>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Stage</h3>
          <p className="text-gray-600">
            Tijdens mijn stage begon ik als backend developer en werkte ik met
            technologieën zoals NestJS, TypeScript en PostgreSQL. Ik ontwikkelde
            API’s, verwerkte data uit externe tools zoals Harvest en Forecast,
            en leerde gestructureerd werken binnen een team. Daarnaast
            versterkte ik mijn probleemoplossend denken, zelfstandigheid en
            technische communicatie.
          </p>
        </div>
      </div>

      <div className="line_bottom" />

      {/* Vaardigheden */}
      <SkillSection />
      <div className="line_bottom mb-16" />

      {/* Contact */}
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <ul className="flex gap-6 text-lg text-blue-600">
        <li>
          <a
            href="https://www.linkedin.com/in/jouw-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:ali_soujaa_2660@hotmail.com"
            className="hover:underline"
          >
            E-mail
          </a>
        </li>
      </ul>
    </main>
  );
}
