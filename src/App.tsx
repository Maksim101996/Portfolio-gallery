import { MainGallery } from "./components/MainGallery/MainGallery"

function App() {

	return (
		<div className="App">
			<MainGallery photos={[
				{
					id: 1,
					src: "/photos/1.jpg",
					preview: "/photos/preview/1.jpg",
					desc: "nature1"
				},
				{
					id: 2,
					src: "/photos/2.jpg",
					preview: "/photos/preview/2.jpg",
					desc: "nature2"
				},
				{
					id: 3,
					src: "/photos/3.jpg",
					preview: "/photos/preview/3.jpg",
					desc: "nature3"
				},
				{
					id: 4,
					src: "/photos/4.jpg",
					preview: "/photos/preview/4.jpg",
					desc: "nature4"
				},
				{
					id: 5,
					src: "/photos/5.jpg",
					preview: "/photos/preview/5.jpg",
					desc: "nature5"
				},
				{
					id: 6,
					src: "/photos/6.jpg",
					preview: "/photos/preview/6.jpg",
					desc: "nature6"
				},
				{
					id: 7,
					src: "/photos/7.jpg",
					preview: "/photos/preview/7.jpg",
					desc: "nature7"
				},

			]} />
		</div>
	)
}

export default App
