<template>

    <div class="container-about">
           <h3>um pouco sobre nós</h3>
        <h1>O digital é para todos</h1>
        <div class="container-about-text">
        <p>Na Dinâmicas Digitais, acreditamos no imenso potencial dos pequenos negócios. Sabemos que, <span class="sublinhar-animation"> com o suporte certo, qualquer empresa pode alcançar grandes resultados no ambiente digital.</span> Nosso foco é entender suas necessidades e oferecer soluções personalizadas, que se adaptam à realidade do seu negócio.</p>
        <p>Se você não tem muita familiaridade com tecnologia, fique tranquilo. Estamos aqui para guiá-lo em cada etapa, com uma linguagem próxima e suporte de verdade. Vamos transformar juntos seu negócio, sempre priorizando o que é melhor para você, com soluções que cabem no seu bolso e fazem a diferença.</p>
        </div>
    </div>



  
</template>

<style scoped>


    .scroll-watcher{
        height: 10px;
        position: fixed;
        top: 0;
        z-index: 1000;
        background-color: lime;
        width: 100%;
        scale: 0 1;
        animation: scroll-watcher linear;
        animation-timeline: scroll() ;
    }
        


    .container-about{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        

    }

    

    h1{
        padding: 20px;
        animation:SugirBaixoCima 2s ease-in-out;
        font-size: 3rem;
        font-weight: 600;
        font-family: Poppins;
        position: relative;
    }


    h3{
        margin-left: 20px;
        margin-top: 60px;
        font-family: 'Poppins';
        color: gray;
    }


    .container-about-text{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0px 20px 20px 20px;
        gap: 20px;
        font-family: Poppins;
      
    }


    @keyframes SugirBaixoCima{
        
        from{
            opacity: 0;
            transform: translateY(100%);
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }







</style>