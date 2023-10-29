import { HomeIcon, Library, Search } from "lucide-react";

const SideBar = () => {
	return (
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
	);
};

export default SideBar;
