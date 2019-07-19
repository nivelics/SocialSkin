import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinalistService {

  constructor() {

  }

  getDataFinalist(): any {
    return [{
      "type": "inclusion,_reduccion_de_desigualdades_y_pobreza", "html": `
        <div class="item-list winner">
          <picture  class="box-img">
            <source type="image/webp" srcset="">
            <source type="image/jp2" srcset="">
            <source type="image/jxr" srcset="">       
            <a href="/el-premio-colombia/finalistas/comproagro">    
              <img src="../../../../assets/img/lista-finalistas/comproagro.jpg" alt="comproagro">
            </a>
          </picture>
          <div class="info">
            <h2 class="title"><i class="icon-winner"></i><a href="/el-premio-colombia/finalistas/comproagro">Comproagro</a></h2>
            <p class="desc">El futuro esta en acercar la tecnologia al campo, empoderar a la mujer campesina y fortalecer las habilidades tecnologícas en los jóvenes rural.</p>
          </div>
        </div>
    `}, {
      "type": "salud_y_bienestar", "html": `
    <div class="item-list">
      <picture  class="box-img">
            <source type="image/webp" srcset="">
            <source type="image/jp2" srcset="">
            <source type="image/jxr" srcset="">       
            <a href="/el-premio-colombia/finalistas/soy-julieta">   
              <img src="../../../../assets/img/lista-finalistas/soy-julieta.jpg" alt="Soy Julieta">
            </a>
          </picture>
          <div class="info">
            <h2 class="title"><a href="/el-premio-colombia/finalistas/soy-julieta">Soy Julieta</a></h2>
            <p class="desc">Entendemos que las mujeres son la columna vertebral de la familia y la sociedad, con Julieta podemos salvarlas de una muerte innecesaria. </p>
          </div>
    </div>
`}, {
      "type": "", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">   
        <a href="/el-premio-colombia/finalistas/wayuuda">   
          <img src="../../../../assets/img/lista-finalistas/wayuuda.jpg" alt="Wayuuda">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/wayuuda">Wayuuda</a></h2>
        <p class="desc">El agua es generadora de vida, con él estoy dando la oportunidad a la etnia wayuu de tener este preciado liquido, verlo brotar del desierto.</p>
      </div>
</div>
`}, {
      "type": "salud_y_bienestar", "html": `
<div class="item-list">
   <picture  class="box-img">
     <source type="image/webp" srcset="">
     <source type="image/jp2" srcset="">
     <source type="image/jxr" srcset="">       
     <a href="/el-premio-colombia/finalistas/estacion-de-potabilizacion-de-aguas-lluvias">   
       <img src="../../../../assets/img/lista-finalistas/potabilizacion.jpg" alt="Estacion de Potabilizacion de Aguas Lluvias">
     </a>
   </picture>
   <div class="info">
     <h2 class="title"><a href="/el-premio-colombia/finalistas/estacion-de-potabilizacion-de-aguas-lluvias">Estacion de Potabilizacion de Aguas Lluvias</a></h2>
     <p class="desc">Para cambiar al mundo se empieza por uno mismo, este proyecto genera acciones de conciencia para dar solución a una realidad.</p>
   </div>
 </div>
`}, {
      "type": "salud_y_bienestar", "html": `
<div class="item-list">
  <picture  class="box-img">
    <source type="image/webp" srcset="">
    <source type="image/jp2" srcset="">
    <source type="image/jxr" srcset="">       
    <a href="/el-premio-colombia/finalistas/capio">   
      <img src="../../../../assets/img/lista-finalistas/capio.jpg" alt="Capio">
    </a>
  </picture>
  <div class="info">
    <h2 class="title"><a href="[el-premio-colombia/finalistas/capio">Capio</a></h2>
    <p class="desc">Humanizamos la tecnología y la ponemos a disposición de quienes más lo necesitan. Devolvemos autonomía a los pacientes para seguir avanzando.</p>
  </div>
</div>
`}
      ,
    {
      "type": "salud_y_bienestar", "html": `
<div class="item-list">
  <picture  class="box-img">
    <source type="image/webp" srcset="">
    <source type="image/jp2" srcset="">
    <source type="image/jxr" srcset="">       
    <a href="/el-premio-colombia/finalistas/doggy-in-home">   
      <img src="../../../../assets/img/lista-finalistas/doggy.jpg" alt="Proyecto Doggy In Home">
    </a>
  </picture>
  <div class="info">
    <h2 class="title"><a href="/el-premio-colombia/finalistas/doggy-in-home">Proyecto Doggy In Home</a></h2>
    <p class="desc">Aprovechamiento y mutuo beneficio de la interacción humano animal y su relación con los procesos de regulación emocional, comportamental.</p>
  </div>
</div> 
`},
    {
      "type": "educación_de_calidad", "html": `
<div class="item-list">
  <picture  class="box-img">
      <source type="image/webp" srcset="">
      <source type="image/jp2" srcset="">
      <source type="image/jxr" srcset="">       
      <a href="/el-premio-colombia/finalistas/colegio-la-fontaine">   
        <img src="../../../../assets/img/lista-finalistas/la-fontaine.jpg" alt="Colegio La Fontaine">
      </a>
    </picture>
    <div class="info">
      <h2 class="title"><a href="/el-premio-colombia/finalistas/colegio-la-fontaine">Colegio La Fontaine</a></h2>
      <p class="desc">Creamos una comunidad donde fluye el conocimiento como fuente de vida e instrumento de cambio para un futuro sostenible.</p>
    </div>
</div>
`},
    {
      "type": "educación_de_calidad", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/fenix-planet">    
          <img src="../../../../assets/img/lista-finalistas/fenix.jpg" alt="Fénix Planet">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/fenix-planet">Fénix Planet</a></h2>
        <p class="desc">Disminuiremos el efecto invernadero causado por la contaminación de estas llantas y haremos campos deportivos para todas las clases sociales.</p>
      </div>
</div>
`},
    {
      "type": "impacto_al_medio_ambiente", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/educycle">    
          <img src="../../../../assets/img/lista-finalistas/educycle.jpg" alt="EduCycle = Education + Recycle">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/educycle">EduCycle = Education + Recycle</a></h2>
        <p class="desc">Educamos acerca de una correcta separación de residuos, mejoramos los hábitos de millones de personas e impactamos positivamente al mundo.</p>
      </div>
</div>
`},
    {
      "type": "impacto _al_medio_ambiente", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/reformatec">    
          <img src="../../../../assets/img/lista-finalistas/reformatec.jpg" alt="Reformatec">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/reformatec">Reformatec</a></h2>
        <p class="desc">Con mi proyecto quiero ayudar a todas las personas que hoy por hoy no cuentan con el servicio de alcantarillado, quiero ayudar de corazon.</p>
      </div>
</div>
`}, {
      "type": "impacto_al_medio_ambiente", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/tierra-grata">    
          <img src="../../../../assets/img/lista-finalistas/tierra-grata.jpg" alt="Tierra Grata">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/tierra-grata">Tierra Grata</a></h2>
        <p class="desc">Dignificamos la vida de las comunidades rurales a través de soluciones innovadoras que garantizan el acceso a los servicios básicos.</p>
      </div>
</div>
`}, {
      "type": "impacto_al_medio_ambiente", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/iwa">   
          <img src="../../../../assets/img/lista-finalistas/iwa.jpg" alt="IWA">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/iwa">IWA</a></h2>
        <p class="desc">Hacemos que las comunidades más vulnerables tengan acceso a iluminación, conectando el campo con las mismas oportunidades de la zona urbana.</p>
      </div>
</div>
`}, {
      "type": "ciudades_y_comunidades_sostenibles", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/nibi">    
          <img src="../../../../assets/img/lista-finalistas/nibi.jpg" alt="NIBI">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/nibi">NIBI</a></h2>
        <p class="desc">Imagínense el impacto de conectar a todos esos millones de personas que quieren hacer cosas buenas con programas que buscan cambiar el mundo.</p>
      </div>
</div>
`}, {
      "type": "ciudades_y_comunidades_sostenibles", "html": `
<div class="item-list">
    <picture  class="box-img">
          <source type="image/webp" srcset="">
          <source type="image/jp2" srcset="">
          <source type="image/jxr" srcset="">       
          <a href="/el-premio-colombia/finalistas/water-is-life">   
            <img src="../../../../assets/img/lista-finalistas/water-is-life.jpg" alt="Water is Life">
          </a>
        </picture>
        <div class="info">
          <h2 class="title"><a href="/el-premio-colombia/finalistas/water-is-life">Water is Life</a></h2>
          <p class="desc">El 65 por ciento del agua disponible se usa en la agricultura; el 25 por ciento se utiliza en la industria y el 10 por ciento se destina a u.</p>
        </div>
</div>
`}, {
      "type": "ciudades_y_comunidades_sostenibles", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/proyecto-truequeros">   
          <img src="../../../../assets/img/lista-finalistas/truequeros.jpg" alt="Proyecto Truequeros, agencia creativa para el agro colombiano">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/proyecto-truequeros">Proyecto Truequeros, agencia creativa para el agro colombiano </a></h2>
        <p class="desc">Lograremos que los agricultores tenga la posibilidad de crear  empresa, gracias al pago justo de su trabajo y a la calidad de sus productos.</p>
      </div>
</div>
`}, {
      "type": "trabajo_decente_y_crecimiento_economico_sostenible", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/biotor">    
          <img src="../../../../assets/img/lista-finalistas/biotor.jpg" alt="Biotor">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/biotor">Biotor</a></h2>
        <p class="desc">Empoderamos y formamos a los productores como empresarios del campo; con tecnología, nuevos mercados y mejores condiciones laborales.</p>
      </div>
</div>
`}, {
      "type": "trabajo_decente_y_crecimiento_economico_sostenible", "html": `
<div class="item-list">
  <picture  class="box-img">
        <source type="image/webp" srcset="">
        <source type="image/jp2" srcset="">
        <source type="image/jxr" srcset="">       
        <a href="/el-premio-colombia/finalistas/red-universitaria-anticorrupcion">    
          <img src="../../../../assets/img/lista-finalistas/redUva.jpg" alt="Red Universitaria Anticorrupción (RedUva)">
        </a>
      </picture>
      <div class="info">
        <h2 class="title"><a href="/el-premio-colombia/finalistas/red-universitaria-anticorrupcion">Red Universitaria Anticorrupción (RedUva)</a></h2>
        <p class="desc">Cambiamos la vida de las personas, quienes a su vez, contagiadas de nuestras buenas intenciones, impactan a otros y por lo tanto al país.</p>
      </div>
</div>
`}, {
      "type": "transparencia,_justicia_y_cero_corrupción", "html": `
<div class="item-list">
    <picture  class="box-img">
          <source type="image/webp" srcset="">
          <source type="image/jp2" srcset="">
          <source type="image/jxr" srcset="">       
          <a href="/el-premio-colombia/finalistas/aspersores-de-paz">   
            <img src="../../../../assets/img/lista-finalistas/aspersores.jpg" alt="Aspersores de paz, con economía circular">
          </a>
        </picture>
        <div class="info">
          <h2 class="title"><a href="/el-premio-colombia/finalistas/aspersores-de-paz">Aspersores de paz, con economía circular</a></h2>
          <p class="desc">Crea tejido social cuando se construye microaspersores, aprovechando las energías limpias y libres como la solar, para la obtención del agua.</p>
        </div>
  </div>
`}, {
      "type": "impacto_al_medio_ambiente", "html": `
<div class="item-list">
    <picture  class="box-img">
          <source type="image/webp" srcset="">
          <source type="image/jp2" srcset="">
          <source type="image/jxr" srcset="">       
          <a href="/el-premio-colombia/finalistas/organicum">   
            <img src="../../../../assets/img/lista-finalistas/organicum.jpg" alt="Organicum">
          </a>
        </picture>
        <div class="info">
          <h2 class="title"><a href="/el-premio-colombia/finalistas/organicum">Organicum</a></h2>
          <p class="desc">Por la contribución al desarrollo del sector agrícola, donde se manifiesta gran cambio social, generando consciencia.</p>
        </div>
  </div>
`}, {
      "type": "impacto_al_medio_ambiente", "html": `
<div class="item-list">
    <picture  class="box-img">
          <source type="image/webp" srcset="">
          <source type="image/jp2" srcset="">
          <source type="image/jxr" srcset="">       
          <a href="/el-premio-colombia/finalistas/mango-juice-company">   
            <img src="../../../../assets/img/lista-finalistas/mango-juice.jpg" alt="Mango Juice Company">
          </a>
        </picture>
        <div class="info">
          <h2 class="title"><a href="/el-premio-colombia/finalistas/mango-juice-company">Mango Juice Company</a></h2>
          <p class="desc">A través del valor que se le da a todas las partes de la cadena productiva que colaboran para la elaboración de un producto natural. </p>
        </div>
  </div>
`},
    {
      "type": "impacto_al_medio_ambiente", "html": `
  <div class="item-list">
    <picture  class="box-img">
          <source type="image/webp" srcset="">
          <source type="image/jp2" srcset="">
          <source type="image/jxr" srcset="">       
          <a href="/el-premio-colombia/finalistas/home-service">    
            <img src="../../../../assets/img/lista-finalistas/home-service.jpg" alt="Home Service">
          </a>
        </picture>
        <div class="info">
          <h2 class="title"><a href="/el-premio-colombia/finalistas/home-service">Home Service</a></h2>
          <p class="desc">HomeService cambia el mundo de aquellas personas que ahora pueden aumentar su calidad de vida por medio de mayor acceso a un trabajo digno.</p>
        </div>
  </div>
  `}
    ]
  }

}