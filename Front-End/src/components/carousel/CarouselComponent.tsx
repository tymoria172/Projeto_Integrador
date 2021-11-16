import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import "./CarouselComponent.css"

function CarouselComponent() {
  const [items, setstate] = useState([
    {id: 1, title: 'item #1', img:"https://cdn.discordapp.com/attachments/903702693208539196/909866042455638086/banner_onu_2.PNG"},
    {id: 2, title: 'item #2', img:"https://cdn.discordapp.com/attachments/903702693208539196/909866045240672306/banner_Onu_6.PNG"},
    {id: 3, title: 'item #3', img:"https://th.bing.com/th/id/R.f9ce86d5eac2bf05671893d9e66cf1f2?rik=D0eMkCOdHceB6w&riu=http%3a%2f%2fmeioinfo.eco.br%2fwp-content%2fuploads%2f2017%2f02%2franking.png&ehk=89bqUrgzKiM1iSl2%2bnxkhBbxq5ceFJzJLooIkdpZCyg%3d&risl=&pid=ImgRaw&r=0"},
    {id: 4, title: 'item #4', img:"https://jornal.usp.br/wp-content/uploads/2020/04/20200428_mapas-agua-esgosto.jpg"}
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