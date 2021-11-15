import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import "./CarouselComponent.css"

function CarouselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://cdn.discordapp.com/attachments/903702693208539196/909866042455638086/banner_onu_2.PNG"},
    {id: 2, title: 'item #2', img:"https://cdn.discordapp.com/attachments/903702693208539196/909866045240672306/banner_Onu_6.PNG"},
    {id: 3, title: 'item #3', img:"https://th.bing.com/th/id/R.cebd1d0d0f56d117162cdb9ff8fb2c52?rik=3ZiQZoxyJRnxZg&riu=http%3a%2f%2fodsterritorioecuador.ec%2fwp-content%2fuploads%2f2017%2f12%2fODS6-Agua-1038x576.png&ehk=6B0xDYS8MVIMLAK%2bUTrM%2fWUux3IpZPnqK54gRSPktuk%3d&risl=&pid=ImgRaw&r=0"},
    {id: 4, title: 'item #4', img:"https://blogs.iadb.org/agua/wp-content/uploads/sites/8/2020/07/ideas-en-accion-01_TW-1200x627px-800x418px.jpg"}
  ])
  return (
<Carousel className="cor" isRTL={false} enableAutoPlay autoPlaySpeed={7500}>
{items.map(item => <div key={item.id}>
<img src={item.img} alt="" width="1000px" height="500px" className="cor"/>

</div>)}
</Carousel>
  )
}

export default CarouselComponent
