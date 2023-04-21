import { MainGallery } from "./components/MainGallery/MainGallery"

function App() {

	return (
		<div className="App">
			<MainGallery photos={[
				{
					id: 1,
					src: "/photos/screen/1.png",
					preview: "/photos/screen/1.png",
					desc: "nature1"
				},
				{
					id: 2,
					src: "/photos/screen/2.png",
					preview: "/photos/screen/2.png",
					desc: "nature2"
				},
				{
					id: 3,
					src: "/photos/screen/3.png",
					preview: "/photos/screen/3.png",
					desc: "nature3"
				},
				{
					id: 4,
					src: "/photos/screen/4.png",
					preview: "/photos/screen/4.png",
					desc: "nature4"
				},
				{
					id: 5,
					src: "/photos/screen/5.png",
					preview: "/photos/screen/5.png",
					desc: "nature5"
				},
				{
					id: 6,
					src: "/photos/screen/6.png",
					preview: "/photos/screen/6.png",
					desc: "nature6"
				},
			]} />
		</div>
	)
}

export default App
