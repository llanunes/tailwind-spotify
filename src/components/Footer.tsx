import {
	Laptop2,
	LayoutList,
	Maximize2,
	Mic2,
	Play,
	Repeat,
	Shuffle,
	SkipBack,
	SkipForward,
	Volume,
} from "lucide-react";

import Image from "next/image";

const Footer = () => {
	return (
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
	);
};

export default Footer;
