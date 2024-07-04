import Helmet from 'react-helmet'

export default function WebsiteLayout() {
  return (
    <div className="flex h-screen w-full bg-warna-pale-blue">
      {/* --- Aside --- */}
      <div className="flex h-full flex-col bg-white p-32">tes</div>
      <div className="flex h-full flex-col p-32">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        possimus soluta inventore, iusto eaque reprehenderit. Fuga omnis
        laudantium deleniti magnam accusamus provident, tenetur recusandae
        suscipit? A officiis repellat delectus amet?
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Website</title>
        <link rel="canonical" href="https://demolaman1.avnet.id/" />
      </Helmet>
    </div>
  )
}
