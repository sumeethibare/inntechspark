import Image from "next/image";

const people = [
    {
        name: 'Sanni Kumer',
        role: 'Founder / CEO',
        imageUrl: '',
        profile: 'https://www.linkedin.com/in/sanni-kumer/',
    },
    {
        name: 'Sumeet Hibare',
        role: 'Co-Founder',
        imageUrl: '',
        profile: 'https://www.linkedin.com/in/sumeethibare/',
    },
    {
        name: 'Somesh Hotkar',
        role: 'CTO',
        imageUrl: '',
        profile: 'https://www.linkedin.com/in/someshhotkar/',
    },
    {
        name: 'Maheshkumar Biradar',
        role: 'CMO',
        imageUrl: '',
        profile: 'https://www.linkedin.com/in/maheshkumar-biradar-3b5b1b1b4/',
    },
    {
        name: 'Jonty Rose',
        role: 'CFO',
        imageUrl: '',
        profile: 'https://www.linkedin.com/in/jonty-rose-3b5b1b1b4/',
    },
    {
        name: 'Sneha Manakoji',
        role: 'Operations Manager',
        imageUrl: '',
        profile: 'https://www.linkedin.com/in/sneha-manakoji-3b5b1b1b4/',
    },
    {
        name: 'Vinay Buddhi',
        role: 'HR & Product Manager',
        imageUrl: '',
        profile: 'https://www.linkedin.com/in/vinay-buddhi-3b5b1b1b4/',
    },
];

export default function Lead() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Meet our leadership
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        We are a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                {person.imageUrl && (
                                    <Image
                                        alt={`${person.name}'s profile`}
                                        width={64}
                                        height={64}
                                        src={person.imageUrl}
                                        className="h-16 w-16 rounded-full bg-black"
                                    />
                                )}

                                <div>
                                    <a
                                        href={person.profile}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base/7 font-semibold tracking-tight text-gray-900 hover:underline"
                                    >
                                        {person.name}
                                    </a>
                                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
