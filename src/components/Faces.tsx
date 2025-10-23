const Faces = () => {
	return (
		<div>
			<div className="fixed h-screen w-full bg-black -z-23 flex flex-col justify-center items-center">
				<div className="absolute w-full h-full diamond-gradient-white -z-2"></div>
				<img
					className="mx-auto -z-1 w-[157px] h-auto"
					src="/images/items/classic.png"
				/>
			</div>
			<div className="hidden lg:flex min-h-dvh flex-row justify-between items-center bg-black">
				<div className="flex flex-row items-center">
					<img src="/images/face1.png" alt="" />
					<h2 className="uppercase text-white text-[36px] font-[100] ml-[-100px]">
						Дух востока
					</h2>
				</div>
				<div>
					<img src="/images/nihao_hiero.png" alt="" />
				</div>
				<div className="flex flex-row items-center">
					<h2 className="uppercase text-white text-[36px] font-[100] mr-[-100px]">
						Вкус запада
					</h2>
					<img src="/images/face2.png" alt="" />
				</div>
			</div>
			<div className="flex h-screen lg:hidden flex-row justify-between items-center bg-black py-16 gap-6 overflow-clip">
				<img src="/images/face1_mobile.png" alt="" />
				<div className="flex flex-col justify-around">
					<h2 className="uppercase text-white font-extralight text-nowrap">
						Дух востока
					</h2>
					<img
						src="/images/nihao_hiero.png"
						className="my-16 h-[160px] w-auto"
						alt=""
					/>
					<h2 className="uppercase text-white font-extralight text-nowrap">
						Вкус запада
					</h2>
				</div>
				<img src="/images/face2_mobile.png " alt="" />
			</div>
		</div>
	);
};

export default Faces;
