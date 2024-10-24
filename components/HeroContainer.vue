<template>
    <div class="hero-content">
        <div class="container-slogan">
            <h1>Digitalize</h1>
            <h1>o seu</h1>
            <h1>Negócio</h1>  
        </div>
        
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
    h1:nth-child(1){
        animation: SugirDaEsquerda 1s ease-in-out;
    }
    h1:nth-child(2){
        animation: SugirDaDireita 1s ease-in-out;
    }
    h1:nth-child(3){
        animation: SugirDaEsquerda 1s ease-in-out;
    }

    h1 span{
        color: orange;
    }

    h3{
        color: rgb(218, 222, 245);
        font-weight: 500;
        margin-top: 12px;
        animation: Sugir 2s ease-in-out;
    }

    .hero-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
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
    animation: Sugir 2s ease-in-out;

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


@keyframes SugirDaEsquerda{
          from{
         
            transform:  translateX(-100%);
          }
          to {
            transform:  translateX(0);
          }
    }

    @keyframes SugirDaDireita{
          from{
         
            transform:  translateX(100%);
          }
          to {
            transform:  translateX(0);
          }
    }


    @keyframes Sugir{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    
</style>