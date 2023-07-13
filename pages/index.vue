<template>
    <Carousel class="animate__animated animate__fadeIn" style="margin-top: 20px;" :value="urls" :numVisible="1" :numScroll="1" :autoplay-interval="5000">
        <template #item="slotProps">
            
            <div class="d-flex just-content-center" style="height: ;">
                <img :src="slotProps.data"
                        :alt="slotProps.data" class="w-6 shadow-2" style="border-radius: 5px; width: 1000px;" />
            </div>
        </template>
    </Carousel>
    <div class="p-20 animate__animated animate__fadeIn">
        <h1 class="text-main-color text-center">¿Qué es Petland?</h1>
        <p class="text-main-color text-center">Petland es un servicio web que te ayuda a encontrar tu mascota ideal y a
            adoptarla de forma responsable. En Petland, puedes buscar entre miles de animales de diferentes razas, edades y
            tamaños, que necesitan un hogar y una familia que los quiera. Además, Petland te asesora y te acompaña durante
            todo el proceso de adopción, desde la solicitud hasta el seguimiento post-adopción. Petland es más que un
            servicio web, es una comunidad de amantes de los animales que comparten su pasión y su compromiso con el
            bienestar animal. Si quieres darle una oportunidad a un animal que lo necesita, entra en Petland y descubre tu
            compañero ideal. Petland, el servicio web que te conecta con el amor de cuatro patas.</p>
        <div class="d-flex just-content-center">
            <img src="/img/hu.png" height="300" />
        </div>
        <p class="text-main-color text-center">
            Sociedad Protectora de Felinos Prrr-fect es un grupo de emprendedores que desarrollan diversas actividades por
            independientes con un fin en común, SER PRODUCTIVOS, ACTIVOS Y CAPACES de llevar labores animalistas por cuenta
            propia sin depender de donaciones físicas o digitales. No somos ONG, NI ASOCIACIÓN solo un grupo de personas
            afines a los animales sin hogar y protectores que unidos llevamos a cabo labores de rescate, acogida,
            rehabilitación y adopción de animales por voluntad propia y AMOR POR SOBRE TODAS LAS COSAS.
            <br />
            <br />
            Tenemos una sección de rubro de mascotas ganando de forma honrada trabajando nuestra Fundadora. Donde se destina
            un % a ser donantes activos, cuidar de nosotros mismos sin depender de donantes de nuestros refugiados, asi como
            servir de apoyo a estas causas de bienestar animal y grupos afines a los animales.

            "Los seres de 4 patas son lo primero para nosotros, detestamos la competencia y el individualismo por eso no
            encabezamos un numero como ONG, hacemos hasta donde podemos, compartimos de lo que tenemos, y haremos bien
            siempre sin mirar a quien, porque en nuestros corazones el objetivo es el mismo"
        </p>

        <div class="d-flex just-content-center">
            <img src="/img/dotnet.jpg" height="300" style="border-radius: 5px;" />
        </div>

        <p class="text-main-color text-center">
            Desarrolladores .Net es un grupo de Telegram que te invita a aprender y compartir conocimientos sobre desarrollo
            de software con el ambiente de .Net y tecnologías de Javascript. Esta comunidad fue fundada por Brian Pérez
            López, un desarrollador apasionado por la educación y la innovación, que quiso crear un espacio de interacción,
            apoyo y retroalimentación entre personas con diferentes niveles de experiencia y conocimiento en desarrollo de
            software.
            Al unirte a Desarrolladores .Net, podrás acceder a recursos, tutoriales, consejos, ejemplos y
            proyectos relacionados con .Net y Javascript, así como fomentar el desarrollo de habilidades, la creatividad y
            la solución de problemas mediante el uso de herramientas y metodologías actuales. Lo mejor de todo es que
            Desarrolladores .Net no tiene fines de lucro y se basa en los aportes voluntarios de cada miembro del grupo, lo
            que hace que sea una comunidad activa, diversa y solidaria. Para unirte a Desarrolladores .Net, solo necesitas
            tener una cuenta de Telegram y presionar el botón de abajo. Una vez que ingreses al
            grupo, puedes presentarte, consultar tus dudas, compartir tus ideas y participar en las actividades que se
            propongan. También puedes invitar a otras personas que creas que puedan estar interesadas en formar parte de
            esta comunidad. No importa si eres principiante o experto, si te gusta .Net o Javascript, si quieres desarrollar
            aplicaciones web, móviles o de escritorio. En Desarrolladores .Net encontrarás un lugar para ti.

        </p>
        <div class="d-flex just-content-center">
            <NuxtLink class="none-decoration" target="_blank" to="https://t.me/+4aZdHLLxia85Njdh">
                <Button>Unirme a la comunidad .Net</Button>
            </NuxtLink>
        </div>

    </div>
</template>

<script setup>

const urls = ['/img/c1.jpeg', '/img/c2.jpeg', '/img/c3.jpeg', '/img/c4.jpeg']

useHead({
    title: 'Inicio'
})


</script>