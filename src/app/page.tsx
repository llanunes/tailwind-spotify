import {
	ChevronLeft,
	ChevronRight,
	Home as HomeIcon,
	Laptop2,
	LayoutList,
	Library,
	Maximize2,
	Mic2,
	Play,
	Repeat,
	Search,
	Shuffle,
	SkipBack,
	SkipForward,
	Volume,
} from "lucide-react";
import Image from "next/image";

function Home() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<aside className="w-72 bg-zinc-950 p-6">
					<div className="flex items-center gap-2 space-x-1">
						<div className="w-3 h-3 bg-red-500 rounded-full"></div>
						<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
						<div className="w-3 h-3 bg-green-500 rounded-full"></div>
					</div>
					<nav className="space-y-5 mt-10">
						<a
							href=""
							className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
						>
							<HomeIcon />
							Home
						</a>
						<a
							href=""
							className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
						>
							<Search />
							Search
						</a>
						<a
							href=""
							className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
						>
							<Library />
							Your Library
						</a>
					</nav>

					<nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Maiara e Maraísa
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Victor e Leo
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Matheus e Kauan
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Luan Santana
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Marília Mendonça
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Ana Vitória
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Anitta
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Gabi Martins
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Gustavo Lima
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Samantha Perez
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Larissa Nunes
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Lucas Nunes
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Moisés Sousa
						</a>
						<a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
							Karina Nunes
						</a>
					</nav>
				</aside>
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

					<h2 className="font-semibold mt-10 text-2xl">
						Madsmfor Larissa Nunes
					</h2>

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
			</div>
			<footer className="bg-zinc-800 border-t border-zinc-900 p-6  flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Image
						src="/musica.webp"
						className="w-full"
						width={80}
						height={80}
						alt={""}
					/>
					<div className="flex flex-col">
						<strong className="font-normal">Música</strong>
						<span className="text-xs text-zinc-500">Larissa</span>
					</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<div className="flex items-center gap-6">
						<Shuffle className="text-zinc-200" size={20} />
						<SkipBack className="text-zinc-200" size={20} />
						<button className="w-10 h-10 flex items-center justify-center pl-2.5 p-2 rounded-full bg-white text-black">
							<Play />
						</button>
						<SkipForward className="text-zinc-200" size={20} />
						<Repeat className="text-zinc-200" size={20} />
					</div>
					<div className="flex items-center gap-2">
						<span className="text-xs text-zinc-400">0:31</span>
						<div className="h-1 rounded-full w-96 bg-zinc-600">
							<div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
						</div>
						<span className="text-xs text-zinc-400">2:23</span>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Mic2 size={20} />
					<LayoutList size={20} />
					<Laptop2 size={20} />
					<div className="flex items-center gap-2">
						<Volume size={20} />
						<div className="h-1 rounded-full w-24 bg-zinc-600">
							<div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
						</div>
					</div>
					<Maximize2 size={20} />
				</div>
			</footer>
		</div>
	);
}

export default Home;
