import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import Image from "next/image";

const Main = () => {
	return (
		<main className="flex-1 p-6">
			<div className="flex items-center gap-6">
				<button className="rounded-full bg-black/40 p-2">
					<ChevronLeft />
				</button>
				<button className="rounded-full bg-black/40 p-2">
					<ChevronRight />
				</button>
			</div>

			<h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
			<div className="grid grid-cols-3 gap-4 mt-6">
				<a
					href="#"
					className="bg-white/10 flex group items-center gap-4 rounded hover:bg-white/20 overflow-hidden transition-colors"
				>
					<Image src="/musica.webp" width={120} height={120} alt={""} />
					<strong>Album de música</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-2.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/10 flex group items-center gap-4 rounded hover:bg-white/20 overflow-hidden transition-colors"
				>
					<Image src="/musica.webp" width={120} height={120} alt={""} />
					<strong>Album de música</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-2.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/10 flex group items-center gap-4 rounded hover:bg-white/20 overflow-hidden transition-colors"
				>
					<Image src="/musica.webp" width={120} height={120} alt={""} />
					<strong>Album de música</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-2.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/10 flex group items-center gap-4 rounded hover:bg-white/20 overflow-hidden transition-colors"
				>
					<Image src="/musica.webp" width={120} height={120} alt={""} />
					<strong>Album de música</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-2.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/10 flex group items-center gap-4 rounded hover:bg-white/20 overflow-hidden transition-colors"
				>
					<Image src="/musica.webp" width={120} height={120} alt={""} />
					<strong>Album de música</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-2.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
				<a
					href="#"
					className="bg-white/10 flex group items-center gap-4 rounded hover:bg-white/20 overflow-hidden transition-colors"
				>
					<Image src="/musica.webp" width={120} height={120} alt={""} />
					<strong>Album de música</strong>
					<button className="w-12 h-12 flex items-center justify-center pl-2.5 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
						<Play />
					</button>
				</a>
			</div>

			<h2 className="font-semibold mt-10 text-2xl">Madsmfor Larissa Nunes</h2>

			<div className="grid grid-cols-5 gap-4 mt-4">
				<a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col">
					<Image
						src="/musica.webp"
						className="w-full"
						width={120}
						height={120}
						alt={""}
					/>
					<strong className="font-semibold">Daily Mix 1</strong>
					<span className="text-sm text-zinc-500 ">
						Larissa, Lucas, Karina, Jaime and more
					</span>
				</a>
				<a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col">
					<Image
						src="/musica.webp"
						className="w-full"
						width={120}
						height={120}
						alt={""}
					/>
					<strong className="font-semibold">Daily Mix 1</strong>
					<span className="text-sm text-zinc-500 ">
						Larissa, Lucas, Karina, Jaime and more
					</span>
				</a>
				<a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col">
					<Image
						src="/musica.webp"
						className="w-full"
						width={120}
						height={120}
						alt={""}
					/>
					<strong className="font-semibold">Daily Mix 1</strong>
					<span className="text-sm text-zinc-500 ">
						Larissa, Lucas, Karina, Jaime and more
					</span>
				</a>
				<a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col">
					<Image
						src="/musica.webp"
						className="w-full"
						width={120}
						height={120}
						alt={""}
					/>
					<strong className="font-semibold">Daily Mix 1</strong>
					<span className="text-sm text-zinc-500 ">
						Larissa, Lucas, Karina, Jaime and more
					</span>
				</a>
				<a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col">
					<Image
						src="/musica.webp"
						className="w-full"
						width={120}
						height={120}
						alt={""}
					/>
					<strong className="font-semibold">Daily Mix 1</strong>
					<span className="text-xs text-zinc-500 ">
						Larissa, Lucas, Karina, Jaime and more
					</span>
				</a>
			</div>
		</main>
	);
};

export default Main;
