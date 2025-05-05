import { Button } from "@heroui/button";
export default function PostForm() {
    return (
        <form className="max-w-[64rem] mx-auto p-6 border rounded-lg shadow-lg !shadow-300 ">
            <fieldset className="flex flex-col items-center">
                <p className="text-lg font-semibold text-center line_bottom">
                    Submit your blog
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full mt-4 ">
                    <input
                        type="text"
                        name="naam"
                        placeholder="Naam"
                        className="input-field hover"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="input-field hover"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full mt-4">
                    <input
                        type="text"
                        name="telefoon"
                        placeholder="Telefoon"
                        className="input-field hover"
                    />
                    <input
                        type="text"
                        name="bedrijf"
                        placeholder="Bedrijf"
                        className="input-field hover"
                    />
                </div>

                <textarea
                    name="opmerkingen"
                    placeholder="Opmerkingen/Vragen"
                    className="input-field h-32 mt-6 hover"
                />
                <Button variant="flat" className="text-black bg-sky-300 mt-8">
                    Submit
                </Button>
            </fieldset>
        </form>
    );
}
