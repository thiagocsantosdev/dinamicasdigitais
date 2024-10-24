<template>
    <div class="hero-content">
        <h1>Digital<span>ize</span> o seu negócio</h1>
        <h3>
            Transformação digital acessível para pequenos negócios locais, com foco em soluções simples e de baixo custo.
        </h3>
        <div class="buttons-container">
                <button>Eu quero</button>
                <button>Saber mais</button>
        </div>
    </div>
    
    <div>
    
    </div>

</template>


<style scoped>
    h1{
        font-size: 5rem;
        font-weight: 600;
        font-family: Roboto;
        line-height: 1;
    }

    h1 span{
        color: orange;
    }

    h3{
        color: rgb(218, 222, 245);
        font-weight: 500;
        margin-top: 12px;
    }

    .hero-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 90vh;
        padding: 20px;
        color:white;
      
    }

    .hero-content {
  background-image: url('/images/hero-1.png');
  background-color: rgba(0, 0, 0, 0.6); /* Fundo preto com 50% de opacidade */
  background-blend-mode: overlay; /* Controla a mescla */
  background-size: cover;
  background-position: center;
  color: white;
  background-attachment: fixed;
}

.buttons-container{
    margin-top: 50px;
    display: flex;
    gap: 20px;

}   

button:nth-child(1){
    background-color: orange;
    padding: 12px;
    border-radius: 15px;
    width: 108px;
}

button:nth-child(2){

    text-decoration:underline;
}


    
</style>